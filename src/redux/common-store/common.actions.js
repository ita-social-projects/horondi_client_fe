import { SET_CART, SET_WISHLIST } from './common.types';

const setCartItems = (cart) => ({
  type: SET_CART,
  payload: cart
});

const setNewWishlist = (wishlist) => ({
  type: SET_WISHLIST,
  payload: wishlist
});

export { setCartItems, setNewWishlist };
