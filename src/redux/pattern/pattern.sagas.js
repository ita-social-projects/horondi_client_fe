import { takeEvery, call, put } from 'redux-saga/effects';
import { setPatterns } from './pattern.actions';

import { getAllPatterns } from './pattern.operations';

import { GET_PATTERNS } from './pattern.types';
import { setError } from '../error/error.actions';
import { push } from 'connected-react-router';

export function* handlePatternsLoad({ payload }) {
  try {
    const patterns = yield call(getAllPatterns, 0, 1000);
    yield put(setPatterns(patterns.items));
  } catch (e) {
    yield call(handlePatternsErrors, e);
  }
}

export function* handlePatternsErrors(e) {
  yield put(setError(e.message));
  yield put(push('/error-page'));
}

export default function* patternSaga() {
  yield takeEvery(GET_PATTERNS, handlePatternsLoad);
}
