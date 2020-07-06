import { SET_NEWS, SET_NEWS_ARTICLE, SET_LOADING } from './news.types';

const initialState = {
  loading: true,
  list: [],
  item: {}
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        list: action.payload
      };
    case SET_NEWS_ARTICLE:
      return {
        ...state,
        item: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
