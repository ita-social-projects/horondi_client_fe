import { takeEvery, call, put } from 'redux-saga/effects';

import { setWishlist } from './wishlist.actions';
import {
  GET_WISHLIST,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST
} from './wishlist.types';

import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage.service';

function* handleWishlistLoad() {
  const wishlist = yield call(getFromLocalStorage, 'wishlist');
  yield put(setWishlist(wishlist));
}

function* handleAddWishlistItem({ payload }) {
  const wishlist = yield call(getFromLocalStorage, 'wishlist');
  const newWishlist = [...wishlist, payload];

  setToLocalStorage('wishlist', newWishlist);
  yield put(setWishlist(newWishlist));
}

function* handleRemoveWishlistItem({ payload }) {
  const wishlist = yield call(getFromLocalStorage, 'wishlist');

  if (window.confirm('Delete?')) {
    const newWishlist = wishlist.filter((item) => item._id !== payload._id);

    setToLocalStorage('wishlist', newWishlist);
    yield put(setWishlist(newWishlist));
  }
}

export default function* wishlistSaga() {
  yield takeEvery(GET_WISHLIST, handleWishlistLoad);
  yield takeEvery(ADD_ITEM_TO_WISHLIST, handleAddWishlistItem);
  yield takeEvery(REMOVE_ITEM_FROM_WISHLIST, handleRemoveWishlistItem);
}
