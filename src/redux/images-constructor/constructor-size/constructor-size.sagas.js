import { call, put, takeEvery } from 'redux-saga/effects';

import { getConstructorSizeById } from './constructor-size.operations';
import { GET_CONSTRUCTOR_SIZE } from './constructor-size.types';
import { setConstructorSize } from './constructor-size.actions';
import { handleError } from '../constructor.sagas';

export function* handleConstructorSizeLoad({ payload: id }) {
  try {
    const size = yield call(getConstructorSizeById, id);
    yield put(setConstructorSize(size));
  } catch (e) {
    yield call(handleError, e);
  }
}

export default function* constructorSizeSaga() {
  yield takeEvery(GET_CONSTRUCTOR_SIZE, handleConstructorSizeLoad);
}
