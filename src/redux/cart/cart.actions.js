import {
  SET_CART,
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY
} from './cart.types';

const setCart = (cartItems) => ({
  type: SET_CART,
  payload: cartItems
});

const getCart = () => ({
  type: GET_CART
});

const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item
});

const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
});

const setCartItemQuantity = (item, value, key) => ({
  type: SET_CART_ITEM_QUANTITY,
  payload: item,
  value,
  key
});

export {
  setCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity
};
