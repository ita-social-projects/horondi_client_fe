const { SET_CART } = require('./common.types');

const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

export { setCart };
