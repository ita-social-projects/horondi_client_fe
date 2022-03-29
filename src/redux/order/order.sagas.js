import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setError } from '../error/error.actions';
import { setOrderLoading, setIsOrderCreated, setOrder } from './order.actions';
import { addOrder, getPaymentCheckout } from './order.operations';
import { ADD_ORDER, GET_ORDER, GET_FONDY_DATA, ADD_PAYMENT_METHOD } from './order.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { orderDataToLS } from '../../utils/order';
import routes from '../../configs/routes';
import { USER_IS_BLOCKED, AUTH_ERRORS } from '../../configs';
import { handleUserError } from '../user/user.sagas';

const { pathToThanks, pathToErrorPage, pathToAllProducts } = routes;

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
      (payload.amount * 100).toString()
    );

    setToLocalStorage(orderDataToLS.order, orderWithCheckoutUrl);

    yield put(setOrder(orderWithCheckoutUrl));

    if (orderWithCheckoutUrl.paymentUrl) {
      window.open(orderWithCheckoutUrl.paymentUrl);
    }
    yield put(push(`${pathToAllProducts}`));

    window.open(
      `${process.env.REACT_APP_ROOT_PATH}${pathToThanks}/${orderWithCheckoutUrl.orderNumber}`
    );

    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleOrderError, e);
  }
}

export function handleSetPaymentMethod({ payload }) {
  setToLocalStorage(orderDataToLS.paymentMethod, payload);
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
}
