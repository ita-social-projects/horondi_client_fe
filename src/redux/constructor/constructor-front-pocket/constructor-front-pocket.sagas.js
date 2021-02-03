import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getConstructorFrontPocketById } from './constructor-front-pocket.operations';
import { GET_CONSTRUCTOR_FRONT_POCKET } from './constructor-front-pocket.types';
import { setConstructorFrontPocket } from './constructor-front-pocket.actions';
import { setModelLoading } from '../constructor-model/constructor-model.actions';
import { setError } from '../../error/error.actions';
import routes from '../../../configs/routes';

export function* handleConstructorFrontPocketLoad({ payload: id }) {
  try {
    const frontPocket = yield call(getConstructorFrontPocketById, id);
    yield put(setConstructorFrontPocket(frontPocket));
  } catch (e) {
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setModelLoading(true));
  yield put(setError(e.message));
  yield put(routes.pathToErrorPage);
}

export default function* constructorFrontPocketSaga() {
  yield takeEvery(
    GET_CONSTRUCTOR_FRONT_POCKET,
    handleConstructorFrontPocketLoad
  );
}
