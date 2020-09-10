import { call, put, takeEvery } from 'redux-saga/effects';

import { push } from 'connected-react-router';
import { setNovaPoshtaCities } from './checkout.actions';
import { GET_NOVAPOSHTA_CITIES } from './checkout.types';
import getItems from '../../utils/client';
import { setError } from '../error/error.actions';

export function* handleCities({ payload }) {
  try {
    const cities = yield call(
      getItems,
      `query{
  getNovaPoshtaCities(city: "${payload}"){
    ...on NovaPoshtaCity {
      Description
      Ref
    } 
  ...on Error{
    message
    statusCode
    }
  }
}`
    );
    yield put(setNovaPoshtaCities(cities.data.getNovaPoshtaCities));
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* checkoutSaga() {
  yield takeEvery(GET_NOVAPOSHTA_CITIES, handleCities);
}

// export function* handleCitiesLoad({payload}) {
//   try {
//     const cities = yield call(
//       getItems,
//       `query{
//   getNovaPoshtaCities(city: "${payload}"){
//     ...on NovaPoshtaCity {
//       Description
//       Ref
//     }
//   ...on Error{
//     message
//     statusCode
//     }
//   }
// }`
//     );
//     yield put(setNovaPoshtaCities(cities.data.getNovaPoshtaCities));
//   } catch (e) {
//     yield put(setError({ e }));
//     yield put(push('/error-page'));
//   }
// }
//
// export default function* checkoutSaga() {
//   yield takeEvery(GET_NOVAPOSHTA_CITIES, handleCitiesLoad)
// }
