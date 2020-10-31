import { takeEvery, put, call, select } from 'redux-saga/effects';

import { setCart } from './cart.actions';
import {
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY
} from './cart.types';
import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage.service';
import {
  addProductToUserCart,
  changeQuantityIntoUserCart,
  removeProductFromUserCart
} from '../user/user.operations';

const cartKey = 'cart';

export function* handleCartLoad() {
  const cart = getFromLocalStorage(cartKey);
  yield put(setCart(cart));
}

export function* handleAddCartItem({ payload }) {
  const cart = getFromLocalStorage(cartKey);
  const possibleItemInCart = cart.find(
    (item) =>
      (item._id === payload._id && !item.selectedSize) ||
      (item._id === payload._id && item.selectedSize === payload.selectedSize)
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

  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    yield call(
      possibleItemInCart ? changeQuantityIntoUserCart : addProductToUserCart,
      {
        id: userData._id,
        product: newCart.find(
          ({ _id, selectedSize }) =>
            _id === payload._id && selectedSize === payload.selectedSize
        ),
        key: cartKey
      }
    );
  }

  yield put(setCart(newCart));
  setToLocalStorage(cartKey, newCart);
}

export function* handleRemoveCartItem({ payload: { _id, selectedSize } }) {
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.filter(
    (item) =>
      item._id !== _id ||
      (item._id === _id &&
        item.selectedSize &&
        item.selectedSize !== selectedSize)
  );

  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    yield call(removeProductFromUserCart, {
      id: userData._id,
      product: cart.find(
        (item) => item._id === _id && item.selectedSize === selectedSize
      ),
      key: cartKey
    });
  }

  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export function* handleSetCartItemQuantity({
  payload: {
    item: { _id, selectedSize },
    value,
    key
  }
}) {
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.map((item) => {
    if (
      (item._id === _id && !item.selectedSize) ||
      (item._id === _id && item.selectedSize === selectedSize)
    ) {
      // key will be true if user typing inside input
      item.quantity = key ? value || 1 : item.quantity + value;
    }
    return item;
  });

  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    yield call(changeQuantityIntoUserCart, {
      id: userData._id,
      product: newCart.find(
        (item) => item._id === _id && item.selectedSize === selectedSize
      ),
      key: cartKey
    });
  }

  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export default function* categoriesSaga() {
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
}
