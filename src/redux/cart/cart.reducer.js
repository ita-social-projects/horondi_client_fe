import { SET_CART, SET_DELIVERY_TYPE } from "./cart.types";

const initialState = {
  list: [],
  deliveryType: ""
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case  SET_CART: {
      return {
        list: payload
      };
    }
    case SET_DELIVERY_TYPE: {
      return {
        ...state,
        deliveryType: payload
      };
    }
    default:
      return state;
  }

};
