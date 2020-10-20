import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setHomeImageLooks } from './home-page-looks.actions';
import { SET_HOME_IMAGE_LOOKS } from './home-page-looks.types';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';

export function* handleHomeLooksImagesLoad() {
  try {
    const links = yield call(
      getItems,
      `query {
        getHomePageLooksImages {
          _id
          images {
            medium
            small
          }
        }
      }`
    );

    yield put(setHomeImageLooks(links.data.getHomePageLooksImages));
  } catch (e) {
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* homeLooksImagesSaga() {
  yield takeEvery(SET_HOME_IMAGE_LOOKS, handleHomeLooksImagesLoad);
}
