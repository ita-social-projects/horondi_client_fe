import { SET_CURRENT_PAGE, SET_PRODUCTS_PER_PAGE } from './filter.types';

const initialState = {
  currentPage: 0,
  productsPerPage: 9
};

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.payload - 1
    };
  case SET_PRODUCTS_PER_PAGE:
    return {
      ...state,
      productsPerPage: action.payload
    };
  default:
    return state;
  }
};
export default filterReducer;
