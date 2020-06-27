import { SET_CATEGORIES } from './categories.types';

const initialState = {
  categories: [],
  loading: true
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        categories: action.payload,
        category: state.category,
        loading: false
      };

    default:
      return state;
  }
};

export default categoriesReducer;
