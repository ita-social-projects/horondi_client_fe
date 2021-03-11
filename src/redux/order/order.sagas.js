import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setError } from '../error/error.actions';
import { setOrderLoading, setIsOrderCreated, setOrder } from './order.actions';
import { addOrder, getPaymentCheckout } from './order.operations';
import { ADD_ORDER, GET_ORDER, RESET_ORDER, GET_FONDY_DATA } from './order.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { order } from '../../utils/order';
import routes from '../../configs/routes';

export function* handleOrderError({ message }) {
  yield put(setOrderLoading(false));
  yield put(setError(message));
  yield put(push(routes.pathToErrorPage));
}

export function* handleAddOrder({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload);
    setToLocalStorage(order, newOrder);

    yield put(setOrder(newOrder));
    yield put(setIsOrderCreated(true));
    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function* handleGetCreatedOrder() {
  yield put(setOrderLoading(true));

  const orderData = getFromLocalStorage(order);

  yield put(setOrder(orderData));
  yield put(setOrderLoading(false));
}

export function* handleOrderReset() {
  setToLocalStorage(order, null);
  const cart = getFromLocalStorage(order);

  yield put(setOrder(cart));
}

export function* handleGetFondyUrl({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload.order);
    const result = yield call(getPaymentCheckout, newOrder._id, payload.currency, payload.amount);
    console.log(result);

    setToLocalStorage(order, result);

    yield put(setOrder(result));
    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export default function* orderSaga() {
  yield takeEvery(ADD_ORDER, handleAddOrder);
  yield takeEvery(GET_ORDER, handleGetCreatedOrder);
  yield takeEvery(RESET_ORDER, handleOrderReset);
  yield takeEvery(GET_FONDY_DATA, handleGetFondyUrl);
}
