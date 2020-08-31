import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setUser,
  setUserError,
  setUserLoading,
  resetState
} from './user.actions';
import {
  LOGIN_USER,
  CONFIRM_USER,
  RECOVER_USER,
  PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID,
  REGISTER_USER
} from './user.types';
import { setItems } from '../../utils/client';
import { REDIRECT_TIMEOUT } from '../../configs/index';
import { setToLocalStorage } from '../../services/local-storage.service';

export const loginUser = (data) => {
  const query = ` 
  mutation login($user: LoginInput!){
  loginUser(
    loginInput: $user
  ) {
    purchasedProducts
    orders
    token
    _id
    email
    firstName
  }
}
  `;
  return setItems(query, data);
};

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
    yield put(setUser(user.data.loginUser));
    const { token } = user.data.loginUser;
    yield setToLocalStorage('accessToken', token);
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
    confirmUser(token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserRecovery({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      ` 
  mutation recovery($email: String!, $language: Int!){
    recoverUser(email: $email, language: $language)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push('/login'));
  } catch (error) {
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
      mutation register($user: userRegisterInput!){
        registerUser(
          user: $user
        ) {
          email
        }
        }
      `,
      payload
    );
    yield put(setUserLoading(false));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
  yield takeEvery(CONFIRM_USER, handleUserConfirm);
  yield takeEvery(RECOVER_USER, handleUserRecovery);
  yield takeEvery(PASSWORD_RESET, handlePasswordReset);
  yield takeEvery(CHECK_IF_TOKEN_VALID, handleTokenCheck);
  yield takeEvery(REGISTER_USER, handleUserRegister);
}
