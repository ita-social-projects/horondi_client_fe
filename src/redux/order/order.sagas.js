import { call, put, takeEvery } from "redux-saga/effects";

import { setError } from "../error/error.actions";
import { setOrderLoading, setIsOrderCreated, setOrder } from "./order.actions";
import { addOrder } from "./order.operations";
import { SET_ORDER } from "./order.types";

export function* handleAddOrder({ payload }) {
  try {
    yield put(setOrderLoading(true));

    const newOrder = yield call(addOrder, payload);
    yield put(setOrder(newOrder));
    yield put(setIsOrderCreated(true));
    yield put(setOrderLoading(false));

  } catch (e) {

    yield put(setError(e.message));
    yield put(setOrderLoading(false));
  }
}

export default function* orderSaga() {
  yield takeEvery(SET_ORDER, handleAddOrder);
}
