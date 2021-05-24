import { call, put, takeEvery } from 'redux-saga/effects';

import { getModelById, getModelForConstructor } from './constructor-model.operations';
import { GET_CONSTRUCTOR_MODEL_BY_ID, GET_MODEL_FOR_CONSTRUCTOR } from './constructor-model.types';
import {
  setConstructorModelById,
  setModelForConstructor,
  setModelLoading
} from './constructor-model.actions';
import { handleError } from '../constructor.sagas';

export function* handleConstructorModelByIdLoad({ payload: id }) {
  try {
    yield put(setModelLoading(true));
    const model = yield call(getModelById, id);
    yield put(setConstructorModelById(model));
  } catch (e) {
    yield call(handleError, e);
  }
}

export function* handleConstructorModelsLoad() {
  try {
    yield put(setModelLoading(true));
    const models = yield call(getModelForConstructor);
    yield put(setModelForConstructor(models));
  } catch (e) {
    yield call(handleError, e);
  }
}

export default function* constructorModelSaga() {
  yield takeEvery(GET_CONSTRUCTOR_MODEL_BY_ID, handleConstructorModelByIdLoad);
  yield takeEvery(GET_MODEL_FOR_CONSTRUCTOR, handleConstructorModelsLoad);
}
