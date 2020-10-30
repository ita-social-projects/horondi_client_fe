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

import { setUser } from '../user/user.actions';
import {
  removeProductFromUserCartOrWishlist,
  addProductToUserCartOrWishlist
} from '../user/user.operations';

const key = 'wishlist';

export function* handleWishlistLoad() {
  const wishlist = getFromLocalStorage(key);
  yield put(setWishlist(wishlist));
}

export function* handleAddWishlistItem({ payload: product }) {
  try {
    const wishlist = getFromLocalStorage(key);
    const newWishlist = [...wishlist, product];

    setToLocalStorage(key, newWishlist);
    yield put(setWishlist(newWishlist));

    const userData = yield select(({ User }) => User.userData);
    if (userData) {
      userData.wishlist = [...userData.wishlist, product];
      yield put(setUser(userData));
      yield call(addProductToUserCartOrWishlist, {
        id: userData._id,
        productId: product._id,
        key
      });
    }
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleRemoveWishlistItem({ payload: productId }) {
  try {
    const wishlist = getFromLocalStorage(key);
    const newWishlist = wishlist.filter((item) => item._id !== productId);

    setToLocalStorage(key, newWishlist);
    yield put(setWishlist(newWishlist));

    const userData = yield select(({ User }) => User.userData);
    if (userData) {
      userData.wishlist = userData.wishlist.filter(
        ({ _id }) => _id !== productId
      );
      yield put(setUser(userData));
      yield call(removeProductFromUserCartOrWishlist, {
        id: userData._id,
        productId,
        key
      });
    }
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* wishlistSaga() {
  yield takeEvery(GET_WISHLIST, handleWishlistLoad);
  yield takeEvery(ADD_ITEM_TO_WISHLIST, handleAddWishlistItem);
  yield takeEvery(REMOVE_ITEM_FROM_WISHLIST, handleRemoveWishlistItem);
}
