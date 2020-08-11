import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setAllProducts,
  setLoading,
  setAllFilterProducts,
  setPagesCount
} from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_ALL_PRODUCTS, GET_FILTRED_PRODUCTS } from './products.types';

export function* handleFilterLoad({
  payload = {
    filters: {
      colorsFilter: [],
      patternsFilter: [],
      priceFilter: [0, 99999],
      isHotItemFilter: false,
      categoryFilter: [],
      searchFilter: ''
    },
    skip: 1,
    limit: 90,
    rate: undefined,
    basePrice: undefined,
    purchasedCount: undefined,

    productsPerPage: 9
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
            basePrice
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
          },
      }`,
      {
        search: payload.filters.searchFilter,
        colors: payload.filters.colorsFilter,
        patterns: payload.filters.patternsFilter,
        price: payload.filters.priceFilter,
        skip: payload.skip,
        limit: payload.limit,
        rate: payload.rate,
        basePrice: payload.basePrice,
        category: payload.filters.categoryFilter,
        purchasedCount: payload.purchasedCount,
        isHotItem: payload.filters.isHotItemFilter
      }
    );
    yield put(
      setPagesCount(
        Math.ceil(products.data.getProducts.count / payload.productsPerPage)
      )
    );
    yield put(setAllFilterProducts(products.data.getProducts.items));
    yield put(setLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleGetAllProducts() {
  try {
    yield put(setLoading(true));
    const products = yield call(
      getItems,
      `query{
        getProducts {
      items{
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
          }
      }`
    );

    yield put(setAllProducts(products.data.getProducts.items));
    yield put(setLoading(false));
  } catch (e) {
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
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilterLoad);
}
