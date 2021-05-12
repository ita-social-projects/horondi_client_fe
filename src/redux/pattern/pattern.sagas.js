import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setPatterns, setPatternLoading } from './pattern.actions';
import { getAllPatterns } from './pattern.operations';
import { GET_PATTERNS } from './pattern.types';
import { setError } from '../error/error.actions';

export function* handlePatternsLoad() {
  try {
    yield put(setPatternLoading(true));
    const patterns = yield call(getAllPatterns, 0, 1000);
    yield put(setPatterns(patterns.items));
    yield put(setPatternLoading(false));
  } catch (error) {
    yield call(handlePatternsErrors, error);
  }
}

export function* handlePatternsErrors(e) {
  yield put(setPatternLoading(false));
  yield put(setError(e.message));
  yield put(push('/error-page'));
}

export default function* patternSaga() {
  yield takeEvery(GET_PATTERNS, handlePatternsLoad);
}
