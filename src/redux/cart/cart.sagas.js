import { call, put, takeEvery } from 'redux-saga/effects';

import { setCart, setCartError, setCartLoading, setCartTotalPrice } from './cart.actions';
import {
  ADD_ITEM_TO_CART,
  ADD_PRODUCT_TO_USER_CART,
  CHANGE_CART_ITEM_USER_QUANTITY,
  CLEAN_CART,
  DELETE_PRODUCT_FROM_USER_CART,
  GET_CART,
  REMOVE_ITEM_FROM_CART,
  RESET_CART,
  SET_CART_ITEM_QUANTITY,
  SET_CART_ITEM_SIZE,
  SET_USER_CART_ITEM_SIZE
} from './cart.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { cartKey, USER_IS_BLOCKED, AUTH_ERRORS } from '../../configs';
import {
  addProductToCart,
  cleanCart,
  deleteProductFromCart,
  getCartByUserId,
  updateCartItemQuantity,
  changeUserCartItemSize
} from './cart.operations';
import { handleUserError } from '../user/user.sagas';
import changeCartItemSizeHandler from '../../utils/changeCartItemSizeHandler';

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
    yield call(handleCartError, err);
  }
}

export function* handleCartReset() {
  setToLocalStorage(cartKey, []);
  const cart = getFromLocalStorage(cartKey);
  yield put(setCart(cart));
}

export function* handleClearUserCart({ payload }) {
  try {
    yield put(setCartLoading(true));
    yield call(cleanCart, payload);
    yield put(setCart([]));
    setToLocalStorage(cartKey, []);
    yield put(setCartLoading(false));
  } catch (err) {
    yield call(handleCartError, err);
  }
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
  const newCart = cart.filter(
    (item) =>
      !(
        item.product._id === payload.productId &&
        item.options.size._id === payload.sizeAndPrice.size._id
      )
  );
  setToLocalStorage(cartKey, newCart);
  yield put(setCart(newCart));
}

export function* handleAddProductToUserCart({ payload }) {
  const { userId, cartItem } = payload;
  try {
    yield put(setCartLoading(true));

    cartItem.allSizes = cartItem.allSizes.map(({ size, price }) => ({ size: size._id, price }));

    const newCartList = yield call(addProductToCart, userId, cartItem);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartTotalPrice(newCartList.cart.totalPrice));
    setToLocalStorage(cartKey, newCartList.cart.items);
    yield put(setCartLoading(false));
  } catch (err) {
    yield call(handleCartError, err);
  }
}

export function* handleDeleteProductFromUserCart({ payload }) {
  const { userId, items } = payload;
  const itemsForDeleteInput = {
    product: items.productId,
    options: {
      size: items.sizeAndPrice.size._id
    }
  };

  try {
    yield put(setCartLoading(true));
    const newCartList = yield call(deleteProductFromCart, userId, itemsForDeleteInput);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartTotalPrice(newCartList.cart.totalPrice));
    yield put(setCartLoading(false));
    setToLocalStorage(cartKey, newCartList.cart.items);
  } catch (err) {
    yield call(handleCartError, err);
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

export function* handleSetCartItemSize({ payload }) {
  try {
    const { item, value } = payload;

    const cart = getFromLocalStorage(cartKey);

    const changedItems = changeCartItemSizeHandler(item, value, cart);

    setToLocalStorage(cartKey, changedItems);

    yield put(setCart(changedItems));
  } catch (err) {
    yield call(handleCartError, err);
  }
}

export function* handleSetUserCartItemSize({ payload }) {
  try {
    const { user, item, value } = payload;

    yield put(setCartLoading(true));

    const newCart = yield call(changeUserCartItemSize, user._id, item, value);

    yield put(setCart(newCart.cart.items));
    yield put(setCartLoading(false));
  } catch (err) {
    yield call(handleCartError, err);
  }
}

export function* handleSetCartItemUserQuantity({ payload }) {
  try {
    const newCartList = yield call(updateCartItemQuantity, payload);
    yield put(setCart(newCartList.cart.items));
    yield put(setCartTotalPrice(newCartList.cart.totalPrice));
  } catch (err) {
    yield call(handleCartError, err);
  }
}

function* handleCartError(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setCartError(e.message));
    yield put(setCartLoading(false));
  }
}

export default function* cartSaga() {
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
  yield takeEvery(SET_CART_ITEM_SIZE, handleSetCartItemSize);
  yield takeEvery(SET_USER_CART_ITEM_SIZE, handleSetUserCartItemSize);
  yield takeEvery(CHANGE_CART_ITEM_USER_QUANTITY, handleSetCartItemUserQuantity);
  yield takeEvery(RESET_CART, handleCartReset);
  yield takeEvery(CLEAN_CART, handleClearUserCart);
  yield takeEvery(ADD_PRODUCT_TO_USER_CART, handleAddProductToUserCart);
  yield takeEvery(DELETE_PRODUCT_FROM_USER_CART, handleDeleteProductFromUserCart);
}
