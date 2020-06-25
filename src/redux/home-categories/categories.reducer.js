import { SET_CATEGORIES } from './categories.types';

const initialState = {
  categories: [],
  loading: true
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return {
        categories: payload,
        category: state.category,
        loading: false
      };
    default:
      return state;
  }
};

export default categoriesReducer;
