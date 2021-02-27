import { takeEvery, put, call, select, all } from 'redux-saga/effects';

import { setCart, setDeliveryType } from './cart.actions';
import {
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  SET_CART_ITEM_CHECKED,
  ADD_DELIVERY_TYPE,
  GET_DELIVERY_TYPE
} from './cart.types';
import {
  clearLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage.service';
import {
  addProductToUserCart,
  changeQuantityIntoUserCart,
  removeProductFromUserCart
} from '../user/user.operations';
import { cartKey, deliveryTypeKey } from '../../configs/index';

export function* handleCartLoad() {
  const cart = getFromLocalStorage(cartKey);
  yield put(setCart(cart));
}

export function* handleCartReset() {
  clearLocalStorage();
  const cart = getFromLocalStorage(cartKey);

  yield put(setCart(cart));
}

export function* handleDeliveryTypeLoad() {
  const deliveryType = getFromLocalStorage(deliveryTypeKey);

  yield put(setDeliveryType(deliveryType));
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
        item.bottomMaterial.material._id === payload.bottomMaterial.material._id &&
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

  yield all(
    payload.map(({ _id, selectedSize, sidePocket, bottomMaterial }) =>
      call(handleUserCartOperation, removeProductFromUserCart, cart, {
        _id,
        selectedSize,
        sidePocket,
        bottomMaterial
      })
    )
  );
  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export function* handleSetDeliveryType({ payload }) {
  yield put(setDeliveryType(payload));

  setToLocalStorage(deliveryTypeKey, payload);
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
        (item) => item._id === product._id && item.selectedSize === product.selectedSize
      ),
      key: cartKey
    });
  }
}

export default function* cartSaga() {
  yield takeEvery(GET_DELIVERY_TYPE, handleDeliveryTypeLoad);
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
  yield takeEvery(SET_CART_ITEM_CHECKED, handleSetCartItemChecked);
  yield takeEvery(ADD_DELIVERY_TYPE, handleSetDeliveryType);
}
