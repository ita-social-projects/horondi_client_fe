import { SET_ALL_PRODUCTS } from './products.types';

const initialState = {
  list: []
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_ALL_PRODUCTS:
    return {
      ...state,
      list: action.payload
    };
  default:
    return state;
  }
};
export default productsReducer;
