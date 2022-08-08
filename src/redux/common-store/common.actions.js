import { SET_CART, SET_WISHLIST } from './common.types';

const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

const setNewWishlist = (wishlist) => ({
  type: SET_WISHLIST,
  payload: wishlist
});

export { setCart, setNewWishlist };
