import { SET_ALL_PRODUCTS, SET_LOADING } from './products.types';

const initialState = {
  products: [],
  loading: true
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_ALL_PRODUCTS:
    console.log('sert All products');
    return {
      ...state,
      products: action.payload
    };
  case SET_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  default:
    return state;
  }
};
export default productsReducer;
