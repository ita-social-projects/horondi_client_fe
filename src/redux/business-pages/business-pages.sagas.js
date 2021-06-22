import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setBusinessPage, setLoading } from './business-pages.actions';
import { GET_BUSINESS_PAGE_BY_CODE } from './business-pages.types';
import { getBusinessTextByCode } from './business-pages.operations';
import { setError } from '../error/error.actions';
import routes from '../../const/routes';

const { pathToErrorPage } = routes;

export function* handleBusinessPageError({ message }) {
  yield put(setLoading(false));
  yield put(setError(message));
  yield put(push(pathToErrorPage));
}

export function* handleBusinessPageLoad({ payload }) {
  try {
    yield put(setLoading(true));
    const businessPage = yield call(getBusinessTextByCode, { code: payload });

    yield put(setBusinessPage(businessPage));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleBusinessPageError, e);
  }
}

export default function* businessPagesSaga() {
  yield takeEvery(GET_BUSINESS_PAGE_BY_CODE, handleBusinessPageLoad);
}
