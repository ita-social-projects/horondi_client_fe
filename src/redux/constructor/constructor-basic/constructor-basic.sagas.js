import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getConstructorBasicById } from './constructor-basic.operations';
import { GET_CONSTRUCTOR_BASIC } from './constructor-basic.types';
import { setConstructorBasic } from './constructor-basic.actions';
import { setModelLoading } from '../constructor-model/constructor-model.actions';
import { setError } from '../../error/error.actions';

export function* handleConstructorBasicLoad({ payload: id }) {
  try {
    const basic = yield call(getConstructorBasicById, id);
    yield put(setConstructorBasic(basic));
  } catch (e) {
    console.log(e);
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setModelLoading(true));
  yield put(setError(e.message));
  yield put(push('/error-page'));
}

export default function* constructorBasicSaga() {
  yield takeEvery(GET_CONSTRUCTOR_BASIC, handleConstructorBasicLoad);
}
