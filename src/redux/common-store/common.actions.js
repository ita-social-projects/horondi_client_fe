const { SET_CART } = require('./common.types');

const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

const { SET_WISHLIST } = require('./common.types');

const setNewWishlist = (wishlist) => ({
  type: SET_WISHLIST,
  payload: wishlist
});

export { setCart, setNewWishlist };
