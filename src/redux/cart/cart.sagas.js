import { takeEvery, put, call, select } from 'redux-saga/effects';

import { setCart } from './cart.actions';
import {
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  SET_CART_ITEM_CHECKED
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
import { cartKey } from '../../configs/index';

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
      item._id === payload._id &&
        item.selectedSize._id === payload.selectedSize._id &&
        item.sidePocket === payload.sidePocket &&
        item.bottomMaterial.material._id ===
          payload.bottomMaterial.material._id &&
        item.quantity++;
      return item;
    });
  } else {
    newCart = [...cart, payload];
  }

  yield call(
    handleUserCartOperation,
    possibleItemInCart ? changeQuantityIntoUserCart : addProductToUserCart,
    newCart,
    payload
  );

  yield put(setCart(newCart));
  setToLocalStorage(cartKey, newCart);
}

export function* handleRemoveCartItem({ payload }) {
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.filter((item) => {
    const foundedItem = payload.some(
      (el) =>
        item._id === el._id &&
        item.selectedSize._id === el.selectedSize._id &&
        item.sidePocket === el.sidePocket &&
        item.bottomMaterial.material._id === el.bottomMaterial.material._id
    );
    return !foundedItem;
  });
  // yield call(handleUserCartOperation, removeProductFromUserCart, cart, {
  //   _id,
  //   selectedSize,
  //   sidePocket,
  //   bottomMaterial
  // });

  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export function* handleSetCartItemQuantity({
  payload: {
    item: { _id, selectedSize, sidePocket, bottomMaterial },
    value
  }
}) {
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.map((item) => {
    if (
      item._id === _id &&
      item.selectedSize._id === selectedSize._id &&
      item.sidePocket === sidePocket &&
      item.bottomMaterial.material._id === bottomMaterial.material._id
    ) {
      item.quantity = value;
    }
    return item;
  });

  yield call(handleUserCartOperation, changeQuantityIntoUserCart, newCart, {
    _id,
    selectedSize,
    bottomMaterial,
    sidePocket
  });

  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export function* handleSetCartItemChecked({
  payload: {
    item: { _id, selectedSize, sidePocket, bottomMaterial },
    isChecked
  }
}) {
  const cart = getFromLocalStorage(cartKey);
  const newCart = cart.map((item) => {
    if (
      item._id === _id &&
      item.selectedSize._id === selectedSize._id &&
      item.sidePocket === sidePocket &&
      item.bottomMaterial.material._id === bottomMaterial.material._id
    ) {
      item.isChecked = !isChecked;
    }
    return item;
  });
  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

function* handleUserCartOperation(handler, list, product) {
  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    yield call(handler, {
      id: userData._id,
      product: list.find(
        (item) =>
          item._id === product._id && item.selectedSize === product.selectedSize
      ),
      key: cartKey
    });
  }
}

export default function* cartSaga() {
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
  yield takeEvery(SET_CART_ITEM_CHECKED, handleSetCartItemChecked);
}
