import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setUser, setError, userLoading } from './user.actions';
import { LOGIN_USER } from './user.types';
import { setItems } from '../../utils/client';

export const loginUser = (payload) => {
  const { email, password } = payload.user;
  const query = ` 
  mutation {
  loginUser(
    user: {
      email: "${email}"
      password: "${password}"
    },
    language: ${payload.language}
  ) {
    purchasedProducts
    orders
    token
    id
  }
}
  `;
  return setItems(query);
};

export function* handleUserLoad({ payload }) {
  try {
    yield put(userLoading());
    const user = yield call(loginUser, payload);
    yield put(setUser(user.data.loginUser));
    yield put(push('/'));
  } catch (error) {
    yield put(setError(error.message.replace('GraphQL error: ', '')));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
}
