import { SET_CART } from './cart.types';

const initialState = {
  list: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_CART:
    return {
      list: payload
    };
  default:
    return state;
  }
};

export default cartReducer;
