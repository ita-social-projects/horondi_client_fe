import {
  SET_HOMEPAGE_SLIDER_IMAGES,
  GET_HOMEPAGE_SLIDER_IMAGES,
  SET_HOMEPAGE_SLIDER_IMAGES_LOADING
} from './homepage-slider.types';

export const setHomePageSliderImages = (images) => ({
  type: SET_HOMEPAGE_SLIDER_IMAGES,
  payload: images
});

export const getHomePageSliderImages = () => ({
  type: GET_HOMEPAGE_SLIDER_IMAGES
});

export const setHomePageSliderImagesLoading = (loading) => ({
  type: SET_HOMEPAGE_SLIDER_IMAGES_LOADING,
  payload: loading
});
