import { call, put, takeEvery } from 'redux-saga/effects';
import { getConstructorPatternById } from './constructor-pattern.operations';
import { GET_CONSTRUCTOR_PATTERN } from './constructor-pattern.types';
import { setConstructorPattern } from './constructor-pattern.actions';

export function* handleConstructorPatternLoad({ payload: id }) {
  try {
    const pattern = yield call(getConstructorPatternById, id);
    yield put(setConstructorPattern(pattern));
  } catch (error) {
    console.error(error);
  }
}

export default function* constructorPatternSaga() {
  yield takeEvery(GET_CONSTRUCTOR_PATTERN, handleConstructorPatternLoad);
}
