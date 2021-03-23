import {
  SET_ORDER,
  SET_IS_ORDER_CREATED,
  SET_LOADING,
  SET_PAID_ORDER_LOADING
} from './order.types';

const initialState = {
  loading: false,
  order: null,
  isOrderCreated: false,
  paidOrderLoading: false
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
    case SET_PAID_ORDER_LOADING:
      return {
        ...state,
        paidOrderLoading: action.payload
      };
    default:
      return state;
  }
};
