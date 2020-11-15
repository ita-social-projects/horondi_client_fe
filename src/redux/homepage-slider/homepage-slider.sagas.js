import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setHomePageSliderImages,
  setHomePageSliderImagesLoading
} from './homepage-slider.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_HOMEPAGE_SLIDER_IMAGES } from './homepage-slider.types';

export function* handleHomePageSliderImagesLoad() {
  yield put(setHomePageSliderImagesLoading(true));
  const query = `query {
                  getAllSlides {
                    items {
                      _id
                      images {
                          large
                      }
                      link
                      title {
                          lang
                          value
                      }
                      description {
                        lang
                        value
                      }
                  }
                 }          
                }`;
  try {
    const images = yield call(getItems, query);
    yield put(setHomePageSliderImages(images.data.getAllSlides));
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
