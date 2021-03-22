import { takeEvery, put, call, select, all, take } from 'redux-saga/effects';

import { setCart, setCartChecked, setDeliveryType, setCartLoading } from './cart.actions';
import {
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  SET_CART_ITEM_CHECKED,
  ADD_DELIVERY_TYPE,
  GET_DELIVERY_TYPE,
  RESET_CART,
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
  updateCartItemQuantity
} from './cart.operations';

export function* handleCartLoad() {
  try {
    const cart = yield getFromLocalStorage(cartKey);
    yield put(setCart(cart));
  } catch (err) {
    console.log(err);
  }
}

export function* handleCartLoadByUserID(payload) {
  try {
    yield put(setCartLoading(true));
    const userCart = yield call(getCartByUserId, payload);
    yield put(setCart(userCart));
    yield put(setCartLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* handleCartReset() {
  setToLocalStorage(cartKey, []);
  setToLocalStorage(deliveryTypeKey, '');
  const cart = getFromLocalStorage(cartKey);

  yield put(setCart(cart));
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
  console.log(payload);
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
    setToLocalStorage(cartKey, newCartList.cart.items);
    yield put(setCartLoading(false));
  } catch (err) {
    console.log(err);
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
    console.log(newCartList);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartLoading(false));
    setToLocalStorage(cartKey, newCartList.cart.items);
  } catch (err) {
    console.log(err);
  }
}

export function* handleSetCartItemQuantity({ payload }) {
  console.log(payload);
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
    yield put(setCartLoading(true));
    const newCartList = yield call(updateCartItemQuantity, payload);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartLoading(false));
  } catch (err) {
    console.log(err);
  }
}
export function* handleSetCartItemChecked({ payload }) {
  const { item, isChecked } = payload;
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.map((cartItem) => {
    if (
      cartItem.product._id === item.product._id &&
      cartItem.options.size._id === item.options.size._id
    ) {
      cartItem.isChecked = !isChecked;
    }
    return cartItem;
  });
  setToLocalStorage(cartKey, newCart);
  yield put(setCartChecked(newCart));
}

export default function* cartSaga() {
  yield takeEvery(GET_DELIVERY_TYPE, handleDeliveryTypeLoad);
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
  yield takeEvery(CHANGE_CART_ITEM_USER_QUANTITY, handleSetCartItemUserQuantity);
  yield takeEvery(SET_CART_ITEM_CHECKED, handleSetCartItemChecked);
  yield takeEvery(ADD_DELIVERY_TYPE, handleSetDeliveryType);
  yield takeEvery(RESET_CART, handleCartReset);
  yield takeEvery(ADD_PRODUCT_TO_USER_CART, handleAddProductToUserCart);
  yield takeEvery(DELETE_PRODUCT_FROM_USER_CART, handleDeleteProductFromUserCart);
}
