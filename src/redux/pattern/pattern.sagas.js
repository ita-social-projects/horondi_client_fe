import { takeEvery, call, put } from 'redux-saga/effects';
import { setPatterns } from './pattern.actions';

import { getAllPatterns } from './pattern.operations';

import { GET_PATTERNS } from './pattern.types';

export function* handlePatternsLoad({ payload }) {
  try {
    const patterns = yield call(getAllPatterns, 0, 1000);
    yield put(setPatterns(patterns.items));
  } catch (error) {
    console.log(error);
  }
}

export default function* patternSaga() {
  yield takeEvery(GET_PATTERNS, handlePatternsLoad);
}
