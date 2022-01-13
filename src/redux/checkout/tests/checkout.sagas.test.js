import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  fakeNPWarehouses,
  fakeNPPrices,
  fakeNPCities,
  fakeUkrPostRegions,
  fakeUkrPostDistricts,
  fakeUkrPostCities,
  fakeUkrPostOffices
} from './checkout.variables';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  getNovaPoshtaPrices,
  setDeliveryLoading,
  setNovaPoshtaCities,
  setNovaPoshtaPrices,
  setNovaPoshtaWarehouse,
  getUkrPostRegions,
  getUkrPostDistricts,
  getUkrPostCities,
  getUkrPostPostOffices,
  setUkrPostRegions,
  setUkrPostDistricts,
  setUkrPostCities,
  setUkrPostPostOffices
} from '../checkout.actions';
import {
  handleNovaPoshtaCities,
  handleNovaPoshtaPrice,
  handleNovaPoshtaWarehouse,
  handleUkrPostRegions,
  handleUkrPostDistricts,
  handleUkrPostCities,
  handleUkrPostPostOffices
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

  it.skip('fetch regions from UkrPoshta', () => {
    expectSaga(handleUkrPostRegions)
      .provide([[matchers.call.fn(getUkrPostRegions), fakeUkrPostRegions]])
      .put(setDeliveryLoading(true))
      .put(setUkrPostRegions(fakeUkrPostRegions.data.getUkrPoshtaRegions))
      .put(setDeliveryLoading(false))
      .run();
  });
  it.skip('fetch districts from UkrPoshta', () => {
    expectSaga(handleUkrPostDistricts)
      .provide([[matchers.call.fn(getUkrPostDistricts), fakeUkrPostDistricts]])
      .put(setDeliveryLoading(true))
      .put(setUkrPostDistricts(fakeUkrPostDistricts.data.getUkrPoshtaDistrictsByRegionId))
      .put(setDeliveryLoading(false))
      .run();
  });

  it.skip('fetch cities from UkrPoshta', () => {
    expectSaga(handleUkrPostCities)
      .provide([[matchers.call.fn(getUkrPostCities), fakeUkrPostCities]])
      .put(setDeliveryLoading(true))
      .put(setUkrPostCities(fakeUkrPostCities.data.getUkrPoshtaCitiesByDistrictId))
      .put(setDeliveryLoading(false))
      .run();
  });
  it.skip('fetch post offices from UkrPoshta', () => {
    expectSaga(handleUkrPostPostOffices)
      .provide([[matchers.call.fn(getUkrPostPostOffices), fakeUkrPostOffices]])
      .put(setDeliveryLoading(true))
      .put(setUkrPostPostOffices(fakeUkrPostOffices.data.getUkrPoshtaPostofficesCityId))
      .put(setDeliveryLoading(false))
      .run();
  });
});
