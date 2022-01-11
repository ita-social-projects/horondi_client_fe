import { SET_WISHLIST, RESET_WISHLIST } from './wishlist.types';

export const selectWishListList = ({ Wishlist }) => Wishlist.list;

const initialState = {
  list: []
};

export const wishlistReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_WISHLIST: {
      return {
        ...state,
        list: payload
      };
    }
    case RESET_WISHLIST: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};
