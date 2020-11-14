import { takeEvery, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setAllProducts,
  setProductsLoading,
  setAllFilterData,
  setPagesCount,
  setProduct,
  setProductLoading
} from './products.actions';

import { setError } from '../error/error.actions';

import {
  GET_ALL_FILTERS,
  GET_FILTRED_PRODUCTS,
  GET_PRODUCT
} from './products.types';

import {
  getAllProducts,
  getFilteredProducts,
  getProduct
} from './products.operations';

import { setComments } from '../comments/comments.actions';

export function* handleFilteredProductsLoad() {
  try {
    const state = yield select((state) => state.Products);
    const currency = yield select((state) => state.Currency.currency);
    const products = yield call(getFilteredProducts, { state, currency });

    yield put(setPagesCount(Math.ceil(products.count / state.countPerPage)));
    yield put(setAllProducts(products.items));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleGetAllProducts() {
  try {
    yield put(setProductsLoading(true));
    const products = yield call(getAllProducts);
    yield put(setAllFilterData(products.items));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors({ message }) {
  yield put(setProductsLoading(false));
  yield put(setError(message));
  yield put(push('/error-page'));
}

export function* handleProductLoading({ payload }) {
  try {
    yield put(setProductLoading(true));
    const product = yield call(getProduct, payload);
    yield put(setProduct(product.data.getProductById));
    yield put(setComments(product.data.getProductById.comments.items));
    yield put(setProductLoading(false));
  } catch (e) {
    yield put(setProductLoading(false));
    yield put(setError(e.message));
    yield put(push('/error-page'));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_ALL_FILTERS, handleGetAllProducts);
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilteredProductsLoad);
  yield takeEvery(GET_PRODUCT, handleProductLoading);
}
