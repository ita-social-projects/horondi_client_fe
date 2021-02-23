import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setDeliveryLoading,
  setNovaPoshtaPrices,
  setFondyData,
  setUkrPostRegions,
  setUkrPostDistricts,
  setUkrPostCities,
  getUkrPostPostOffices,
  setUkrPostPostOffices,
  getUkrPostDistricts
} from './checkout.actions';
import {
  getNovaPoshtaCities,
  getNovaPoshtaPrices,
  getNovaPoshtaWarehouses,
  getUkrPoshtaCitiesByDistrictId,
  getUkrPoshtaDistrictsByRegionId,
  getUkrPoshtaPostOfficesByCityId,
  getUkrPostRegions
} from './checkout.operations';
import {
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  GET_NOVAPOSHTA_PRICES,
  GET_FONDY_DATA,
  GET_UKRPOST_REGIONS,
  GET_UKRPOST_DISTRICTS,
  GET_UKRPOST_CITIES,
  GET_UKRPOST_POSTOFFICES
} from './checkout.types';
import getItems from '../../utils/client';
import { setError } from '../error/error.actions';
import routes from '../../configs/routes';

function* handleErrors({ message }) {
  yield put(setError(message));
  yield put(push(routes.pathToErrorPage));
}

export function* handleFondyUrl({ payload }) {
  try {
    const dataFromFondy = yield call(
      getItems,
      `query{
              getPaymentCheckout(data: {
                orderId: "${payload.orderID}",
                orderDesc: "${payload.orderID}",
                currency: "UAH",
                amount: ${payload.amount}
              }){
                paymentId
                checkoutUrl
              }
            }`
    );
    yield put(setFondyData(dataFromFondy.data.getPaymentCheckout));
  } catch (e) {
    yield call(handleErrors, e);
  }
}

export function* handleNovaPoshtaPrice({ payload }) {
  try {
    yield put(setDeliveryLoading(true));
    const price = yield call(
      getItems,
      getNovaPoshtaPrices(payload.cityRecipient, payload.weight, payload.cost, payload.serviceType)
    );
    yield put(setNovaPoshtaPrices(...price));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleNovaPoshtaCities({ payload }) {
  try {
    yield put(setDeliveryLoading(true));

    const cities = yield call(getNovaPoshtaCities, payload);

    yield put(setNovaPoshtaCities(cities));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleNovaPoshtaWarehouse({ payload }) {
  try {
    yield put(setDeliveryLoading(true));

    const warehouses = yield call(getNovaPoshtaWarehouses, payload);

    yield put(setNovaPoshtaWarehouse(warehouses));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleUkrPostRegions() {
  try {
    yield put(setDeliveryLoading(true));

    const regions = yield call(getUkrPostRegions);

    yield put(setUkrPostRegions(regions));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleUkrPostDistricts({ payload }) {
  try {
    yield put(setDeliveryLoading(true));

    const districts = yield call(getUkrPoshtaDistrictsByRegionId, payload);

    yield put(setUkrPostDistricts(districts));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleUkrPostCities({ payload }) {
  try {
    yield put(setDeliveryLoading(true));

    const cities = yield call(getUkrPoshtaCitiesByDistrictId, payload);

    yield put(setUkrPostCities(cities));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleUkrPostPostOffices({ payload }) {
  try {
    yield put(setDeliveryLoading(true));

    const offices = yield call(getUkrPoshtaPostOfficesByCityId, payload);

    yield put(setUkrPostPostOffices(offices));
    yield put(setDeliveryLoading(false));
  } catch (e) {
    yield put(setDeliveryLoading(false));
    yield call(handleErrors, e);
  }
}

export default function* checkoutSaga() {
  yield takeEvery(GET_NOVAPOSHTA_CITIES, handleNovaPoshtaCities);
  yield takeEvery(GET_NOVAPOSHTA_WAREHOUSES, handleNovaPoshtaWarehouse);
  yield takeEvery(GET_NOVAPOSHTA_PRICES, handleNovaPoshtaPrice);
  yield takeEvery(GET_FONDY_DATA, handleFondyUrl);
  yield takeEvery(GET_UKRPOST_REGIONS, handleUkrPostRegions);
  yield takeEvery(GET_UKRPOST_DISTRICTS, handleUkrPostDistricts);
  yield takeEvery(GET_UKRPOST_CITIES, handleUkrPostCities);
  yield takeEvery(GET_UKRPOST_POSTOFFICES, handleUkrPostPostOffices);
}
