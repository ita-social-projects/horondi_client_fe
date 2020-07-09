import { call, put, takeEvery } from 'redux-saga/effects';
import { setUser, setError } from './user.actions';
import { LOGIN_USER } from './user.types';
import { setItems } from '../../utils/client';

const loginUser = (user) => {
  const { email, password } = user;
  const query = ` 
  mutation {
  loginUser(
    user: {
      email: "${email}"
      password: "${password}"
    }
  ) {
    purchasedProducts
    orders
    cart
    token
    id
  }
}
  `;
  return setItems(query);
};

function* handleUserLoad({ payload }) {
  try {
    const user = yield call(loginUser, payload);
    if (user.data.errors) {
      yield put(setError(true));
    } else {
      yield put(setError(false));
      yield put(setUser(user.data.loginUser));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
}
