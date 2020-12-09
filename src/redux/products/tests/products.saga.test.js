import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { handleProductLoading } from '../products.sagas';

import { getProduct } from '../products.operations';

import { SET_ERROR } from '../../error/error.types';
import { SET_PRODUCTS_LOADING, SET_PRODUCT } from '../products.types';

const productId = 'c3a84a5b9866c30390366168';

describe('Products saga', () => {
  it('fetches product', () => {
    const fakeProduct = {
      data: {
        getProductById: {
          name: {
            lang: 'en',
            value: 'Rolltop Pink'
          },
          basePrice: 1450
        }
      }
    };

    return expectSaga(handleProductLoading, productId)
      .provide([[matchers.call.fn(getProduct), fakeProduct]])
      .put({ type: SET_PRODUCTS_LOADING, payload: true })
      .put({ type: SET_PRODUCT, payload: fakeProduct.data.getProductById })
      .put({ type: SET_PRODUCTS_LOADING, payload: false })
      .run();
  });

  it('handles product fetching error', () => {
    const e = new Error('product not found');

    return expectSaga(handleProductLoading, productId)
      .provide([[matchers.call.fn(getProduct), throwError(e)]])
      .put({ type: SET_PRODUCTS_LOADING, payload: true })
      .put({ type: SET_PRODUCTS_LOADING, payload: false })
      .put({ type: SET_ERROR, payload: { e } })
      .run();
  });
});
