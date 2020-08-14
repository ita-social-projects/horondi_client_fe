import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setUser,
  setUserError,
  setUserLoading,
  resetState,
  setUserRecovered,
  setPasswordReset
} from './user.actions';
import {
  LOGIN_USER,
  CONFIRM_USER,
  RECOVER_USER,
  PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID
} from './user.types';
import { setItems } from '../../utils/client';
import { SHOW_AFTER } from '../../configs/index';

export const loginUser = (payload) => {
  const query = ` 
  mutation {
  loginUser(
    loginInput: {
      email: "${payload.email}"
      password: "${payload.password}"
    }
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
  return setItems(query);
};

export const confirmUser = (token) => {
  const query = ` 
  mutation confirmUser($token: String!){
    confirmUser(token: $token)
  }
  `;
  return setItems(query, { token });
};

export const recoverUser = (data) => {
  const query = ` 
  mutation recovery($email: String!, $language: Int!){
    recoverUser(email: $email, language: $language)
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

export const checkIfTokenIsValid = (data) => {
  const query = ` 
  mutation checkToken($token: String!){
  checkIfTokenIsValid(token: $token)
  }
  `;
  return setItems(query, data);
};

export function* handleUserLoad({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(loginUser, payload);
    yield put(setUser(user.data.loginUser));
    yield put(setUserLoading(true));
    yield put(push('/'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserConfirm({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(confirmUser, payload);
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserRecovery({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(recoverUser, payload);
    yield put(setUserRecovered(true));
    yield delay(SHOW_AFTER);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handlePasswordReset({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(resetPassword, payload);
    yield put(setPasswordReset(true));
    yield delay(SHOW_AFTER);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleTokenCheck({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(checkIfTokenIsValid, payload);
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
  yield takeEvery(CONFIRM_USER, handleUserConfirm);
  yield takeEvery(RECOVER_USER, handleUserRecovery);
  yield takeEvery(PASSWORD_RESET, handlePasswordReset);
  yield takeEvery(CHECK_IF_TOKEN_VALID, handleTokenCheck);
}
