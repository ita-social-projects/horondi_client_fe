import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setDeliveryLoading,
  setNovaPoshtaPrices
} from './checkout.actions';
import {
  getNovaPoshtaCities,
  getNovaPoshtaPrices,
  getNovaPoshtaWarehouses
} from './checkout.operations';
import {
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  GET_NOVAPOSHTA_PRICES
} from './checkout.types';
import { getItems } from '../../utils/client';
import { setError } from '../error/error.actions';
import routes from '../../const/routes';
import { AUTH_ERRORS } from '../../const/error-messages';
import { USER_IS_BLOCKED } from '../../configs';
import { handleUserError } from '../user/user.sagas';

const { pathToErrorPage } = routes;

function* handleErrors(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setDeliveryLoading(false));
    yield put(setError(e.message));
    yield put(push(pathToErrorPage));
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
    yield call(handleErrors, e);
  }
}

export default function* checkoutSaga() {
  yield takeEvery(GET_NOVAPOSHTA_CITIES, handleNovaPoshtaCities);
  yield takeEvery(GET_NOVAPOSHTA_WAREHOUSES, handleNovaPoshtaWarehouse);
  yield takeEvery(GET_NOVAPOSHTA_PRICES, handleNovaPoshtaPrice);
}
