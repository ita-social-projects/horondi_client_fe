import {
  SET_HOMEPAGE_SLIDER_IMAGES,
  SET_HOMEPAGE_SLIDER_IMAGES_LOADING
} from './homepage-slider.types';

const initialState = {
  images: [],
  loading: true
};

const HomePageSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOMEPAGE_SLIDER_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    case SET_HOMEPAGE_SLIDER_IMAGES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
export default HomePageSliderReducer;
