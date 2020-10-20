import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  fakeNPWarehouses,
  fakeNPPrices,
  fakeNPStreets,
  fakeNPCities
} from 'checkout.variables';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  getNovaPoshtaStreets,
  getNovaPoshtaPrices
} from '../checkout.actions';
import { handleCities, handleWarehouse } from '../checkout.sagas';
import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_PRICES,
  SET_LOADING,
  SET_NOVAPOSHTA_WAREHOUSES
} from '../checkout.types';

describe('Checkout pages sagas tests', () => {
  test('fetches cities', () =>
    expectSaga(handleCities, 'Львів')
      .provide([[matchers.call.fn(getNovaPoshtaCities), fakeNPCities]])
      .put({ type: SET_LOADING, payload: true })
      .put({
        type: SET_NOVAPOSHTA_CITIES,
        payload: {
          cities: fakeNPCities.data.getNovaPoshtaCities
        }
      })
      .put({ type: SET_LOADING, payload: false })
      .run());

  test('fetches streets', () => {
    expectSaga(handleCities, {
      ref: 'c4302938-f428-11e9-91ff-0025b501a04b',
      street: 'івана'
    })
      .provide([[matchers.call.fn(getNovaPoshtaStreets), fakeNPStreets]])
      .put({ type: SET_LOADING, payload: true })
      .put({
        type: SET_NOVAPOSHTA_STREETS,
        payload: {
          streets: fakeNPStreets.data.getNovaPoshtaStreets
        }
      })
      .put({ type: SET_LOADING, payload: false })
      .run();
  });

  test('fetches prices', () =>
    expectSaga(handleCities, {
      cityRecipient: '6dbe932e-1aad-11ea-8c15-0025b502a06e',
      weight: 1.6,
      cost: 3600,
      seatsAmount: 1,
      serviceType: 'WarehouseWarehouse'
    })
      .provide([[matchers.call.fn(getNovaPoshtaPrices), fakeNPPrices]])
      .put({ type: SET_LOADING, payload: true })
      .put({
        type: SET_NOVAPOSHTA_PRICES,
        payload: {
          price: fakeNPPrices.data.getNovaPoshtaPrices
        }
      })
      .put({ type: SET_LOADING, payload: false })
      .run());

  test('fetches warehouses', () =>
    expectSaga(handleWarehouse, 'Авіаторське')
      .provide([[matchers.call.fn(getNovaPoshtaWarehouse), fakeNPWarehouses]])
      .put({
        type: SET_NOVAPOSHTA_WAREHOUSES,
        payload: {
          price: fakeNPWarehouses.data.getNovaPoshtaWarehouses
        }
      })
      .run());
});
