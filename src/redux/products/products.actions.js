import { SET_PRODUCT_TO_SEND, CLEAR_PRODUCT_TO_SEND } from './products.types';

export const setProductToSend = (payload) => ({
  type: SET_PRODUCT_TO_SEND,
  payload
});
export const clearProductToSend = () => ({
  type: CLEAR_PRODUCT_TO_SEND
});
