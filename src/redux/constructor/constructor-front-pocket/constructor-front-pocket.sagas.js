import { call, put, takeEvery } from 'redux-saga/effects';
import { getConstructorFrontPocketById } from './constructor-front-pocket.operations';
import { GET_CONSTRUCTOR_FRONT_POCKET } from './constructor-front-pocket.types';
import { setConstructorFrontPocket } from './constructor-front-pocket.actions';

export function* handleConstructorFrontPocketLoad({ payload: id }) {
  try {
    const frontPocket = yield call(getConstructorFrontPocketById, id);
    yield put(setConstructorFrontPocket(frontPocket));
  } catch (error) {
    console.error(error);
  }
}

export default function* constructorFrontPocketSaga() {
  yield takeEvery(
    GET_CONSTRUCTOR_FRONT_POCKET,
    handleConstructorFrontPocketLoad
  );
}
