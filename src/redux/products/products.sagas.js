import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setAllProducts, setLoading } from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_ALL_PRODUCTS } from './products.types';

export function* handleGetAllProducts() {
  console.log('GET ALL CALLED!');
  try {
    yield put(setLoading(true));
    const products = yield call(
      getItems,
      `query{
        getAllProducts {
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
              simpleName
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
          }
      }`
    );
    yield put(setAllProducts(products.data.getAllProducts));
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
