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
  getNovaPoshtaPrices,
  setLoading,
  setNovaPoshtaCities,
  setNovaPoshtaStreets,
  setNovaPoshtaPrices,
  setNovaPoshtaWarehouse
} from '../checkout.actions';
import {
  handleCities,
  handlePrice,
  handleStreets,
  handleWarehouse
} from '../checkout.sagas';
import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_PRICES,
  SET_LOADING,
  SET_NOVAPOSHTA_WAREHOUSES
} from '../checkout.types';

describe('Checkout pages sagas tests', () => {
  it('fetches cities', () =>
    expectSaga(handleCities, { payload: 'Львів' })
      .provide([[matchers.call.fn(getNovaPoshtaCities), fakeNPCities]])
      .put(setLoading(true))
      .put(setNovaPoshtaCities(fakeNPCities))
      .put(setLoading(false))
      .run());

  it('fetches streets', () => {
    expectSaga(handleCities, {
      payload: {
        ref: 'c4302938-f428-11e9-91ff-0025b501a04b',
        street: 'івана'
      }
    })
      .provide([[matchers.call.fn(getNovaPoshtaStreets), fakeNPStreets]])
      .put(setLoading(true))
      .put(setNovaPoshtaStreets(fakeNPStreets))
      .put(setLoading(false))
      .run();
  });

  it('fetches prices', () =>
    expectSaga(handleCities, {
      payload: {
        cityRecipient: '6dbe932e-1aad-11ea-8c15-0025b502a06e',
        weight: 1.6,
        cost: 3600,
        seatsAmount: 1,
        serviceType: 'WarehouseWarehouse'
      }
    })
      .provide([[matchers.call.fn(getNovaPoshtaPrices), fakeNPPrices]])
      .put(setLoading(true))
      .put(setNovaPoshtaPrices(fakeNPPrices))
      .put(setLoading(false))
      .run());

  it('fetches warehouses', () =>
    expectSaga(handleWarehouse, { payload: 'Авіаторське' })
      .provide([[matchers.call.fn(getNovaPoshtaWarehouse), fakeNPWarehouses]])
      .put(setNovaPoshtaWarehouse(fakeNPWarehouses))
      .run());
});

describe('Checkout sagas test', () => {
  it('should not throw error', () => {
    expect(handleWarehouse).not.toThrow();
    expect(handleCities).not.toThrow();
    expect(handleStreets).not.toThrow();
    expect(handlePrice).not.toThrow();
  });
  it('#1 should receive all patterns and set to store', () => {
    expectSaga(handleCities)
      .provide([[matchers.call.fn(getAllPatterns), fakePatterns]])
      .put(setPatternLoading(true))
      .put(setPatterns(fakePatterns))
      .put(setPatternLoading(false))
      .run();
  });
  it('#2 should receive one pattern and set to store', () => {
    const fakePattern = {
      data: {
        getPatternById: {
          ...pattern
        }
      }
    };
    expectSaga(handlePatternLoad, patternId)
      .provide([[matchers.call.fn(getPatternById), fakePattern]])
      .put(setPatternLoading(true))
      .put(setPattern(fakePattern))
      .put(setPatternLoading(false))
      .run();
  });
});
