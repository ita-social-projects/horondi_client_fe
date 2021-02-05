import { SET_CART, SET_CART_ITEM_CHECKED } from './cart.types';

const initialState = {
  list: []
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  // if (type === SET_CART) {
  //   return {
  //     list: payload
  //   };
  // }

  switch (type) {
  case SET_CART: {
    return {
      list: payload
    };
  }
  case SET_CART_ITEM_CHECKED: {
    return {
      list: {
        ...payload,
        isChecked: !payload.isChecked
      }
    };
  }
  default:
    return state;
  }
};
