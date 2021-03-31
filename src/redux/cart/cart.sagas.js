import { takeEvery, put, call, select } from 'redux-saga/effects';

import {
  setCart,
  setDeliveryType,
  setCartLoading,
  setCartQuantityLoading,
  setCartError,
  setCartTotalPrice
} from './cart.actions';
import {
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  ADD_DELIVERY_TYPE,
  GET_DELIVERY_TYPE,
  RESET_CART,
  CLEAN_CART,
  ADD_PRODUCT_TO_USER_CART,
  DELETE_PRODUCT_FROM_USER_CART,
  CHANGE_CART_ITEM_USER_QUANTITY
} from './cart.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { cartKey, deliveryTypeKey } from '../../configs/index';
import {
  DeleteProductFromCart,
  addProductToCart,
  getCartByUserId,
  updateCartItemQuantity,
  cleanCart
} from './cart.operations';

export function* handleCartLoad() {
  const cart = yield getFromLocalStorage(cartKey);
  yield put(setCart(cart));
}

export function* handleCartLoadByUserID(payload) {
  try {
    yield put(setCartLoading(true));
    const userCart = yield call(getCartByUserId, payload);
    yield put(setCart(userCart));
    yield put(setCartLoading(false));
  } catch (err) {
    yield put(setCartError(err));
    yield put(setCartLoading(true));
  }
}

export function* handleCartReset() {
  setToLocalStorage(cartKey, []);
  setToLocalStorage(deliveryTypeKey, '');
  const cart = getFromLocalStorage(cartKey);
  yield put(setCart(cart));
}

export function* handleClearUserCart({ payload }) {
  try {
    yield put(setCartLoading(true));
    yield call(cleanCart, payload);
    yield put(setCart([]));
    yield setToLocalStorage(cartKey, []);
    yield put(setCartLoading(false));
  } catch (err) {
    yield put(setCartError(err));
    yield put(setCartLoading(true));
  }
}

export function* handleDeliveryTypeLoad() {
  const deliveryType = getFromLocalStorage(deliveryTypeKey);

  yield put(setDeliveryType(deliveryType));
}
export function* handleSetDeliveryType({ payload }) {
  yield put(setDeliveryType(payload));

  setToLocalStorage(deliveryTypeKey, payload);
}

export function* handleAddCartItem({ payload }) {
  const cart = getFromLocalStorage(cartKey);
  const possibleItemInCart = cart.find(
    (item) =>
      (item.product._id === payload.product._id && !item.options.size._id) ||
      (item.product._id === payload.product._id &&
        item.options.size._id === payload.options.size._id)
  );

  let newCart;
  if (possibleItemInCart) {
    newCart = cart.map((item) => {
      item.product._id === payload.product._id &&
        item.options.size._id === payload.options.size._id &&
        item.quantity++;
      return item;
    });
  } else {
    newCart = [...cart, payload];
  }
  yield put(setCart(newCart));
  setToLocalStorage(cartKey, newCart);
}

export function* handleRemoveCartItem({ payload }) {
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.filter((item) => {
    const foundedItem = payload.some(
      (el) => item.product._id === el.product._id && item.options.size._id === el.options.size._id
    );
    return !foundedItem;
  });
  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export function* handleAddProductToUserCart({ payload }) {
  const { userId, cartItem } = payload;
  try {
    yield put(setCartLoading(true));
    const newCartList = yield call(addProductToCart, userId, cartItem);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartTotalPrice(newCartList.cart.totalPrice));
    setToLocalStorage(cartKey, newCartList.cart.items);
    yield put(setCartLoading(false));
  } catch (err) {
    yield put(setCartError(err));
    yield put(setCartLoading(true));
  }
}

export function* handleDeleteProductFromUserCart({ payload }) {
  const { userId, items } = payload;
  const itemsForDeleteInput = items.map((item) => ({
    product: item.product._id,
    options: {
      size: item.options.size._id
    }
  }));

  try {
    yield put(setCartLoading(true));
    const newCartList = yield call(DeleteProductFromCart, userId, itemsForDeleteInput);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartTotalPrice(newCartList.cart.totalPrice));
    yield put(setCartLoading(false));
    setToLocalStorage(cartKey, newCartList.cart.items);
  } catch (err) {
    yield put(setCartError(err));
    yield put(setCartLoading(true));
  }
}

export function* handleSetCartItemQuantity({ payload }) {
  const { item, value } = payload;
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.map((el) => {
    if (el.product._id === item.product._id && el.options.size._id === item.options.size._id) {
      el.quantity = value;
    }
    return el;
  });
  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}
export function* handleSetCartItemUserQuantity({ payload }) {
  try {
    yield put(setCartQuantityLoading(true));
    const newCartList = yield call(updateCartItemQuantity, payload);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartTotalPrice(newCartList.cart.totalPrice));
    yield put(setCartQuantityLoading(false));
  } catch (err) {
    yield put(setCartError(err));
    yield put(setCartLoading(true));
  }
}

export default function* cartSaga() {
  yield takeEvery(GET_DELIVERY_TYPE, handleDeliveryTypeLoad);
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
  yield takeEvery(CHANGE_CART_ITEM_USER_QUANTITY, handleSetCartItemUserQuantity);
  yield takeEvery(ADD_DELIVERY_TYPE, handleSetDeliveryType);
  yield takeEvery(RESET_CART, handleCartReset);
  yield takeEvery(CLEAN_CART, handleClearUserCart);
  yield takeEvery(ADD_PRODUCT_TO_USER_CART, handleAddProductToUserCart);
  yield takeEvery(DELETE_PRODUCT_FROM_USER_CART, handleDeleteProductFromUserCart);
}
