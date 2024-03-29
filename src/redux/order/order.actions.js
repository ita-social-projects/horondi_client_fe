import {
  SET_LOADING,
  SET_ORDER,
  SET_IS_ORDER_CREATED,
  GET_ORDER,
  ADD_ORDER,
  GET_FONDY_DATA,
  ADD_PAYMENT_METHOD
} from './order.types';

export const setOrder = (payload) => ({
  type: SET_ORDER,
  payload
});
export const addOrder = (payload) => ({
  type: ADD_ORDER,
  payload
});

export const setOrderLoading = (payload) => ({
  type: SET_LOADING,
  payload
});
export const setIsOrderCreated = (payload) => ({
  type: SET_IS_ORDER_CREATED,
  payload
});
export const getOrder = () => ({
  type: GET_ORDER
});

export const getFondyData = (payload) => ({
  type: GET_FONDY_DATA,
  payload
});
export const addPaymentMethod = (payload) => ({
  type: ADD_PAYMENT_METHOD,
  payload
});
