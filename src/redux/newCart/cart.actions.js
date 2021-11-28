const { ADD_TO_CART, CLEAR_CART, SET_CART, SET_CART_ITEM_QUANTITY } = require('./cart.types');

const addToCart = (cartItems) => ({
  type: ADD_TO_CART,
  payload: cartItems
});

const clearCart = () => ({
  type: CLEAR_CART
});

const setCart = () => ({
  type: SET_CART
});

const setCartItemQuantity = (item, value) => ({
  type: SET_CART_ITEM_QUANTITY,
  payload: {
    item,
    value
  }
});

export { addToCart, clearCart, setCart, setCartItemQuantity };
