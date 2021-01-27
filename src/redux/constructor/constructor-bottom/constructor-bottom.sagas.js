import { call, put, takeEvery } from 'redux-saga/effects';
import { getConstructorBottomById } from './constructor-bottom.operations';
import { GET_CONSTRUCTOR_BOTTOM } from './constructor-bottom.types';
import { setConstructorBottom } from './constructor-bottom.actions';

export function* handleConstructorBottomLoad({ payload: id }) {
  try {
    const bottom = yield call(getConstructorBottomById, id);
    yield put(setConstructorBottom(bottom));
  } catch (error) {
    console.error(error);
  }
}

export default function* constructorBottomSaga() {
  yield takeEvery(GET_CONSTRUCTOR_BOTTOM, handleConstructorBottomLoad);
}
