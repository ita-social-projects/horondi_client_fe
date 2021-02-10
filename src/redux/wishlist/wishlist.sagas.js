import { takeEvery, put, select, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setWishlist } from './wishlist.actions';
import { setError } from '../error/error.actions';
import {
  GET_WISHLIST,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  ADD_CART_ITEMS_TO_WISHLIST
} from './wishlist.types';

import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage.service';
import {
  removeProductFromUserWishlist,
  addProductToUserWishlist
} from '../user/user.operations';
import { wishlistKey } from '../../configs/index';

export function* handleWishlistLoad() {
  const wishlist = getFromLocalStorage(wishlistKey);
  yield put(setWishlist(wishlist));
}

export function* handleAddWishlistItem({ payload: product }) {
  try {
    const wishlist = getFromLocalStorage(wishlistKey);
    const newWishlist = [...wishlist, product];

    setToLocalStorage(wishlistKey, newWishlist);
    yield put(setWishlist(newWishlist));

    yield call(
      handleUserWishlistOperation,
      addProductToUserWishlist,
      product._id
    );
  } catch (e) {
    yield put(setError(e.message));
    yield put(push('/error-page'));
  }
}
export function* handleAddWishlistCartItems({ payload }) {
  try {
    const wishlist = getFromLocalStorage(wishlistKey);
    // console.log(payload)
    const cartItems = payload
      .filter((item) => {
        const data = wishlist.some((el) => item._id === el._id);
        console.log(data);
        return !data;
      })
      .map((el) => el._id);
    // console.log(cartItems)
    const newWishlist = [...wishlist, ...cartItems];
    setToLocalStorage(wishlistKey, newWishlist);
    yield put(setWishlist(newWishlist));
  } catch (e) {
    yield put(setError(e.message));
    yield put(push('/error-page'));
  }
}

export function* handleRemoveWishlistItem({ payload: productId }) {
  try {
    const wishlist = getFromLocalStorage(wishlistKey);
    const newWishlist = wishlist.filter((item) => item._id !== productId);

    setToLocalStorage(wishlistKey, newWishlist);
    yield put(setWishlist(newWishlist));

    yield call(
      handleUserWishlistOperation,
      removeProductFromUserWishlist,
      productId
    );
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

function* handleUserWishlistOperation(handler, productId) {
  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    yield call(handler, {
      id: userData._id,
      productId,
      wishlistKey
    });
  }
}

export default function* wishlistSaga() {
  yield takeEvery(GET_WISHLIST, handleWishlistLoad);
  yield takeEvery(ADD_ITEM_TO_WISHLIST, handleAddWishlistItem);
  yield takeEvery(REMOVE_ITEM_FROM_WISHLIST, handleRemoveWishlistItem);
  yield takeEvery(ADD_CART_ITEMS_TO_WISHLIST, handleAddWishlistCartItems);
}
