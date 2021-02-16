import {
  SET_CART,
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  SET_CART_ITEM_CHECKED, SET_DELIVERY_TYPE, ADD_DELIVERY_TYPE, GET_DELIVERY_TYPE
} from "./cart.types";

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

const removeItemFromCart = (items) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: items
});

const setCartItemQuantity = (item, value) => ({
  type: SET_CART_ITEM_QUANTITY,
  payload: {
    item,
    value
  }
});

const setCartItemChecked = (item, isChecked) => ({
  type: SET_CART_ITEM_CHECKED,
  payload: {
    item,
    isChecked
  }
});
const setDeliveryType = payload => ({
  type: SET_DELIVERY_TYPE,
  payload
});
const addDeliveryType = payload => ({
  type: ADD_DELIVERY_TYPE,
  payload
});
const getDeliveryType = () => ({
  type: GET_DELIVERY_TYPE
});

export {
  setCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  setCartItemChecked,
  setDeliveryType,
  addDeliveryType,
  getDeliveryType
};
