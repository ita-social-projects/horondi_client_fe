import { call, put, takeEvery } from 'redux-saga/effects';
import { setUser, setError } from './user.actions';
import loginUser from '../../services/loginUser';
import { LOGIN_USER } from './user.types';

function* handleUserLoad({ payload }) {
  try {
    const user = yield call(loginUser, payload);
    if (user.data.errors) {
      yield put(setError(true));
    } else {
      yield put(setError(false));
      yield put(setUser(user.data.data.loginUser));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
}
