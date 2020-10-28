import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setHomeImageLooks,
  setHomeImageLooksLoading
} from './home-page-looks.actions';
import { GET_ALL_HOME_IMAGE_LOOKS } from './home-page-looks.types';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';

export function* handleHomeLooksImagesLoad() {
  try {
    yield put(setHomeImageLooksLoading(true));

    const images = yield call(
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

    yield put(setHomeImageLooks(images.data.getHomePageLooksImages));

    yield put(setHomeImageLooksLoading(false));
  } catch (e) {
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setHomeImageLooksLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* homeLooksImagesSaga() {
  yield takeEvery(GET_ALL_HOME_IMAGE_LOOKS, handleHomeLooksImagesLoad);
}
