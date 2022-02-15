import { SET_CART , SET_WISHLIST } from './common.types';

export const initialState = {
  cart: [],
  wishlist: []
};

export const commonReducer = (state = initialState, { type, payload } = {}) => {
  if (type === SET_CART) {
    return {
      ...state,
      cart: payload
    };
  }
  if (type === SET_WISHLIST) {
    return {
      ...state,
      wishlist: payload
    };
  }

  return state;
};
