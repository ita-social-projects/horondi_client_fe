import { call, put, takeEvery } from 'redux-saga/effects';

import { getConstructorBasicById } from './constructor-basic.operations';
import { GET_CONSTRUCTOR_BASIC } from './constructor-basic.types';
import { setConstructorBasic } from './constructor-basic.actions';
import { handleError } from '../constructor.sagas';

export function* handleConstructorBasicLoad({ payload: id }) {
  try {
    const basic = yield call(getConstructorBasicById, id);
    yield put(setConstructorBasic(basic));
  } catch (e) {
    yield call(handleError, e);
  }
}

export default function* constructorBasicSaga() {
  yield takeEvery(GET_CONSTRUCTOR_BASIC, handleConstructorBasicLoad);
}
