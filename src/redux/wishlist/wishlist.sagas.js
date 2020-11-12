import { takeEvery, put, select, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setWishlist } from './wishlist.actions';
import { setError } from '../error/error.actions';
import {
  GET_WISHLIST,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST
} from './wishlist.types';

import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage.service';

import {
  addProductToWishlist,
  removeProductFromWishlist
} from './wishlist.operations';
import { setUser } from '../user/user.actions';

export function* handleWishlistLoad() {
  const wishlist = getFromLocalStorage('wishlist');
  yield put(setWishlist(wishlist));
}

export function* handleAddWishlistItem({ payload }) {
  try {
    const wishlist = getFromLocalStorage('wishlist');
    const newWishlist = [...wishlist, payload];

    setToLocalStorage('wishlist', newWishlist);
    yield put(setWishlist(newWishlist));

    const userData = yield select(({ User }) => User.userData);
    if (userData) {
      userData.wishlist = [...userData.wishlist, payload];
      yield put(setUser(userData));
      yield call(addProductToWishlist, userData._id, payload._id);
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(push('/error-page'));
  }
}

export function* handleRemoveWishlistItem({ payload }) {
  const wishlist = getFromLocalStorage('wishlist');
  const newWishlist = wishlist.filter((item) => item._id !== payload._id);

  setToLocalStorage('wishlist', newWishlist);
  yield put(setWishlist(newWishlist));

  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    userData.wishlist = userData.wishlist.filter(
      ({ _id }) => _id !== payload._id
    );
    yield put(setUser(userData));
    yield call(removeProductFromWishlist, userData._id, payload._id);
  }
}

export default function* wishlistSaga() {
  yield takeEvery(GET_WISHLIST, handleWishlistLoad);
  yield takeEvery(ADD_ITEM_TO_WISHLIST, handleAddWishlistItem);
  yield takeEvery(REMOVE_ITEM_FROM_WISHLIST, handleRemoveWishlistItem);
}
