import { SET_HOME_IMAGE_LOOKS } from './home-page-looks.types';

const initialState = {
  imageList: []
};

const homePageImagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_HOME_IMAGE_LOOKS:
      return {
        ...state,
        imageList: action.payload
      };

    default:
      return state;
  }
};

export default homePageImagesReducer;
