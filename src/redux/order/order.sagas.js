import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setError } from '../error/error.actions';
import { setOrderLoading, setIsOrderCreated, setOrder } from './order.actions';
import { addOrder, getOrderByPaidOrderNumber, getPaymentCheckout } from './order.operations';
import {
  ADD_ORDER,
  GET_ORDER,
  RESET_ORDER,
  GET_FONDY_DATA,
  ADD_PAYMENT_METHOD,
  GET_PAID_ORDER
} from './order.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { orderDataToLS } from '../../utils/order';
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
    setToLocalStorage(orderDataToLS.order, newOrder);

    yield put(setOrder(newOrder));
    yield put(setIsOrderCreated(true));
    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function* handleGetCreatedOrder() {
  yield put(setOrderLoading(true));

  const orderData = getFromLocalStorage(orderDataToLS.order);

  yield put(setOrder(orderData));
  yield put(setOrderLoading(false));
}

export function* handleOrderReset() {
  setToLocalStorage(orderDataToLS.order, null);
  const cart = getFromLocalStorage(orderDataToLS.order);

  yield put(setOrder(cart));
}

export function* handleGetFondyUrl({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload.order);
    yield call(getPaymentCheckout, newOrder._id, payload.currency, payload.amount);

    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function* handleSetPaymentMethod({ payload }) {
  yield setToLocalStorage(orderDataToLS.paymentMethod, payload);
}

export function* handleGetOrderByPaidOrderNumber({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const paidOrder = yield call(getOrderByPaidOrderNumber, payload);

    setToLocalStorage(orderDataToLS.order, paidOrder);

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
  yield takeEvery(ADD_PAYMENT_METHOD, handleSetPaymentMethod);
  yield takeEvery(GET_PAID_ORDER, handleGetOrderByPaidOrderNumber);
}
