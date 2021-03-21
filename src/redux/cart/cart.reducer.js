import { SET_CART, SET_DELIVERY_TYPE,SET_CART_LOADING,CLEAR_CART } from './cart.types';

const initialState = {
  list: [],
  loading: false,
  deliveryType: ''
};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_CART: {
      return {
        ...state,
        list: payload
      };
    }
    case SET_CART_LOADING:{
      return {
        ...state,
        loading: payload
      }
    }
    case CLEAR_CART: {
      return  {
        list: [],
        loading: false,
        deliveryType: ''
      }
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
