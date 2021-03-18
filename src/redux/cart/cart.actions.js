import {
  SET_CART,
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  SET_CART_ITEM_CHECKED,
  SET_DELIVERY_TYPE,
  ADD_DELIVERY_TYPE,
  GET_DELIVERY_TYPE,
  RESET_CART,
  ADD_PRODUCT_TO_USER_CART,
  DELETE_PRODUCT_FROM_USER_CART,
  MERGE_CART_FROM_LC_WITT_USER_CART
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
const setDeliveryType = (payload) => ({
  type: SET_DELIVERY_TYPE,
  payload
});
const addDeliveryType = (payload) => ({
  type: ADD_DELIVERY_TYPE,
  payload
});
const getDeliveryType = () => ({
  type: GET_DELIVERY_TYPE
});

const resetCart = () => ({
  type: RESET_CART
});

const addProductToUserCart = (payload) => ({
  type: ADD_PRODUCT_TO_USER_CART,
  payload
});

const deleteProductToUserCart = (payload) => ({
  type: DELETE_PRODUCT_FROM_USER_CART,
  payload
});

const mergeCarts = (payload) => ({
  type: MERGE_CART_FROM_LC_WITT_USER_CART,
  payload
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
  getDeliveryType,
  resetCart,
  addProductToUserCart,
  deleteProductToUserCart,
  mergeCarts
};
