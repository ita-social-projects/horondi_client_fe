import {
  SET_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEMS
} from './cart.types';

const setCartItems = (cartItems) => ({
  type: SET_CART_ITEMS,
  payload: cartItems
});

const setItemToCart = (item) => ({
  type: SET_ITEM_TO_CART,
  payload: item
});

const removeItemFromCart = (itemId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId
});

export { setItemToCart, removeItemFromCart, setCartItems };
