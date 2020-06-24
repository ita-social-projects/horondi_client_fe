import {
  CATEGORIES_LOADED,
  SET_CATEGORY,
  SET_CATEGORIES
} from './categories.types';

const initialState = {
  categories: [],
  category: '',
  loading: true
};

const CategoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return {
        categories: payload,
        category: state.category,
        loading: false
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: payload,
        loading: false
      };
    case CATEGORIES_LOADED:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
