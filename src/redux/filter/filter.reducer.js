import { SET_CURRENT_PAGE, SET_PRODUCTS_PER_PAGE } from './filter.types';

const initialState = {
  currentPage: 1,
  productsPerPage: 9
};

const filterReducer = (state = initialState, action = {}) => {
  console.log(action);

  switch (action.type) {
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.payload
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
