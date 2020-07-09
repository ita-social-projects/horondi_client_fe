import { SET_CATEGORIES } from './categories.types';

const initialState = {
  list: [],
  loading: true
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_CATEGORIES:
    return {
      ...state,
      list: action.payload,
      loading: false
    };

  default:
    return state;
  }
};

export default categoriesReducer;
