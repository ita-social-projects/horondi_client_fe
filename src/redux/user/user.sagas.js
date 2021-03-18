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
import { megreCartFromLCwithUserCart } from '../cart/cart.operations';
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
import { REDIRECT_TIMEOUT , cartKey } from '../../configs/index';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { setCart } from '../cart/cart.actions';
import { setWishlist } from '../wishlist/wishlist.actions';

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
      items{
        product{
          _id
        }
        options{
          size {
            _id
          }
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
    yield setToLocalStorage('accessToken', user.data.googleUser.token);
    yield put(push('/profile'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
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
    const cartFromLc = getFromLocalStorage(cartKey);
    if (cartFromLc.length > 0) {
      const mergedCart = yield call(
        megreCartFromLCwithUserCart,
        cartFromLc,
        user.data.loginUser._id
      );
      yield put(setCart(mergedCart));
      yield setToLocalStorage('cart', mergedCart);
    } else {
      yield put(setCart(user.data.loginUser.cart));
      yield setToLocalStorage('cart', user.data.loginUser.cart);
    }
    yield put(setUser({ ...user.data.loginUser, purchasedProducts }));
    yield put(setWishlist(user.data.loginUser.wishlist));

    yield setToLocalStorage('refreshToken', user.data.loginUser.refreshToken);
    yield setToLocalStorage('accessToken', user.data.loginUser.token);
    yield setToLocalStorage('wishlist', user.data.loginUser.wishlist);

    yield put(setUserLoading(false));
    yield put(push('/'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
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
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
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
      yield put(push('/login'));
    }
  } catch (error) {
    yield put(setRecoveryLoading(false));
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
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
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
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
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export function* handleUserRegister({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
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
    yield put(setUserLoading(false));
    yield put(userHasRegistered(true));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserPreserve() {
  try {
    yield put(setUserLoading(true));
    const refreshToken = getFromLocalStorage('refreshToken');
    if (refreshToken) {
      const newAccessToken = yield call(regenerateAccessToken, refreshToken);
      setToLocalStorage('accessToken', newAccessToken);
    }
    const user = yield call(getUserByToken);
    const purchasedProducts = yield call(getPurchasedProducts, user._id);
    yield put(setUser({ ...user, purchasedProducts }));
  } catch (error) {
    yield setToLocalStorage('accessToken', null);
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  } finally {
    yield put(setUserIsChecked(true));
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
    const purchasedProducts = yield call(getPurchasedProducts, user.data.updateUserById._id);
    yield put(setUser({ ...user.data.updateUserById, purchasedProducts }));
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
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
    yield put(setConfirmationLoading(false));
    yield put(setUserError(e.message.replace('GraphQL error: ', '')));
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
    yield put(setUserError(e.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
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
