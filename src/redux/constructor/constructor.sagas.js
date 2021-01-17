import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getConstructorBasicById,
  getConstructorPatternById,
  getModelById,
  getConstructorBottomById
} from './constructor.operations';
import {
  GET_CONSTRUCTOR_BASIC,
  GET_CONSTRUCTOR_BOTTOM,
  GET_CONSTRUCTOR_MODEL,
  GET_CONSTRUCTOR_PATTERN
} from './constructor.types';
import {
  setConstructorBasic,
  setConstructorModel,
  setConstructorPattern,
  setConstructorBottom
} from './constructor.actions';

export function* handleConstructorModelLoad({ payload: id }) {
  try {
    const model = yield call(getModelById, id);
    yield put(setConstructorModel(model));
  } catch (error) {
    // yield call(handleModelError, error);
    console.error(error);
  }
}

export function* handleConstructorBasicLoad({ payload: id }) {
  try {
    const basic = yield call(getConstructorBasicById, id);
    yield put(setConstructorBasic(basic));
  } catch (error) {
    console.error(error);
    // yield call(handleModelError, error);
  }
}

export function* handleConstructorPatternLoad({ payload: id }) {
  try {
    const pattern = yield call(getConstructorPatternById, id);
    yield put(setConstructorPattern(pattern));
  } catch (error) {
    console.error(error);
    // yield call(handleModelError, error);
  }
}

export function* handleConstructorBottomLoad({ payload: id }) {
  try {
    const bottom = yield call(getConstructorBottomById, id);
    yield put(setConstructorBottom(bottom));
  } catch (error) {
    console.error(error);
    // yield call(handleModelError, error);
  }
}

export default function* constructorSaga() {
  yield takeEvery(GET_CONSTRUCTOR_BASIC, handleConstructorBasicLoad);
  yield takeEvery(GET_CONSTRUCTOR_MODEL, handleConstructorModelLoad);
  yield takeEvery(GET_CONSTRUCTOR_PATTERN, handleConstructorPatternLoad);
  yield takeEvery(GET_CONSTRUCTOR_BOTTOM, handleConstructorBottomLoad);
}
