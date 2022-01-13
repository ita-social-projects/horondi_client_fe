import { SET_CART } from './common.types';

const initialState = {
  cart: []
};

export const commonReducer = (state = initialState, { type, payload } = {}) => {
  if (type === SET_CART) {
    return {
      ...state,
      cart: payload
    };
  }

  return state;
};
