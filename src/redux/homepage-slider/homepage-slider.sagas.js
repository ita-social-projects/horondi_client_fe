import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setHomePageSliderImages, setHomePageSliderImagesLoading } from './homepage-slider.actions';
import { setError } from '../error/error.actions';
import { GET_HOMEPAGE_SLIDER_IMAGES } from './homepage-slider.types';
import { getAllSlides } from './homepage-slider.operations';

export function* handleHomePageSliderImagesLoad() {
  yield put(setHomePageSliderImagesLoading(true));
  try {
    const images = yield call(getAllSlides);
    yield put(setHomePageSliderImages(images));
    yield put(setHomePageSliderImagesLoading(false));
  } catch (e) {
    yield call(handleHomePageSliderError, e);
  }
}

function* handleHomePageSliderError(e) {
  yield put(setHomePageSliderImagesLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* homePageSliderSaga() {
  yield takeEvery(GET_HOMEPAGE_SLIDER_IMAGES, handleHomePageSliderImagesLoad);
}
