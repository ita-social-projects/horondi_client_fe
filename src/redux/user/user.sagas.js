import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  resetState,
  setConfirmationEmailStatus,
  setConfirmationLoading,
  setPasswordIsReset,
  setRecoveryLoading,
  setUser,
  setUserError,
  setUserIsChecked,
  setUserIsConfirmed,
  setUserLoading,
  setUserOrders,
  userHasRecovered,
  userHasRegistered
} from './user.actions';
import {
  checkIfTokenIsValid,
  confirmUserEmail,
  getGoogleUser,
  getFacebookUser,
  getPurchasedProducts,
  getUserByToken,
  loginUser,
  recoverUser,
  registerUser,
  resetPassword,
  sendEmailConfirmation,
  updateUserById,
  getWishlistByUserId
} from './user.operations';
import {
  CHECK_IF_TOKEN_VALID,
  CONFIRM_USER,
  LOGIN_BY_GOOGLE,
  LOGIN_BY_FACEBOOK,
  LOGIN_USER,
  LOGOUT_USER,
  PASSWORD_RESET,
  PRESERVE_USER,
  RECOVER_USER,
  REGISTER_USER,
  SEND_CONFIRMATION_EMAIL,
  UPDATE_USER
} from './user.types';
import {
  REDIRECT_TIMEOUT,
  RETURN_PAGE,
  USER_IS_BLOCKED,
  USER_TOKENS,
  AUTH_ERRORS,
  newCartKey,
  WISHLIST_KEY
} from '../../configs';
import routes from '../../configs/routes';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { handleUserIsBlocked } from '../../utils/user-helpers';
import { setCart, setNewWishlist } from '../common-store/common.actions';
import i18n from '../../i18n';

const { pathToLogin } = routes;
const { ACCESS_TOKEN, REFRESH_TOKEN } = USER_TOKENS;

function* setLoginUser(user) {
  const purchasedProducts = yield call(getPurchasedProducts, user._id);
  setToLocalStorage(REFRESH_TOKEN, user.refreshToken);
  setToLocalStorage(ACCESS_TOKEN, user.token);
  const wishlist = yield call(getWishlistByUserId);
  setToLocalStorage(WISHLIST_KEY, wishlist.products);
  yield put(setNewWishlist(wishlist.products));
  yield put(setUser({ ...user, purchasedProducts, wishlist }));
}

export function* handleGoogleUserLogin({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(getGoogleUser, payload);
    yield setLoginUser(user);
    const returnPage = sessionStorage.getItem(RETURN_PAGE);
    yield put(push(returnPage));
  } catch (e) {
    yield call(handleUserError, e);
  } finally {
    yield put(setUserLoading(false));
  }
}

export function* handleFacebookUserLogin({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(getFacebookUser, payload);
    yield setLoginUser(user);
    const returnPage = sessionStorage.getItem(RETURN_PAGE);
    yield put(push(returnPage));
  } catch (e) {
    yield call(handleUserError, e);
  } finally {
    yield put(setUserLoading(false));
  }
}

export function* handleUserLogin({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(loginUser, payload);
    yield setLoginUser(user);
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
    const user = yield call(confirmUserEmail, payload);
    setToLocalStorage(ACCESS_TOKEN, user.token);
    setToLocalStorage(REFRESH_TOKEN, user.refreshToken);
    yield call(handleUserPreserve);
    yield put(setUserIsConfirmed(true));
    yield put(setUserLoading(false));
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

export function* handleUserRegister({ payload }) {
  try {
    yield put(setUserLoading(true));
    yield call(registerUser, payload);
    yield put(setUserLoading(false));
    yield put(userHasRegistered(true));
  } catch (e) {
    yield call(handleUserError, e);
  }
}

export function* handleUserPreserve() {
  try {
    yield put(setUserLoading(true));
    const accessToken = getFromLocalStorage(ACCESS_TOKEN);
    if (!accessToken) {
      return;
    }
    const user = yield call(getUserByToken);
    const purchasedProducts = yield call(getPurchasedProducts, user._id);
    yield put(setUser({ ...user, purchasedProducts }));
    const cartFromLc = getFromLocalStorage(newCartKey);
    yield put(setCart(cartFromLc));
  } catch (e) {
    yield call(handleUserError, e);
  } finally {
    yield put(setUserIsChecked(true));
    yield put(setUserLoading(false));
  }
}

export function* handleUpdateUser({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(updateUserById, payload);
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

export function* handleUserLogout() {
  yield put(setUser(null));
  yield put(setUserOrders(null));
  setToLocalStorage(REFRESH_TOKEN, '');
  setToLocalStorage(ACCESS_TOKEN, '');
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

export function* handleRefreshTokenInvalid() {
  yield call(handleUserLogout);
  yield put(push(pathToLogin));
}

export function* handleUserError(e) {
  if (e?.message === USER_IS_BLOCKED) {
    yield call(handleUserIsBlocked);
  } else if (e?.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID) {
    yield call(handleRefreshTokenInvalid);
  } else if (i18n.exists(`error.userError.${e?.message}`)) {
    yield put(setUserError(i18n.t(`error.userError.${e.message}`)));
  } else {
    yield put(setUserError(i18n.t('error.userError.defaultError')));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLogin);
  yield takeEvery(CONFIRM_USER, handleUserConfirm);
  yield takeEvery(RECOVER_USER, handleUserRecovery);
  yield takeEvery(PASSWORD_RESET, handlePasswordReset);
  yield takeEvery(CHECK_IF_TOKEN_VALID, handleTokenCheck);
  yield takeEvery(REGISTER_USER, handleUserRegister);
  yield takeEvery(PRESERVE_USER, handleUserPreserve);
  yield takeEvery(UPDATE_USER, handleUpdateUser);
  yield takeEvery(SEND_CONFIRMATION_EMAIL, handleSendConfirmation);
  yield takeEvery(LOGIN_BY_GOOGLE, handleGoogleUserLogin);
  yield takeEvery(LOGIN_BY_FACEBOOK, handleFacebookUserLogin);
  yield takeEvery(LOGOUT_USER, handleUserLogout);
}
