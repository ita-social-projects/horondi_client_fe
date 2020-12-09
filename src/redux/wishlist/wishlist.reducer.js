import { SET_WISHLIST } from './wishlist.types';

export const selectWishListList = ({ Wishlist }) => Wishlist.list;

const initialState = {
  list: []
};

export const wishlistReducer = (
  state = initialState,
  { type, payload } = {}
) => {
  if (type === SET_WISHLIST) {
    return {
      list: payload
    };
  } 
  return state;
  
};
