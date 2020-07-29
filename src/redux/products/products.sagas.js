import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setAllProducts, setLoading } from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_ALL_PRODUCTS } from './products.types';

export function* handleGetAllProducts() {
  try {
    yield put(setLoading(true));
    const products = yield call(
      getItems,
      `query{
        getProducts {
            name {
              lang
              value
            }
            rate
            basePrice
            colors {
              name {
                lang
                value
              }
              simpleName {
                lang
                value
              }
            }
            basePrice
            pattern {
              lang
              value
            }
            rate
            images{
                primary {
                    medium
                }
            }
            category {
              _id
              name {
                value
              }
              isMain
            }
          }
      }`
    );
    yield put(setAllProducts(products.data.getProducts));
    yield put(setLoading(false));
  } catch (e) {
    console.log(e);
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors(e) {
  yield put(setLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* productsSaga() {
  yield takeEvery(GET_ALL_PRODUCTS, handleGetAllProducts);
}
