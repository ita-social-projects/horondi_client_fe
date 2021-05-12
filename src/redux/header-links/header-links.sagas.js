import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setHeaderLinks } from './header-links.actions';
import { GET_ALL_HEADER_LINKS } from './header-links.types';
import { setError } from '../error/error.actions';
import { getAllHeaders } from './header-links.operations';
import routes from '../../configs/routes';

export function* handleError(e) {
  yield put(setError(e.message));
  yield put(push(routes.pathToErrorPage));
}

export function* handleHeaderLinksLoad() {
  try {
    const links = yield call(getAllHeaders);

    yield put(setHeaderLinks(links));
  } catch (e) {
    yield call(handleError, e);
  }
}

export default function* businessPagesSaga() {
  yield takeEvery(GET_ALL_HEADER_LINKS, handleHeaderLinksLoad);
}
