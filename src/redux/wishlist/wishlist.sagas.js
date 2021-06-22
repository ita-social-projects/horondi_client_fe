import { takeEvery, put, call, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setWishlist } from './wishlist.actions';
import { setError } from '../error/error.actions';
import {
  GET_WISHLIST,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  ADD_CART_ITEMS_TO_WISHLIST
} from './wishlist.types';

import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import {
  handleUserWishlistOperation,
  addProductToUserWishlist,
  removeProductFromUserWishlist
} from './wishlist.operations';
import { USER_IS_BLOCKED, WISHLIST_KEY } from '../../configs/index';
import routes from '../../const/routes';
import { AUTH_ERRORS } from '../../const/error-messages';
import { handleUserError } from '../user/user.sagas';

const { pathToErrorPage } = routes;

export function* handleWishlistLoad() {
  const wishlist = getFromLocalStorage(WISHLIST_KEY);
  yield put(setWishlist(wishlist));
}

export function* handleAddWishlistItem({ payload: product }) {
  try {
    const wishlist = getFromLocalStorage(WISHLIST_KEY);
    const newWishlist = [...wishlist, product];

    setToLocalStorage(WISHLIST_KEY, newWishlist);
    yield put(setWishlist(newWishlist));

    yield call(handleUserWishlistOperation, addProductToUserWishlist, product._id);
  } catch (e) {
    yield call(handleWishlistError, e);
  }
}
export function* handleAddWishlistCartItems({ payload }) {
  try {
    const wishlist = getFromLocalStorage(WISHLIST_KEY);
    const cartItems = payload.filter((item) => !wishlist.includes(item._id)).map((el) => el._id);
    const newWishlist = [...wishlist, ...cartItems];

    setToLocalStorage(WISHLIST_KEY, newWishlist);
    yield put(setWishlist(newWishlist));
    yield all(
      cartItems.map((id) => call(handleUserWishlistOperation, addProductToUserWishlist, id))
    );
  } catch (e) {
    yield call(handleWishlistError, e);
  }
}

export function* handleRemoveWishlistItem({ payload: productId }) {
  try {
    const wishlist = getFromLocalStorage(WISHLIST_KEY);
    const newWishlist = wishlist.filter((item) => item._id !== productId);

    setToLocalStorage(WISHLIST_KEY, newWishlist);
    yield put(setWishlist(newWishlist));

    yield call(handleUserWishlistOperation, removeProductFromUserWishlist, productId);
  } catch (e) {
    yield call(handleWishlistError, e);
  }
}

function* handleWishlistError(e) {
  if (e.message === USER_IS_BLOCKED || e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID) {
    yield call(handleUserError, e);
  } else {
    yield put(setError(e.message));
    yield put(push(pathToErrorPage));
  }
}

export default function* wishlistSaga() {
  yield takeEvery(GET_WISHLIST, handleWishlistLoad);
  yield takeEvery(ADD_ITEM_TO_WISHLIST, handleAddWishlistItem);
  yield takeEvery(REMOVE_ITEM_FROM_WISHLIST, handleRemoveWishlistItem);
  yield takeEvery(ADD_CART_ITEMS_TO_WISHLIST, handleAddWishlistCartItems);
}
