import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setProductsLoading, setProduct } from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_PRODUCT } from './products.types';

export function* handleProductLoading({ payload }) {
  yield put(setProductsLoading(true));
  const query = `
  query {
    getProductById(id:"${payload}") {
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
      basePrice
      options {
        size {
          name
          heightInCm
          widthInCm
          depthInCm
          volumeInLiters
          available
          additionalPrice
        }
        bottomMaterial {
          name {
            lang
            value
          }
          additionalPrice
        }
        additions {
          name {
            lang
            value
          }
          available
          additionalPrice
        }
      }
      rate
      comments {
        text
        date
        user {
          name
        }
      }
      options {
        size {
          name
          volumeInLiters
          widthInCm
          weightInKg
        }
        bottomMaterial {
          name {
            lang
            value
          }
        available
          additionalPrice
        }
        additions {
          name {
            value
            lang
          }
          available
          additionalPrice
        }
        availableCount
      }
      images {
        primary {
          large
          medium
        }
        additional {
          large
          medium
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
}`;
  try {
    const product = yield call(getItems, query);
    yield put(setProduct(product.data.getProductById));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield put(setProductsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_PRODUCT, handleProductLoading);
}
