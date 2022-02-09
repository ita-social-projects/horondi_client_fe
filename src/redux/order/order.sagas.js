import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setError } from '../error/error.actions';
import { setOrderLoading, setIsOrderCreated, setOrder, setPaidOderLoading } from './order.actions';
import { addOrder, getOrderByPaidOrderNumber, getPaymentCheckout } from './order.operations';
import {
  ADD_ORDER,
  GET_ORDER,
  GET_FONDY_DATA,
  ADD_PAYMENT_METHOD,
  GET_PAID_ORDER
} from './order.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { orderDataToLS } from '../../utils/order';
import routes from '../../configs/routes';
import { USER_IS_BLOCKED, AUTH_ERRORS } from '../../configs';
import { ORDER_PAYMENT_STATUS } from '../../utils/thank-you';
import { handleUserError } from '../user/user.sagas';

const { pathToThanks, pathToErrorPage } = routes;

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

export function* handleGetFondyUrl({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload.order);

    const orderWithCheckoutUrl = yield call(
      getPaymentCheckout,
      newOrder._id,
      payload.currency,
      (payload.amount * 100).toString(),
      payload.language
    );

    setToLocalStorage(orderDataToLS.order, orderWithCheckoutUrl);

    yield put(setOrder(orderWithCheckoutUrl));

    if (orderWithCheckoutUrl.paymentUrl) {
      window.open(orderWithCheckoutUrl.paymentUrl);
    }
    yield put(push(`${pathToThanks}/${orderWithCheckoutUrl.orderNumber}`));
    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function handleSetPaymentMethod({ payload }) {
  setToLocalStorage(orderDataToLS.paymentMethod, payload);
}

export function* getOrderTillSuccess(payload) {
  const paidOrder = yield call(getOrderByPaidOrderNumber, payload);

  if (paidOrder.paymentStatus !== ORDER_PAYMENT_STATUS.PAID) {
    getOrderTillSuccess();
  } else {
    setToLocalStorage(orderDataToLS.order, paidOrder);

    yield put(setOrder(paidOrder));
    yield put(setPaidOderLoading(false));
  }
}

export function* handleGetOrderByPaidOrderNumber({ payload }) {
  try {
    yield put(setPaidOderLoading(true));

    yield call(getOrderTillSuccess, payload);
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function* handleOrderError(e) {
  if (e.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID || e.message === USER_IS_BLOCKED) {
    yield call(handleUserError, e);
  } else {
    yield put(setOrderLoading(false));
    yield put(setError(e.message));
    yield put(push(pathToErrorPage));
  }
}

export default function* orderSaga() {
  yield takeEvery(ADD_ORDER, handleAddOrder);
  yield takeEvery(GET_ORDER, handleGetCreatedOrder);
  yield takeEvery(GET_FONDY_DATA, handleGetFondyUrl);
  yield takeEvery(ADD_PAYMENT_METHOD, handleSetPaymentMethod);
  yield takeEvery(GET_PAID_ORDER, handleGetOrderByPaidOrderNumber);
}
