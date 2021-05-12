import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setUser,
  setUserError,
  setUserLoading,
  resetState,
  userHasRecovered,
  userHasRegistered,
  setUserIsChecked,
  setPasswordIsReset,
  setConfirmationEmailStatus,
  setUserIsConfirmed,
  setConfirmationLoading,
  setRecoveryLoading,
  setUserOrders
} from './user.actions';
import {
  loginUser,
  getGoogleUser,
  confirmUserEmail,
  recoverUser,
  checkIfTokenIsValid,
  registerUser,
  updateUserById,
  sendEmailConfirmation,
  resetPassword,
  getUserOrders,
  getUserByToken,
  regenerateUserTokenPairs,
  getPurchasedProducts
} from './user.operations';
import { setUserErrorType } from '../../utils/user-helpers';
import { mergeCartFromLSWithUserCart, getCartByUserId } from '../cart/cart.operations';
import {
  LOGIN_USER,
  CONFIRM_USER,
  RECOVER_USER,
  PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID,
  REGISTER_USER,
  PRESERVE_USER,
  UPDATE_USER,
  SEND_CONFIRMATION_EMAIL,
  GET_USER_ORDERS,
  LOGIN_BY_GOOGLE,
  LOGOUT_USER
} from './user.types';
import {
  REDIRECT_TIMEOUT,
  cartKey,
  USER_IS_BLOCKED,
  USER_TOKENS,
  wishlistKey,
  GRAPHQL_ERROR,
  RETURN_PAGE
} from '../../configs/index';
import routes from '../../configs/routes';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { setCart, setCartTotalPrice, setCartLoading, resetCart } from '../cart/cart.actions';
import { setWishlist } from '../wishlist/wishlist.actions';
import { handleIsUserBlockedChecker } from '../../utils/is-user-blocked-checker';
import { AUTH_ERRORS } from '../../const/error-messages';

const { pathToLogin, pathToProfile, pathToErrorPage } = routes;
const { ACCESS_TOKEN, REFRESH_TOKEN } = USER_TOKENS;

export function* handleGoogleUserLogin({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(getGoogleUser, payload);

    const purchasedProducts = yield call(getPurchasedProducts, user._id);

    setToLocalStorage(REFRESH_TOKEN, user.refreshToken);
    setToLocalStorage(ACCESS_TOKEN, user.token);
    setToLocalStorage(wishlistKey, user.wishlist);
    yield put(setUser({ ...user, purchasedProducts }));
    yield put(push(pathToProfile));
  } catch (e) {
    yield call(handleUserError, e);
  } finally {
    yield put(setUserLoading(false));
  }
}

export function* handleUserLoad({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(loginUser, payload);

    const purchasedProducts = yield call(getPurchasedProducts, user._id);

    setToLocalStorage(REFRESH_TOKEN, user.refreshToken);
    setToLocalStorage(ACCESS_TOKEN, user.token);
    setToLocalStorage(wishlistKey, user.wishlist);
    yield put(setUser({ ...user, purchasedProducts }));
    yield put(setWishlist(user.wishlist));
    const cartFromLc = getFromLocalStorage(cartKey);
    if (cartFromLc.length) {
      const mergedCart = yield call(mergeCartFromLSWithUserCart, cartFromLc, user._id);
      yield put(setCart(mergedCart.cart.items));
      yield put(setCartTotalPrice(mergedCart.cart.totalPrice));
      setToLocalStorage(cartKey, mergedCart.cart.items);
    }
    yield put(setUserLoading(false));
    const returnPage = sessionStorage.getItem(RETURN_PAGE);
    yield put(push(returnPage));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleUserConfirm({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(confirmUserEmail, payload);
    yield put(setUserLoading(false));
    yield put(setUserIsConfirmed(true));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleUserRecovery({ payload }) {
  try {
    yield put(resetState());
    yield put(setRecoveryLoading(true));
    yield call(recoverUser, payload);
    yield put(setRecoveryLoading(false));
    yield put(userHasRecovered(true));
    if (payload.redirect) {
      yield delay(REDIRECT_TIMEOUT);
      yield put(push(pathToLogin));
    }
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handlePasswordReset({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(resetPassword, payload);
    yield put(setUserLoading(false));
    yield put(setPasswordIsReset(true));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push(pathToLogin));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleTokenCheck({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(checkIfTokenIsValid, payload);
    yield put(setUserLoading(false));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleUserRegister({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const response = yield call(registerUser, payload);
    if (response.statusCode) {
      throw new Error(setUserErrorType(response.message, payload.language));
    }
    yield put(setUserLoading(false));
    yield put(userHasRegistered(true));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleUserPreserve() {
  try {
    yield put(setUserLoading(true));
    yield put(setCartLoading(true));
    const refreshToken = getFromLocalStorage(REFRESH_TOKEN);
    if (refreshToken) {
      const newAccessToken = yield call(regenerateUserTokenPairs, refreshToken);
      setToLocalStorage(ACCESS_TOKEN, newAccessToken);
    }
    const user = yield call(getUserByToken);
    yield call(handleIsUserBlockedChecker, user);
    const purchasedProducts = yield call(getPurchasedProducts, user._id);
    yield put(setUser({ ...user, purchasedProducts }));
    const userCart = yield call(getCartByUserId, user._id);
    yield put(setCart(userCart.cart.items));
    yield put(setCartTotalPrice(userCart.cart.totalPrice));
    yield put(setCartLoading(false));
  } catch (e) {
    yield call(handleUserError, e);
  } finally {
    yield put(setUserIsChecked(true));
    yield put(setCartLoading(false));
    yield put(setUserLoading(false));
  }
}

export function* handleUpdateUser({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(updateUserById, payload);
    yield call(handleIsUserBlockedChecker, user);
    const purchasedProducts = yield call(getPurchasedProducts, user._id);
    yield put(setUser({ ...user, purchasedProducts }));
    yield put(setUserLoading(false));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleSendConfirmation({ payload }) {
  try {
    yield put(resetState());
    yield put(setConfirmationLoading(true));
    yield call(sendEmailConfirmation, payload);
    yield put(setConfirmationLoading(false));
    yield put(setConfirmationEmailStatus(true));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleGetUserOrders() {
  try {
    yield put(setUserLoading(true));
    const orders = yield call(getUserOrders);
    yield put(setUserOrders(orders));
    yield put(setUserLoading(false));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleUserLogout() {
  yield put(setUser(null));
  yield put(resetCart());
  setToLocalStorage(ACCESS_TOKEN, null);
  setToLocalStorage(REFRESH_TOKEN, null);
  setToLocalStorage(cartKey, []);
}

function* handleUserError(e) {
  if (e.message === USER_IS_BLOCKED || e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID) {
    yield call(handleUserLogout);
    yield put(setUserError(e.message));
  } else {
    yield put(setConfirmationLoading(false));
    yield put(setUserError(e.message.replace(GRAPHQL_ERROR, '')));
    yield put(push(pathToErrorPage));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
  yield takeEvery(CONFIRM_USER, handleUserConfirm);
  yield takeEvery(RECOVER_USER, handleUserRecovery);
  yield takeEvery(PASSWORD_RESET, handlePasswordReset);
  yield takeEvery(CHECK_IF_TOKEN_VALID, handleTokenCheck);
  yield takeEvery(REGISTER_USER, handleUserRegister);
  yield takeEvery(PRESERVE_USER, handleUserPreserve);
  yield takeEvery(UPDATE_USER, handleUpdateUser);
  yield takeEvery(SEND_CONFIRMATION_EMAIL, handleSendConfirmation);
  yield takeEvery(GET_USER_ORDERS, handleGetUserOrders);
  yield takeEvery(LOGIN_BY_GOOGLE, handleGoogleUserLogin);
  yield takeEvery(LOGOUT_USER, handleUserLogout);
}
