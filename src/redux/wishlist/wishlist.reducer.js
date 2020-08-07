import { SET_WISHLIST } from './wishlist.types';

const initialState = {
  list: []
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_WISHLIST:
    return {
      list: payload
    };
  default:
    return state;
  }
};

export default wishlistReducer;
