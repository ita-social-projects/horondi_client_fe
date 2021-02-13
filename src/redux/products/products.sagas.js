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
  setProductsForSearchBar,
  setSearchBarLoading
} from '../search-bar/search-bar.actions';

import {
  GET_ALL_FILTERS,
  GET_FILTRED_PRODUCTS,
  GET_PRODUCT
} from './products.types';

import {
  getFilteredProducts,
  getProductById,
  getAllFilters
} from './products.operations';

import { setComments } from '../comments/comments.actions';
import routes from '../../configs/routes';

const selectStateProducts = (state) => state.Products;
const selectStateCurrency = (state) => state.Currency.currency;

export function* handleFilteredProductsLoad({ payload: { forSearchBar } }) {
  try {
    if (forSearchBar) {
      yield put(setSearchBarLoading(true));
    } else {
      yield put(setProductsLoading(true));
    }
    const state = yield select(selectStateProducts);
    const currency = yield select(selectStateCurrency);
    const products = yield call(getFilteredProducts, { state, currency });
    yield put(setPagesCount(Math.ceil(products.count / state.countPerPage)));
    if (forSearchBar) {
      yield put(setProductsForSearchBar(products.items));
      yield put(setSearchBarLoading(false));
    } else {
      yield put(setAllProducts(products.items));
      yield put(setProductsLoading(false));
    }
  } catch (e) {
    console.log(e);
    yield call(handleProductsErrors, e);
  }
}

export function* handleGetAllProductsFilters() {
  // refactor saga
  try {
    yield put(setProductsLoading(true));
    const filtersData = yield call(getAllFilters);
    yield put(setAllFilterData(filtersData));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors({ message }) {
  yield put(setProductsLoading(false));
  yield put(setSearchBarLoading(false));
  yield put(setError(message));
  yield put(push(routes.pathToErrorPage));
}

export function* handleProductLoading({ payload }) {
  try {
    yield put(setProductLoading(true));
    const product = yield call(getProductById, payload);
    yield put(setProduct(product));
    yield put(setComments(product.comments?.items));
    yield put(setProductLoading(false));
  } catch (e) {
    yield put(setProductLoading(false));
    yield put(setError(e.message));
    yield put(push(routes.pathToErrorPage));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_ALL_FILTERS, handleGetAllProductsFilters); // here new saga - handleGetAllProductsFilters
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilteredProductsLoad);
  yield takeEvery(GET_PRODUCT, handleProductLoading);
}
