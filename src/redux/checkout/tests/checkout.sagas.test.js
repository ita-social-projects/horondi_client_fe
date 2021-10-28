import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { fakeNPWarehouses, fakeNPPrices, fakeNPCities } from './checkout.variables';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  getNovaPoshtaPrices,
  setDeliveryLoading,
  setNovaPoshtaCities,
  setNovaPoshtaPrices,
  setNovaPoshtaWarehouse
} from '../checkout.actions';
import {
  handleNovaPoshtaCities,
  handleNovaPoshtaPrice,
  handleNovaPoshtaWarehouse
} from '../checkout.sagas';

describe('sagas test', () => {
  it.skip('fetch cities from Nova Poshta', () => {
    expectSaga(handleNovaPoshtaCities)
      .provide([[matchers.call.fn(getNovaPoshtaCities), fakeNPCities]])
      .put(setDeliveryLoading(true))
      .put(setNovaPoshtaCities(fakeNPCities.data.getNovaPoshtaCities))
      .put(setDeliveryLoading(false))
      .run();
  });

  it.skip('fetch prices from Nova Poshta', () => {
    expectSaga(handleNovaPoshtaPrice)
      .provide([[matchers.call.fn(getNovaPoshtaPrices), fakeNPPrices]])
      .put(setNovaPoshtaPrices(fakeNPPrices.data.getNovaPoshtaPrices))
      .run();
  });

  it.skip('fetch warehouses', () => {
    expectSaga(handleNovaPoshtaWarehouse)
      .provide([[matchers.call.fn(getNovaPoshtaWarehouse()), fakeNPWarehouses]])
      .put(setNovaPoshtaWarehouse(fakeNPWarehouses.data.getNovaPoshtaWarehouses))
      .run();
  });
});
