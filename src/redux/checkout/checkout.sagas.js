import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setDeliveryLoading,
  setUkrPostRegions,
  setUkrPostDistricts,
  setUkrPostCities,
  setUkrPostPostOffices
} from './checkout.actions';
import {
  getUkrPoshtaCitiesByDistrictId,
  getUkrPoshtaDistrictsByRegionId,
  getUkrPoshtaPostOfficesByCityId,
  getUkrPostRegions
} from './checkout.operations';
import {
  GET_UKRPOST_REGIONS,
  GET_UKRPOST_DISTRICTS,
  GET_UKRPOST_CITIES,
  GET_UKRPOST_POSTOFFICES
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

export function* handleUkrPostRegions() {
  try {
    yield put(setDeliveryLoading(true));

    const regions = yield call(getUkrPostRegions);

    yield put(setUkrPostRegions(regions));
    yield put(setDeliveryLoading(false));
  } catch (e) {
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
    yield call(handleErrors, e);
  }
}

export default function* checkoutSaga() {
  yield takeEvery(GET_UKRPOST_REGIONS, handleUkrPostRegions);
  yield takeEvery(GET_UKRPOST_DISTRICTS, handleUkrPostDistricts);
  yield takeEvery(GET_UKRPOST_CITIES, handleUkrPostCities);
  yield takeEvery(GET_UKRPOST_POSTOFFICES, handleUkrPostPostOffices);
}
