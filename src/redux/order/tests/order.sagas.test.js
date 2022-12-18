import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { push } from 'connected-react-router';
import { setIsOrderCreated, setOrder, setOrderLoading } from '../order.actions';
import {
  handleAddOrder,
  handleGetCreatedOrder,
  handleGetFondyUrl,
  handleOrderError
} from '../order.sagas';
import { orderExample, paidOrder, payload, message } from './order.variables';
import { setToLocalStorage, getFromLocalStorage } from '../../../services/local-storage.service';
import { setError } from '../../error/error.actions';
import { getPaymentCheckout, addOrder } from '../order.operations';
import routes from '../../../configs/routes';

const { pathToErrorPage, pathToAllProducts } = routes;

describe('sagas test', () => {
  beforeEach(() => {
    setToLocalStorage('order', orderExample);
  });

  it('fetch adding order', () => {
    expectSaga(handleAddOrder, orderExample)
      .provide([[matchers.call.fn(addOrder), orderExample]])
      .put(setOrderLoading(true))
      .put(setOrder(orderExample))
      .put(setIsOrderCreated(true))
      .put(setOrderLoading(false))
      .run();
  });

  it('fetching order error', () => {
    expectSaga(handleOrderError, { message })
      .put(setOrderLoading(false))
      .put(setError(message))
      .put(push(pathToErrorPage))
      .run();
  });

  it('fetching created order from local storage and set to redux store', () => {
    expectSaga(handleGetCreatedOrder)
      .provide([[matchers.call.fn(getFromLocalStorage), orderExample]])
      .put(setOrderLoading(true))
      .put(setOrder(orderExample))
      .put(setOrderLoading(false))
      .run();
  });

  it('fetching getting fondy url', () => {
    expectSaga(handleGetFondyUrl, { payload })
      .provide([
        [matchers.call.fn(addOrder, payload.order), orderExample],
        [
          matchers.call.fn(getPaymentCheckout, orderExample._id, payload.currency, payload.amount),
          paidOrder
        ]
      ])
      .put(setOrderLoading(true))
      .put(setOrder(paidOrder))
      .put(push(`${pathToAllProducts}`))
      .put(setOrderLoading(false))
      .run();
  });
});
