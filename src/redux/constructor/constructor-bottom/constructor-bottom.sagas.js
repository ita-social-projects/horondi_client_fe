import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getConstructorBottomById } from './constructor-bottom.operations';
import { GET_CONSTRUCTOR_BOTTOM } from './constructor-bottom.types';
import { setConstructorBottom } from './constructor-bottom.actions';
import { setModelLoading } from '../constructor-model/constructor-model.actions';
import { setError } from '../../error/error.actions';
import routes from '../../../configs/routes';

export function* handleConstructorBottomLoad({ payload: id }) {
  try {
    const bottom = yield call(getConstructorBottomById, id);
    yield put(setConstructorBottom(bottom));
  } catch (e) {
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setModelLoading(true));
  yield put(setError(e.message));
  yield put(routes.pathToErrorPage);
}

export default function* constructorBottomSaga() {
  yield takeEvery(GET_CONSTRUCTOR_BOTTOM, handleConstructorBottomLoad);
}
