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
import { getUserByToken, regenerateAccessToken, getPurchasedProducts } from './user.operations';
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
  LOGIN_BY_GOOGLE
} from './user.types';
import getItems, { setItems } from '../../utils/client';
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
import { setCart, setCartTotalPrice, setCartLoading } from '../cart/cart.actions';
import { setWishlist } from '../wishlist/wishlist.actions';
import { handleIsUserBlockedChecker } from '../../utils/is-user-blocked-checker';

const { pathToLogin, pathToProfile, pathToErrorPage } = routes;
const { ACCESS_TOKEN, REFRESH_TOKEN } = USER_TOKENS;

export const loginUser = (data) => {
  const query = `
  mutation login($user: LoginInput!){
  loginUser(
    loginInput: $user
  ) {    
    orders
    token
    refreshToken
    _id
    email
    firstName
    lastName
    phoneNumber
    confirmed
    images {
      thumbnail
    }
    address {
      country
      city
      street
      buildingNumber
      appartment
      region
      zipcode
		}
		banned{
      blockPeriod
      blockCount
      updatedAt
    }
		wishlist {
			_id
			name {
				lang
				value
			}
			basePrice {
				currency
				value
			}
			images {
			  primary {
			    small
			  }			  
			}
		}
    cart{
      items {
        product {
        _id
        name {
            lang
            value
        }
        category{
          _id
        }
        bottomMaterial{
            material{
            name{
                lang
                value
            }
            }
        }
        mainMaterial{
          color{
            _id
            name{
              lang
              value
            }
          }
        }
        pattern{
          _id
        }
        images{
            primary{
            small
            thumbnail
            }
        }
        
        }
        quantity
        options {
        size {
            _id
            name
        }
        }
        price {
        value
        }
    }
      totalPrice{
        value
      }
    }
  }
}
  `;
  return setItems(query, data);
};

export function* handleGoogleUserLogin({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(
      getItems,
      `
    mutation($idToken:String!){googleUser(idToken:$idToken){
      _id
      firstName,
      lastName,
      email,
      credentials{
        source,
        tokenPass
      }
      token
} 

}
  `,
      {
        idToken: payload.tokenId
      }
    );
    const purchasedProducts = yield call(getPurchasedProducts, user.data.googleUser._id);
    yield put(setUser({ ...user.data.googleUser, purchasedProducts }));
    yield setToLocalStorage(ACCESS_TOKEN, user.data.googleUser.token);
    yield put(push(pathToProfile));
  } catch (error) {
    if (error.message === USER_IS_BLOCKED) {
      yield put(setUserError(error.message));
    } else {
      yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    }
  } finally {
    yield put(setUserLoading(false));
  }
}

export const resetPassword = (data) => {
  const query = `
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `;
  return setItems(query, data);
};

export function* handleUserLoad({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(loginUser, payload);

    const purchasedProducts = yield call(getPurchasedProducts, user.data.loginUser._id);

    yield setToLocalStorage(REFRESH_TOKEN, user.data.loginUser.refreshToken);
    yield setToLocalStorage(ACCESS_TOKEN, user.data.loginUser.token);
    yield setToLocalStorage(wishlistKey, user.data.loginUser.wishlist);
    yield put(setUser({ ...user.data.loginUser, purchasedProducts }));
    yield put(setWishlist(user.data.loginUser.wishlist));
    const cartFromLc = getFromLocalStorage(cartKey);
    if (cartFromLc.length) {
      const mergedCart = yield call(
        mergeCartFromLSWithUserCart,
        cartFromLc,
        user.data.loginUser._id
      );
      yield put(setCart(mergedCart.cart.items));
      yield put(setCartTotalPrice(mergedCart.cart.totalPrice));
      yield setToLocalStorage(cartKey, mergedCart.cart.items);
    }
    yield put(setUserLoading(false));
    const returnPage = sessionStorage.getItem(RETURN_PAGE);
    yield put(push(returnPage));
  } catch (error) {
    if (error.message === USER_IS_BLOCKED) {
      yield put(setUserError(error.message));
    } else {
      yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    }
  }
}

export function* handleUserConfirm({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
  mutation confirmUser($token: String!){
    confirmUserEmail(token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(setUserIsConfirmed(true));
  } catch (error) {
    if (error.message === USER_IS_BLOCKED) {
      yield put(setUserError(error.message));
    } else {
      yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    }
  }
}

export function* handleUserRecovery({ payload }) {
  try {
    yield put(resetState());
    yield put(setRecoveryLoading(true));
    yield call(
      setItems,
      `
  mutation recovery($email: String!, $language: Int!){
    recoverUser(email: $email, language: $language)
  }
  `,
      payload
    );
    yield put(setRecoveryLoading(false));
    yield put(userHasRecovered(true));
    if (payload.redirect) {
      yield delay(REDIRECT_TIMEOUT);
      yield put(push(pathToLogin));
    }
  } catch (error) {
    if (error.message === USER_IS_BLOCKED) {
      yield put(setUserError(error.message));
    } else {
      yield put(setRecoveryLoading(false));
      yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    }
  }
}

export function* handlePasswordReset({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(setPasswordIsReset(true));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push(pathToLogin));
  } catch (error) {
    if (error.message === USER_IS_BLOCKED) {
      yield put(setUserError(error.message));
    } else {
      yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    }
  }
}

export function* handleTokenCheck({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
  mutation checkToken($token: String!){
    checkIfTokenIsValid(token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    yield put(push(pathToErrorPage));
  }
}

export function* handleUserRegister({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const response = yield call(
      setItems,
      `
      mutation register($user: userRegisterInput!, $language: Int!){
        registerUser(
          user: $user
          language: $language
        ) {
          email
        }
        }
      `,
      payload
    );
    if (response.data.registerUser.statusCode) {
      throw new Error(setUserErrorType(response.data.registerUser.message, payload.language));
    }
    yield put(setUserLoading(false));
    yield put(userHasRegistered(true));
  } catch (error) {
    yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
  }
}

export function* handleUserPreserve() {
  try {
    yield put(setUserLoading(true));
    yield put(setCartLoading(true));
    const refreshToken = getFromLocalStorage(REFRESH_TOKEN);
    if (refreshToken) {
      const newAccessToken = yield call(regenerateAccessToken, refreshToken);
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
  } catch (error) {
    yield setToLocalStorage(ACCESS_TOKEN, null);
    yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
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
    const user = yield call(
      setItems,
      `
     mutation updateUser($user: UserUpdateInput!, $id: ID!, $upload: Upload){
      updateUserById(user: $user, id: $id, upload: $upload) { 
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        confirmed
        images {
          thumbnail
          large
          small
          medium
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          region
          zipcode
        }
        confirmed
      }
    }
  `,
      payload
    );
    yield call(handleIsUserBlockedChecker, user);
    const purchasedProducts = yield call(getPurchasedProducts, user.data.updateUserById._id);
    yield put(setUser({ ...user.data.updateUserById, purchasedProducts }));
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace(GRAPHQL_ERROR, '')));
    yield put(push(pathToErrorPage));
  }
}

export function* handleSendConfirmation({ payload }) {
  try {
    yield put(resetState());
    yield put(setConfirmationLoading(true));
    yield call(
      setItems,
      `
     mutation sendConfirmation($email: String!, $language: Int!){
      sendEmailConfirmation(email: $email, language: $language)
    }
  `,
      payload
    );
    yield put(setConfirmationLoading(false));
    yield put(setConfirmationEmailStatus(true));
  } catch (e) {
    if (e.message === USER_IS_BLOCKED) {
      yield put(setUserError(e.message));
    } else {
      yield put(setConfirmationLoading(false));
      yield put(setUserError(e.message.replace(GRAPHQL_ERROR, '')));
    }
  }
}

export function* handleGetUserOrders() {
  try {
    yield put(setUserLoading(true));
    const res = yield call(
      getItems,
      `
       {
        getUserOrders {
          _id
          dateOfCreation
          status
          items {
            name {
              value
            }
            bottomMaterial{
              value
            }
            quantity
            actualPrice {
              value
              currency
            }
          }
          totalItemsPrice {
            value
            currency
          }
        }
      }
    `
    );
    yield put(setUserOrders(res.data.getUserOrders));
    yield put(setUserLoading(false));
  } catch (e) {
    if (e.message === USER_IS_BLOCKED) {
      yield put(setUserError(e.message));
    } else {
      yield put(setUserError(e.message.replace(GRAPHQL_ERROR, '')));
      yield put(push(pathToErrorPage));
    }
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
}
