import {
  SET_SEARCH_BAR_VISIBILITY,
  SET_PRODUCTS_FOR_SEARCH_BAR,
  SET_SEARCH_BAR_LOADING
} from './search-bar.types';

export const initialState = {
  list: [],
  visibility: false,
  loading: false
};

const searchBarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCTS_FOR_SEARCH_BAR:
      return {
        ...state,
        list: action.payload
      };
    case SET_SEARCH_BAR_VISIBILITY:
      return {
        ...state,
        visibility: action.payload
      };
    case SET_SEARCH_BAR_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default searchBarReducer;
