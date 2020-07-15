import {
  SET_CURRENT_PAGE,
  FILTER_BY_PRICE,
  SET_ALL_FILTER_PRODUCTS
} from './filter.types';

const initialState = {
  currentPage: 1,
  products: []
};

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_ALL_FILTER_PRODUCTS:
    return {
      ...state,
      products: action.payload
    };
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.payload
    };
  case FILTER_BY_PRICE:
    const filteredValues = state.products.filter(
      (product) =>
        product.basePrice >= action.payload.bottomValue &&
          product.basePrice <= action.payload.topValue
    );
    return {
      ...state,
      products: filteredValues
    };
  default:
    return state;
  }
};
export default filterReducer;
