import {
  SET_CART,
  GET_CART,
  GET_CART_BY_USER_ID,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  RESET_CART,
  SET_CART_TOTAL_PRICE,
  ADD_PRODUCT_TO_USER_CART,
  DELETE_PRODUCT_FROM_USER_CART,
  MERGE_CART_FROM_LC_WITT_USER_CART,
  CHANGE_CART_ITEM_USER_QUANTITY,
  SET_CART_LOADING,
  SET_CART_QUANTITY_LOADER,
  CLEAN_CART,
  SET_CART_ERROR,
  SET_CART_ITEM_SIZE,
  SET_USER_CART_ITEM_SIZE
} from './cart.types';

const setCart = (cartItems) => ({
  type: SET_CART,
  payload: cartItems
});
const getCart = () => ({
  type: GET_CART
});
const getCartByUserId = (userId) => ({
  type: GET_CART_BY_USER_ID,
  payload: userId
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

const setCartItemSize = (item, value) => ({
  type: SET_CART_ITEM_SIZE,
  payload: {
    item,
    value
  }
});
const setUserCartItemSize = (user, item, value) => ({
  type: SET_USER_CART_ITEM_SIZE,
  payload: {
    item,
    value,
    user
  }
});

const resetCart = () => ({
  type: RESET_CART
});

const addProductToUserCart = (payload) => ({
  type: ADD_PRODUCT_TO_USER_CART,
  payload
});

const deleteProductFromUserCart = (payload) => ({
  type: DELETE_PRODUCT_FROM_USER_CART,
  payload
});

const changeCartItemUserQuantity = (payload) => ({
  type: CHANGE_CART_ITEM_USER_QUANTITY,
  payload
});

const mergeCarts = (payload) => ({
  type: MERGE_CART_FROM_LC_WITT_USER_CART,
  payload
});

const setCartTotalPrice = (payload) => ({
  type: SET_CART_TOTAL_PRICE,
  payload
});
const setCartLoading = (payload) => ({
  type: SET_CART_LOADING,
  payload
});
const setCartQuantityLoading = (payload) => ({
  type: SET_CART_QUANTITY_LOADER,
  payload
});

const setCartError = (payload) => ({
  type: SET_CART_ERROR,
  payload
});

const cleanUserCart = (payload) => ({
  type: CLEAN_CART,
  payload
});

export {
  setCart,
  getCart,
  getCartByUserId,
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  resetCart,
  addProductToUserCart,
  deleteProductFromUserCart,
  changeCartItemUserQuantity,
  mergeCarts,
  setCartTotalPrice,
  setCartLoading,
  setCartQuantityLoading,
  setCartError,
  cleanUserCart,
  setCartItemSize,
  setUserCartItemSize
};
