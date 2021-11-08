import { all } from 'redux-saga/effects';
import cartSaga from './cart/cart.sagas';
import userSaga from './user/user.sagas';
import toastSaga from './toast/toast.sagas';
import { constructorSaga } from './images-constructor/constructor.sagas';
import orderSaga from './order/order.sagas';

export function* rootSaga() {
  yield all([userSaga(), toastSaga(), cartSaga(), constructorSaga(), orderSaga()]);
}
