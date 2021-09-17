import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setPatterns, setPatternLoading } from './pattern.actions';
import { getAllPatterns } from './pattern.operations';
import { GET_PATTERNS } from './pattern.types';
import { setError } from '../error/error.actions';
import routes from '../../const/routes';
import { AUTH_ERRORS } from '../../const/error-messages';
import { USER_IS_BLOCKED } from '../../configs';
import { handleUserError } from '../user/user.sagas';

const { pathToErrorPage } = routes;

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
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setPatternLoading(false));
    yield put(setError(e.message));
    yield put(push(pathToErrorPage));
  }
}

export default function* patternSaga() {
  yield takeEvery(GET_PATTERNS, handlePatternsLoad);
}
