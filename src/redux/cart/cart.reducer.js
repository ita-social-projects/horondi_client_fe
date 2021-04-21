import {
  SET_CART,
  SET_DELIVERY_TYPE,
  SET_CART_LOADING,
  SET_CART_QUANTITY_LOADER,
  SET_CART_ERROR,
  SET_CART_TOTAL_PRICE
} from './cart.types';

const initialState = {
  list: [],
  loading: false,
  quantityLoading: false,
  deliveryType: '',
  totalPrice: null,
  error: null
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_CART: {
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
    case SET_CART_QUANTITY_LOADER: {
      return {
        ...state,
        quantityLoading: payload
      };
    }
    case SET_CART_ERROR: {
      return {
        ...state,
        error: payload
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
