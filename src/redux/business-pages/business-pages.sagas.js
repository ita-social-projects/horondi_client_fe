import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setBusinessPage, setLoading } from './business-pages.actions';
import { GET_BUSINESS_PAGE_BY_CODE } from './business-pages.types';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';

export function* handleBusinessPageError({ message }) {
  yield put(setLoading(false));
  yield put(setError(message));
  yield put(push('/error-page'));
}

export function* handleBusinessPageLoad({ payload }) {
  try {
    yield put(setLoading(true));
    const businessPage = yield call(
      getItems,
      `query (
        $code: String!
        ){
            getBusinessTextByCode(code: $code) {
            ... on BusinessText {
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
          }
      }`,
      {
        code: payload
      }
    );

    yield put(setBusinessPage(businessPage.data.getBusinessTextByCode));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleBusinessPageError, e);
  }
}

export default function* businessPagesSaga() {
  yield takeEvery(GET_BUSINESS_PAGE_BY_CODE, handleBusinessPageLoad);
}
