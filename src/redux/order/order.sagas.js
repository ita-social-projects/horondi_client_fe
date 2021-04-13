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
import { CURRENCY } from '../../const/currency';
import { ORDER_PAYMENT_STATUS } from '../../utils/thank-you';
import { USER_IS_BLOCKED, USER_TOKENS } from '../../configs';
import { deleteUserDataFromStore } from '../user/user.actions';

export function* handleOrderError({ message }) {
  yield put(setOrderLoading(false));
  yield put(setError(message));
  yield put(push(routes.pathToErrorPage));
}

export function* handleIsUserBlockedChecker(item) {
  if (item?.message === USER_IS_BLOCKED) {
    yield put(deleteUserDataFromStore());
    yield put(push(routes.pathToLogin));
    setToLocalStorage(USER_TOKENS.ACCES_TOKEN, null);
  }
}

export function* handleAddOrder({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload);

    setToLocalStorage(orderDataToLS.order, newOrder);
    yield put(setOrder(newOrder));
    yield put(setIsOrderCreated(true));
    yield put(setOrderLoading(false));
    yield call(handleIsUserBlockedChecker, newOrder);
  } catch (e) {
    yield call(handleOrderError, e);
    yield put(push(routes.pathToMain));
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

    yield call(handleIsUserBlockedChecker, newOrder);

    const orderWithCheckoutUrl = yield call(
      getPaymentCheckout,
      newOrder._id,
      payload.currency,
      payload.currency === CURRENCY.UAH
        ? (newOrder.totalPriceToPay[0].value * 100).toString()
        : (newOrder.totalPriceToPay[1].value * 100).toString()
    );

    setToLocalStorage(orderDataToLS.order, orderWithCheckoutUrl);

    yield put(setOrder(orderWithCheckoutUrl));

    if (orderWithCheckoutUrl.paymentUrl) {
      window.open(orderWithCheckoutUrl.paymentUrl);
    }
    yield put(push(`${routes.pathToThanks}/${orderWithCheckoutUrl.orderNumber}`));
    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function* handleSetPaymentMethod({ payload }) {
  yield setToLocalStorage(orderDataToLS.paymentMethod, payload);
}

export function* getOrderTillSuccess(payload) {
  const paidOrder = yield call(getOrderByPaidOrderNumber, payload);

  yield call(handleIsUserBlockedChecker, paidOrder);

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

export default function* orderSaga() {
  yield takeEvery(ADD_ORDER, handleAddOrder);
  yield takeEvery(GET_ORDER, handleGetCreatedOrder);
  yield takeEvery(GET_FONDY_DATA, handleGetFondyUrl);
  yield takeEvery(ADD_PAYMENT_METHOD, handleSetPaymentMethod);
  yield takeEvery(GET_PAID_ORDER, handleGetOrderByPaidOrderNumber);
}
