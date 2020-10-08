import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import getItems from '../../../utils/client';
import { handleBusinessPageLoad } from '../business-pages.sagas';
import {
  SET_BUSINESS_PAGE,
  SET_BUSINESS_PAGE_LOADING
} from '../business-pages.types';
import { SET_ERROR } from '../../error/error.types';

describe('Business pages sagas tests', () => {
  it('fetches business page by code', () => {
    const fakeAboutUs = {
      data: {
        getBusinessTextByCode: {
          code: 'about-us',
          title: [
            {
              value: 'Про нас',
              lang: 'ua'
            },
            {
              value: 'About us',
              lang: 'en'
            }
          ]
        }
      }
    };

    return expectSaga(handleBusinessPageLoad, { payload: 'about-us' })
      .provide([[matchers.call.fn(getItems), fakeAboutUs]])
      .put({ type: SET_BUSINESS_PAGE_LOADING, payload: true })
      .put({
        type: SET_BUSINESS_PAGE,
        payload: {
          businessPage: fakeAboutUs.data.getBusinessTextByCode,
          key: 'aboutUs'
        }
      })
      .put({ type: SET_BUSINESS_PAGE_LOADING, payload: false })
      .run();
  });

  it('handles errors', () => {
    const e = new Error('BUSINESS_PAGE_NOT_FOUND');

    return expectSaga(handleBusinessPageLoad, { payload: 'not-existing-page' })
      .provide([[matchers.call.fn(getItems), throwError(e)]])
      .put({ type: SET_BUSINESS_PAGE_LOADING, payload: true })
      .put({ type: SET_BUSINESS_PAGE_LOADING, payload: false })
      .put({ type: SET_ERROR, payload: { e } })
      .run();
  });
});
