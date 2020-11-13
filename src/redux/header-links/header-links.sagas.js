import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setHeaderLinks } from './header-links.actions';
import { GET_ALL_HEADER_LINKS } from './header-links.types';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';

export function* handleError(e) {
  yield put(setError(e.message));
  yield put(push('/error-page'));
}

export function* handleHeaderLinksLoad() {
  try {
    const links = yield call(
      getItems,
      `query {
          getAllHeaders {
            _id
            link
            title {
              lang
              value
            }
            priority
          }
      }`
    );

    yield put(setHeaderLinks(links.data.getAllHeaders));
  } catch (e) {
    yield call(handleError, e);
  }
}

export default function* businessPagesSaga() {
  yield takeEvery(GET_ALL_HEADER_LINKS, handleHeaderLinksLoad);
}
