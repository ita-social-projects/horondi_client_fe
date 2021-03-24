import {
  SET_CART,
  SET_DELIVERY_TYPE,
  SET_CART_LOADING,
  SET_CART_ERROR,
  CLEAR_CART,
  SET_CART_CHECKED,
  SET_CART_TOTAL_PRICE
} from './cart.types';

const initialState = {
  list: [],
  loading: false,
  deliveryType: '',
  totalPrice: null,
  error: null
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
    case SET_CART_ERROR: {
      return {
        ...state,
        error: payload
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
    case SET_CART_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: payload
      };
    }
    default:
      return state;
  }
};
