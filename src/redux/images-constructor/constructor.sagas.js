import { all, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import constructorBasicSaga from './constructor-basic/constructor-basic.sagas';
import constructorBottomSaga from './constructor-bottom/constructor-bottom.sagas';
import constructorFrontPocketSaga from './constructor-front-pocket/constructor-front-pocket.sagas';
import constructorModelSaga from './constructor-model/constructor-model.sagas';
import constructorPatternSaga from './constructor-pattern/constructor-pattern.sagas';
import constructorSizeSaga from './constructor-size/constructor-size.sagas';
import { USER_IS_BLOCKED, AUTH_ERRORS } from '../../configs';
import { handleUserError } from '../user/user.sagas';
import { setModelLoading } from './constructor-model/constructor-model.actions';
import { setError } from '../error/error.actions';
import routes from '../../configs/routes';

const { pathToErrorPage } = routes;

export function* handleError(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setModelLoading(true));
    yield put(setError(e.message));
    yield put(push(pathToErrorPage));
  }
}

export function* constructorSaga() {
  yield all([
    constructorBasicSaga(),
    constructorBottomSaga(),
    constructorFrontPocketSaga(),
    constructorModelSaga(),
    constructorPatternSaga(),
    constructorSizeSaga()
  ]);
}
