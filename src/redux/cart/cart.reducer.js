import { SET_CART, SET_CART_ITEM_CHECKED } from './cart.types';

const initialState = {
  list: []
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  if (type === SET_CART) {
    return {
      list: payload
    };
  }
  return state;
};
