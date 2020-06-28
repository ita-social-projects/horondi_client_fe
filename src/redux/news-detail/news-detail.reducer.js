import { SET_ARTICLE } from './news-detail.types';

const initialState = {
  item: {}
};

const newsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    default:
      return state;
  }
};

export default newsDetailReducer;
