import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { getAllModels, getModelsByCategory } from './model.operations';
import { setModels, setModelsLoading } from './model.actions';
import { setError } from '../error/error.actions';
import { GET_MODELS_BY_CATEGORY, GET_ALL_MODELS } from './model.types';
import routes from '../../configs/routes';

export function* handleModelsLoadByCategory({ payload }) {
  try {
    yield put(setModelsLoading(true));
    const models = yield call(getModelsByCategory, payload);
    yield put(setModels(models));

    yield put(setModelsLoading(false));
  } catch (e) {
    yield call(handleModelsErrors, e);
  }
}

export function* handleAllModelsLoad() {
  try {
    yield put(setModelsLoading(true));
    const models = yield call(getAllModels);
    yield put(setModels(models.items));

    yield put(setModelsLoading(false));
  } catch (e) {
    yield call(handleModelsErrors, e);
  }
}

function* handleModelsErrors(e) {
  yield put(setError(e.message));
  yield put(push(routes.pathToErrorPage));
}

export default function* modelSaga() {
  yield takeEvery(GET_MODELS_BY_CATEGORY, handleModelsLoadByCategory);
  yield takeEvery(GET_ALL_MODELS, handleAllModelsLoad);
}
