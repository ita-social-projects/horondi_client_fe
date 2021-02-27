import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setError } from '../error/error.actions';
import { setOrderLoading, setIsOrderCreated, setOrder } from './order.actions';
import { addOrder } from './order.operations';
import { ADD_ORDER, GET_ORDER } from './order.types';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { order } from '../../utils/order';
import { setLoading } from '../news/news.actions';
import routes from '../../configs/routes';

export function* handleAddOrder({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload);
    setToLocalStorage(order, newOrder);

    yield put(setOrder(newOrder));
    yield put(setIsOrderCreated(true));
    yield put(setOrderLoading(false));
  } catch (e) {
    yield call(handleNewsError, e);
  }
}

export function* handleGetCreatedOrder() {
  const orderData = getFromLocalStorage(order);

  yield put(setOrder(orderData));
}

export function* handleNewsError({ message }) {
  yield put(setLoading(false));
  yield put(setError(message));
  yield put(push(routes.pathToErrorPage));
}

export default function* orderSaga() {
  yield takeEvery(ADD_ORDER, handleAddOrder);
  yield takeEvery(GET_ORDER, handleGetCreatedOrder);
}
