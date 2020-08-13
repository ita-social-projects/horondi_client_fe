import { SET_PRODUCT, SET_PRODUCTS_LOADING } from './products.types';

const initialState = {
  product: null,
  products: [],
  loading: true
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_PRODUCT:
    return {
      ...state,
      product: payload
    };
  case SET_PRODUCTS_LOADING:
    return {
      ...state,
      loading: payload
    };
  default:
    return state;
  }
};

export default productsReducer;
