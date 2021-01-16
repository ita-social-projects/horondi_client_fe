import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  fakeNPWarehouses,
  fakeNPPrices,
  fakeNPStreets,
  fakeNPCities
} from './checkout.variables';
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

describe('sagas test', () => {
  it.skip('fetch cities', () => {
    expectSaga(handleCities)
      .provide([[matchers.call.fn(getNovaPoshtaCities), fakeNPCities]])
      .put(setLoading(true))
      .put(setNovaPoshtaCities(fakeNPCities.data.getNovaPoshtaCities))
      .put(setLoading(false))
      .run();
  });

  it.skip('fetch streets', () => {
    expectSaga(handleStreets)
      .provide([[matchers.call.fn(getNovaPoshtaStreets), fakeNPStreets]])
      .put(setLoading(true))
      .put(setNovaPoshtaStreets(fakeNPStreets.data.getNovaPoshtaStreets))
      .put(setLoading(false))
      .run();
  });

  it.skip('fetch prices', () => {
    expectSaga(handlePrice)
      .provide([[matchers.call.fn(getNovaPoshtaPrices), fakeNPPrices]])
      .put(setNovaPoshtaPrices(fakeNPPrices.data.getNovaPoshtaPrices))
      .run();
  });

  it.skip('fetch warehouses', () => {
    expectSaga(handleWarehouse)
      .provide([[matchers.call.fn(getNovaPoshtaWarehouse()), fakeNPWarehouses]])
      .put(
        setNovaPoshtaWarehouse(fakeNPWarehouses.data.getNovaPoshtaWarehouses)
      )
      .run();
  });
});
