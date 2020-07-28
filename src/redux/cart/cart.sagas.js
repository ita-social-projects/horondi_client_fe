import { takeEvery, call, put } from 'redux-saga/effects';

import { setCart } from './cart.actions';
import {
  GET_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from './cart.types';
import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage.service';

function* handleCartLoad() {
  try {
    const cart = yield call(getFromLocalStorage, 'cart');
    yield put(setCart(cart));
  } catch (e) {
    console.log(e);
  }
}

function* handleAddCartItem({ payload }) {
  try {
    const cart = yield call(getFromLocalStorage, 'cart');
    const possibleItemInCart = cart.find(
      (item) =>
        item._id === payload._id && item.selectedSize === payload.selectedSize
    );

    let newCart;
    if (possibleItemInCart) {
      newCart = cart.map((item) => {
        item._id === payload._id && item.quantity++;
        return item;
      });
    } else {
      newCart = [...cart, payload];
    }

    setToLocalStorage('cart', newCart);
    yield put(setCart(newCart));
  } catch (e) {
    console.log(e);
  }
}

function* handleRemoveCartItem({ payload: { _id, selectedSize } }) {
  try {
    const cart = yield call(getFromLocalStorage, 'cart');

    if (window.confirm('Delete?')) {
      const newCart = cart.filter(
        (item) =>
          item._id !== _id ||
          (item._id === _id && item.selectedSize !== selectedSize)
      );

      setToLocalStorage('cart', newCart);
      yield put(setCart(newCart));
    }
  } catch (e) {
    console.log(e);
  }
}

function* handleIncrementCartItemQuantity({ payload: { _id, selectedSize } }) {
  try {
    const cart = yield call(getFromLocalStorage, 'cart');
    const newCart = cart.map((item) => {
      if (item._id === _id && item.selectedSize === selectedSize) {
        item.quantity++;
      }
      return item;
    });

    setToLocalStorage('cart', newCart);
    yield put(setCart(newCart));
  } catch (e) {
    console.log(e);
  }
}

function* handleDecrementCartItemQuantity({ payload: { _id, selectedSize } }) {
  try {
    const cart = yield call(getFromLocalStorage, 'cart');
    const newCart = cart.map((item) => {
      if (item._id === _id && item.selectedSize === selectedSize) {
        item.quantity--;
      }
      return item;
    });
    setToLocalStorage('cart', newCart);
    yield put(setCart(newCart));
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesSaga() {
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(
    INCREMENT_CART_ITEM_QUANTITY,
    handleIncrementCartItemQuantity
  );
  yield takeEvery(
    DECREMENT_CART_ITEM_QUANTITY,
    handleDecrementCartItemQuantity
  );
}
