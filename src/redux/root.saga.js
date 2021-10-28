import { all } from 'redux-saga/effects';
import cartSaga from './cart/cart.sagas';
import userSaga from './user/user.sagas';
import commentsSaga from './comments/comments.sagas';
import checkoutSaga from './checkout/checkout.sagas';
import chatSaga from './chat/chat.sagas';
import headerLinksSaga from './header-links/header-links.sagas';
import patternSaga from './pattern/pattern.sagas';
import toastSaga from './toast/toast.sagas';
import { constructorSaga } from './images-constructor/constructor.sagas';
import orderSaga from './order/order.sagas';

export function* rootSaga() {
  yield all([
    userSaga(),
    toastSaga(),
    cartSaga(),
    commentsSaga(),
    checkoutSaga(),
    chatSaga(),
    headerLinksSaga(),
    patternSaga(),
    constructorSaga(),
    orderSaga()
  ]);
}
