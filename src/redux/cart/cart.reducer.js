import {
  GET_CART_ITEMS,
  SET_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from './cart.types';

const initialState = {
  list: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_CART_ITEMS:
    return {
      ...state,
      list: payload
    };
  case SET_ITEM_TO_CART:
    return {
      ...state
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
