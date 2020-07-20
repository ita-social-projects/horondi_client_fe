import {
  GET_CART_ITEMS,
  SET_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from './cart.types';

const getCartItems = (newCategories) => ({
  type: GET_CART_ITEMS,
  payload: newCategories
});

const setItemToCart = (item) => ({
  type: SET_ITEM_TO_CART,
  payload: item
});

const removeItemFromCart = (itemId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId
});

export { getCartItems, setItemToCart, removeItemFromCart };
