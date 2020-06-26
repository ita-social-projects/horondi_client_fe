import { SET_CATEGORY, SET_CATEGORIES } from './categories.types';

const initialState = {
  categories: [],
  category: '',
  loading: true
};

const categoriesReducer = (action, state = initialState) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        categories: action.payload,
        category: state.category,
        loading: false
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default categoriesReducer;
