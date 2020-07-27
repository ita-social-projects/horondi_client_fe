import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setAllFilterProducts, setLoading } from './filter.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_FILTRED_PRODUCTS } from './filter.types';

export function* handleFilterLoad({
  payload = {
    search: '',
    colors: [],
    patterns: [],
    price: [0, 99999],
    skip: 1,
    limit: 9,
    rate: 0,
    basePrice: 0
  }
}) {
  try {
    yield put(setLoading(true));
    const products = yield call(
      getItems,
      `query(
                $search: String
                $price: [Int]
                $colors: [String]
                $patterns: [String]
                $skip:Int
                $limit:Int
                $rate:Int
                $basePrice:Int
            ){
            getProductsByOptions(
                filter: {
                    colors: $colors
                    pattern: $patterns
                    price: $price
                  }
                 skip: $skip
                 limit: $limit
                search: $search
               sort:{ 
                 rate: $rate,
                 basePrice: $basePrice,
                }
            ){
            _id
            name {
              lang
              value
            }
            basePrice
            rate
            images {
              primary {
                medium
              }
            }
            purchasedCount
            colors{
                name {
                  lang
                  value
                }
                simpleName
              }
            pattern {
                lang
                value
              }
          },
      }`,
      {
        search: payload.search,
        colors: payload.colors,
        patterns: payload.patterns,
        price: payload.price,
        skip: payload.skip,
        limit: payload.limit,
        rate: payload.rate,
        basePrice: payload.basePrice
      }
    );
    yield put(setAllFilterProducts(products.data.getProductsByOptions));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleFilterError, e);
  }
}

export function* handleFilterError(e) {
  yield put(setLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* filtersSaga() {
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilterLoad);
}
