import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setBusinessPage, setLoading } from './businessPages.actions';
import { GET_BUSINESS_PAGE_BY_CODE } from './businessPages.types';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';

export function* handleBusinessPageLoad({ payload }) {
  try {
    yield put(setLoading(true));
    const businessPage = yield call(
      getItems,
      `query{
         getBusinessPageByCode(code: ${payload}){
            ... on BusinessPage {
                _id
                code
                title {
                  value
                }
                text {
                  value
                }
                date
            }           
            ... on Error {
            message
            statusCode
            }
          }`
    );
    yield put(setBusinessPage(businessPage.data.getBusinessPageByCode));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleBusinessPageError, e);
  }
}

export function* handleBusinessPageError(e) {
  yield put(setLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* businessPagesSaga() {
  yield takeEvery(GET_BUSINESS_PAGE_BY_CODE, handleBusinessPageLoad);
}
