import {
  SET_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEMS
} from './cart.types';

const initialState = {
  list: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_CART_ITEMS:
    return {
      ...state,
      list: payload
    };
  case SET_ITEM_TO_CART:
    return {
      ...state,
      list: [...state.list, payload]
    };
  case REMOVE_ITEM_FROM_CART:
    return {
      ...state,
      list: state.filter((item) => item.id !== payload)
    };
  default:
    return state;
  }
};

export default cartReducer;
