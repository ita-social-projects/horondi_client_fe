import {
  SET_CART,
  SET_DELIVERY_TYPE,
  SET_CART_LOADING,
  CLEAR_CART,
  SET_CART_CHECKED
} from './cart.types';

const initialState = {
  list: [],
  loading: false,
  deliveryType: ''
};

const itemWithCheck = (cartList) => {
  if (cartList.length) {
    return cartList.map((item) => ({
      ...item,
      checked: false
    }));
  } 
  return [];
  
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_CART: {
      return {
        ...state,
        list: itemWithCheck(payload)
      };
    }
    case SET_CART_CHECKED: {
      return {
        ...state,
        list: payload
      };
    }
    case SET_CART_LOADING: {
      return {
        ...state,
        loading: payload
      };
    }
    case CLEAR_CART: {
      return {
        list: [],
        loading: false,
        deliveryType: ''
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
