import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setHomeImageLooks, setHomeImageLooksLoading } from './home-page-looks.actions';
import { GET_ALL_HOME_IMAGE_LOOKS } from './home-page-looks.types';
import { setError } from '../error/error.actions';
import { getHomePageLooksImages } from './home-page-looks.operations';

export function* handleHomeLooksImagesLoad() {
  try {
    yield put(setHomeImageLooksLoading(true));

    const images = yield call(getHomePageLooksImages);

    yield put(setHomeImageLooks(images));
    yield put(setHomeImageLooksLoading(false));
  } catch (e) {
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setHomeImageLooksLoading(false));
  yield put(setError(e.message));
  yield put(push('/error-page'));
}

export default function* homeLooksImagesSaga() {
  yield takeEvery(GET_ALL_HOME_IMAGE_LOOKS, handleHomeLooksImagesLoad);
}
