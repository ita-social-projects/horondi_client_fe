import { SET_ORDER, SET_IS_ORDER_CREATED, SET_LOADING, SET_CLEAR_CART } from './order.types';

const initialState = {
  loading: false,
  order: null,
  isOrderCreated: false,
  shouldClearCart: false
};

export const orderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case SET_IS_ORDER_CREATED:
      return {
        ...state,
        isOrderCreated: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_CLEAR_CART:
      return {
        ...state,
        shouldClearCart: action.payload
      };
    default:
      return state;
  }
};
