import { SET_CART } from './cart.types';

const initialState = {
  list: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  if (type === SET_CART) {
    return {
      list: payload
    };
  }
  return state;
};

export default cartReducer;
