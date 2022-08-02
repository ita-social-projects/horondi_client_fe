import { SET_CART, SET_WISHLIST } from './common.types';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { CART_KEY, WISHLIST_KEY } from '../../configs';

export const initialState = {
  cart: getFromLocalStorage(CART_KEY),
  wishlist: getFromLocalStorage(WISHLIST_KEY)
};

export const commonReducer = (state = initialState, { type, payload } = {}) => {
  if (type === SET_CART) {
    return {
      ...state,
      cart: payload
    };
  }
  if (type === SET_WISHLIST) {
    return {
      ...state,
      wishlist: payload
    };
  }

  return state;
};
