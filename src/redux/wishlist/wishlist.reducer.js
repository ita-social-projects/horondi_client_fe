import { SET_WISHLIST } from './wishlist.types';

const initialState = {
  list: []
};

const wishlistReducer = (state = initialState, { type, payload } = {}) => {
  if (type === SET_WISHLIST) {
    return {
      list: payload
    };
  } else {
    return state;
  }
};

export default wishlistReducer;
