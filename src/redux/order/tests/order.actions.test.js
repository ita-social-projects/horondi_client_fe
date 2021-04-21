import { orderExample, paidOrder } from './order.variables';
import {
  SET_LOADING,
  SET_ORDER,
  SET_IS_ORDER_CREATED,
  GET_ORDER,
  ADD_ORDER,
  GET_FONDY_DATA,
  GET_PAID_ORDER,
  ADD_PAYMENT_METHOD,
  SET_PAID_ORDER_LOADING
} from '../order.types';
import {
  setOrder,
  addOrder,
  setOrderLoading,
  setIsOrderCreated,
  getOrder,
  getPaidOrder,
  getFondyData,
  addPaymentMethod,
  setPaidOderLoading
} from '../order.actions';

describe('Orders actions test', () => {
  it('should set all orders to payload property', () => {
    const result = {
      type: SET_ORDER,
      payload: orderExample
    };

    expect(setOrder(orderExample)).toEqual(result);
  });

  it('should return all orders', () => {
    const result = {
      type: GET_ORDER
    };

    expect(getOrder()).toEqual(result);
  });

  it('should add order', () => {
    const result = {
      type: ADD_ORDER,
      payload: orderExample
    };

    expect(addOrder(orderExample)).toEqual(result);
  });

  it('should set that order created', () => {
    const result = {
      type: SET_IS_ORDER_CREATED,
      payload: true
    };

    expect(setIsOrderCreated(true)).toEqual(result);
  });

  it('should add payment method', () => {
    const result = {
      type: ADD_PAYMENT_METHOD,
      payload: orderExample.paymentMethod
    };

    expect(addPaymentMethod(orderExample.paymentMethod)).toEqual(result);
  });

  it('should return paid order', () => {
    const result = {
      type: GET_PAID_ORDER,
      payload: paidOrder
    };

    expect(getPaidOrder(paidOrder)).toEqual(result);
  });

  it('should return fondy data', () => {
    const result = {
      type: GET_FONDY_DATA,
      payload: orderExample.paymentMethod
    };

    expect(getFondyData(orderExample.paymentMethod)).toEqual(result);
  });
});

describe('loading action', () => {
  test('should return order loading = true', () => {
    expect(setOrderLoading(true)).toEqual({
      type: SET_LOADING,
      payload: true
    });
  });

  test('should return order loading = false', () => {
    expect(setOrderLoading(false)).toEqual({
      type: SET_LOADING,
      payload: false
    });
  });

  test('should return paid order loading = true', () => {
    expect(setPaidOderLoading(true)).toEqual({
      type: SET_PAID_ORDER_LOADING,
      payload: true
    });
  });

  test('should return paid order loading = false', () => {
    expect(setPaidOderLoading(false)).toEqual({
      type: SET_PAID_ORDER_LOADING,
      payload: false
    });
  });
});
