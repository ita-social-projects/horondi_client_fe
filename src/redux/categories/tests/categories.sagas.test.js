import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { handleCategoriesLoad } from '../categories.sagas';
import getItems from '../../../utils/client';
import { SET_CATEGORIES, SET_CATEGORIES_LOADING } from '../categories.types';
import { SET_ERROR } from '../../error/error.types';

describe('CategoriesList saga', () => {
  it('fetches categories', () => {
    const fakeCategories = {
      data: {
        getAllCategories: {
          name: [
            {
              value: 'Bags',
              lang: 'en'
            }
          ]
        }
      }
    };

    return expectSaga(handleCategoriesLoad)
      .provide([[matchers.call.fn(getItems), fakeCategories]])
      .put({ type: SET_CATEGORIES_LOADING, payload: true })
      .put({
        type: SET_CATEGORIES,
        payload: fakeCategories.data.getAllCategories
      })
      .put({ type: SET_CATEGORIES_LOADING, payload: false })
      .run();
  });

  it('handles errors', () => {
    const e = new Error('categories not found');

    return expectSaga(handleCategoriesLoad)
      .provide([[matchers.call.fn(getItems), throwError(e)]])
      .put({ type: SET_CATEGORIES_LOADING, payload: true })
      .put({ type: SET_CATEGORIES_LOADING, payload: false })
      .put({ type: SET_ERROR, payload: { e } })
      .run();
  });
});
