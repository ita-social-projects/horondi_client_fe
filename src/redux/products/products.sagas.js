import { takeEvery, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setAllProducts,
  setProductsLoading,
  setAllFilterData,
  setPagesCount,
  setProduct,
  setProductLoading,
  setCommentsLoading,
  setComment,
  setRate,
  setUpdatingComment
} from './products.actions';

import { setError } from '../error/error.actions';
import getItems from '../../utils/client';

import {
  GET_ALL_FILTERS,
  GET_FILTRED_PRODUCTS,
  GET_PRODUCT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from './products.types';

import {
  addComment,
  changeRate,
  deleteComment,
  getComments,
  getProduct,
  updateComment
} from './products.operations';

import {
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarStatus
} from '../snackbar/snackbar.actions';

import { SNACKBAR_MESSAGE } from '../../configs';

const { added, updated, deleted, error } = SNACKBAR_MESSAGE;

export function* handleFilterLoad() {
  try {
    yield put(setProductsLoading(true));
    const state = yield select((state) => state.Products);
    const products = yield call(
      getItems,
      `query(
        $search: String
        $price: [Int]
        $colors: [String]
        $patterns: [String]
        $isHotItem: Boolean
        $skip:Int
        $limit:Int
        $rate:Int
        $basePrice:Int
        $purchasedCount:Int
        $category:[String]
        ){
          getProducts(
            filter: {
              colors: $colors
              pattern: $patterns
              price: $price
              category:$category
              isHotItem: $isHotItem
            }
            skip: $skip
            limit: $limit
            search: $search
            sort:{ 
              rate: $rate,
              basePrice: $basePrice,
              purchasedCount:$purchasedCount
            }
            ){
              items{
                _id
                purchasedCount
                name {
                  lang
                  value
                }
                basePrice {
                  value
                }
                rate
                images {
                  primary {
                    medium
                  }
                }
                colors{
                  name {
                    lang
                    value
                  }
                  simpleName {
                    lang
                    value
                  }
                }
                pattern {
                  lang
                  value
                }
                category {
                  _id
                  name {
                    value
                  }
                  isMain
                }
                isHotItem
              }
              count
            }
          }`,
      {
        search: state.filters.searchFilter,
        colors: state.filters.colorsFilter,
        patterns: state.filters.patternsFilter,
        price: state.filters.priceFilter,
        skip: state.currentPage * state.productsPerPage,
        limit: state.productsPerPage,
        rate: state.sortByRate || undefined,
        basePrice: state.sortByPrice || undefined,
        category: state.filters.categoryFilter,
        purchasedCount: state.sortByPopularity || undefined,
        isHotItem: state.filters.isHotItemFilter
      }
    );
    yield put(
      setPagesCount(
        Math.ceil(products.data.getProducts.count / state.productsPerPage)
      )
    );
    yield put(setAllProducts(products.data.getProducts.items));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleGetFilters() {
  try {
    yield put(setProductsLoading(true));
    const filter = yield call(
      getItems,
      `query{
        getProducts {
          items{
            colors {
              name {
                value
              }
              simpleName {
                value
              }
            }
            basePrice {
              value
            }
            pattern {
              value
            }
            category {
              _id
              name {
                value
              }
              isMain
            }
          }
        }
      }`
    );
    yield put(setAllFilterData(filter.data.getProducts.items));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors(e) {
  yield put(setProductsLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export function* handleProductLoading({ payload }) {
  try {
    yield put(setProductLoading(true));
    const product = yield call(getProduct, payload);
    yield put(setProduct(product.data.getProductById));
    yield put(setProductLoading(false));
  } catch (e) {
    yield put(setProductLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleAddComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    yield call(addComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
    yield call(handleSnackbar, added);
    if (payload.rate > 0) {
      const rate = yield call(changeRate, payload);
      yield put(setRate(rate.data[payload.method]));
    }
  } catch (e) {
    yield call(handleCommentsError);
  }
}

export function* handleDeleteComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    yield call(deleteComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
    yield put(setCommentsLoading(false));
    yield call(handleSnackbar, deleted);
  } catch (e) {
    yield call(handleCommentsError);
  }
}

export function* handleUpdateComment({ payload }) {
  try {
    yield put(setUpdatingComment(payload.comment));
    yield call(updateComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setUpdatingComment(null));
    yield call(handleSnackbar, updated);
  } catch (e) {
    yield put(setUpdatingComment(null));
    yield put(setSnackBarSeverity('error'));
    yield put(setSnackBarMessage(error));
    yield put(setSnackBarStatus(true));
  }
}

export function* handleCommentsError() {
  yield put(setCommentsLoading(false));
  yield put(setSnackBarSeverity('error'));
  yield put(setSnackBarMessage(error));
  yield put(setSnackBarStatus(true));
}

export function* handleSnackbar(message) {
  yield put(setSnackBarSeverity('success'));
  yield put(setSnackBarMessage(message));
  yield put(setSnackBarStatus(true));
}

export default function* productsSaga() {
  yield takeEvery(GET_ALL_FILTERS, handleGetFilters);
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilterLoad);
  yield takeEvery(GET_PRODUCT, handleProductLoading);
  yield takeEvery(ADD_COMMENT, handleAddComment);
  yield takeEvery(DELETE_COMMENT, handleDeleteComment);
  yield takeEvery(UPDATE_COMMENT, handleUpdateComment);
}
