import { ADD_TO_CART, CLEAR_CART, SET_CART, SET_CART_ITEM_QUANTITY } from './cart.types';

const initialState = {
  list: []
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_TO_CART: {
      return {
        list: [...state.list, payload]
      };
    }
    case SET_CART: {
      return {
        list: state.list
      };
    }
    case CLEAR_CART: {
      return {
        ...initialState
      };
    }
    case SET_CART_ITEM_QUANTITY: {
      return {
        list: [
          ...state.list.map((el) => {
            if (el.productId === payload.item) el.quantity = payload.value;
            return el;
          })
        ]
      };
    }
    default:
      return state;
  }
};
