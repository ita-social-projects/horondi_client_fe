import {
  SET_CART,
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY
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

const incrementCartItemQuantity = (item) => ({
  type: INCREMENT_CART_ITEM_QUANTITY,
  payload: item
});

const decrementCartItemQuantity = (item) => ({
  type: DECREMENT_CART_ITEM_QUANTITY,
  payload: item
});

export {
  setCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity
};
