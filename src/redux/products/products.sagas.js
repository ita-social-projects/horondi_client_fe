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
import getItems from '../../utils/client';
import {
  GET_ALL_FILTERS,
  GET_FILTRED_PRODUCTS,
  GET_PRODUCT
} from './products.types';

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
                    large
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
  yield put(setProductLoading(true));
  const query = `
  query($id: ID!) {
    getProductById(id: $id) {
      ... on Product {
        _id
      category {
        _id
        name {
          lang
          value
        }
      }
      name {
        lang
        value
      }
      description {
        lang
        value
      }
      mainMaterial {
        lang
        value
      }
      innerMaterial {
        lang
        value
      }
      strapLengthInCm
      images {
        primary {
          medium
          large
        }
        additional {
          thumbnail
          large
        }
      }
      colors {
        code
        name {
          lang
          value
        }
        images {
          thumbnail
          large
        }
        available
      }
      pattern {
        lang
        value
      }
      closure {
        lang
        value
      }
      basePrice {
        value
        currency
      }
      options {
        size {
          name
          heightInCm
          widthInCm
          depthInCm
          volumeInLiters
          available
          additionalPrice {
            value
            currency
          }
        }
        bottomMaterial {
          name {
            lang
            value
          }
          additionalPrice {
            value
            currency
          }
        }
        additions {
          name {
            lang
            value
          }
          available
          additionalPrice {
            value
            currency
          }
        }
      }
      rate
      comments {
        _id
        text
        date
        user {
          name
        }
      }
      options {
        size {
          _id
          name
          volumeInLiters
          widthInCm
          weightInKg
        }
        bottomMaterial {
          _id
          name {
            lang
            value
          }
          available
          additionalPrice {
            value
            currency
          }
        }
        additions {
          name {
            value
            lang
          }
          available
          additionalPrice {
            value
            currency
          }
        }
        availableCount
      }
      images {
        primary {
          thumbnail
          small
          large
          medium
        }
        additional {
          large
          medium
        }
      }
    }
  }
}`;
  const variables = {
    id: payload
  };
  try {
    const product = yield call(getItems, query, variables);
    yield put(setProduct(product.data.getProductById));
    yield put(setProductLoading(false));
  } catch (e) {
    yield put(setProductLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_ALL_FILTERS, handleGetFilters);
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilterLoad);
  yield takeEvery(GET_PRODUCT, handleProductLoading);
}
