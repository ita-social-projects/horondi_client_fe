import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setUser, setUserError, setUserLoading } from './user.actions';
import { LOGIN_USER } from './user.types';
import { setItems } from '../../utils/client';

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

export function* handleUserLoad({ payload }) {
  try {
    yield put(setUserLoading());
    const user = yield call(loginUser, payload);
    yield put(setUser(user.data.loginUser));
    yield put(push('/'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
}
