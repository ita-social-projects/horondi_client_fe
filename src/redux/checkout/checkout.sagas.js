import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setNovaPoshtaStreets,
  setLoading,
  setNovaPoshtaPrices,
  setFondyData
} from './checkout.actions';
import {
  getNovaPoshtaCities,
  getNovaPoshtaPrices,
  getNovaPoshtaStreets,
  getNovaPoshtaWarehouses
} from './checkout.operations';
import {
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  GET_NOVAPOSHTA_STREETS,
  GET_NOVAPOSHTA_PRICES,
  GET_FONDY_DATA
} from './checkout.types';
import getItems from '../../utils/client';
import { setError } from '../error/error.actions';

function* handleErrors({ message }) {
  yield put(setError(message));
  yield put(push('/error-page'));
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
    yield put(setLoading(true));
    const price = yield call(
      getItems,
      getNovaPoshtaPrices(
        payload.cityRecipient,
        payload.weight,
        payload.cost,
        payload.serviceType
      )
    );
    yield put(setNovaPoshtaPrices(...price));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleNovaPoshtaStreets({ payload }) {
  try {
    yield put(setLoading(true));
    const streets = yield call(
      getItems,
      getNovaPoshtaStreets(payload.ref, payload.street)
    );
    yield put(setNovaPoshtaStreets(streets));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleNovaPoshtaCities({ payload }) {
  try {
    yield put(setLoading(true));
    const cities = yield call(getItems, getNovaPoshtaCities(payload));
    yield put(setNovaPoshtaCities(cities));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

export function* handleNovaPoshtaWarehouse({ payload }) {
  try {
    yield put(setLoading(true));
    const warehouses = yield call(getItems, getNovaPoshtaWarehouses(payload));
    yield put(setNovaPoshtaWarehouse(warehouses));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));

    yield call(handleErrors, e);
  }
}

export default function* checkoutSaga() {
  yield takeEvery(GET_NOVAPOSHTA_CITIES, handleNovaPoshtaCities);
  yield takeEvery(GET_NOVAPOSHTA_WAREHOUSES, handleNovaPoshtaWarehouse);
  yield takeEvery(GET_NOVAPOSHTA_STREETS, handleNovaPoshtaStreets);
  yield takeEvery(GET_NOVAPOSHTA_PRICES, handleNovaPoshtaPrice);
  yield takeEvery(GET_FONDY_DATA, handleFondyUrl);
}
