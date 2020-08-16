/* eslint-disable no-undef */
import currencyReducer, { initialState } from '../currency.reducer';
import { changeCurrency } from '../currency.actions';
import { CHANGE_CURRENCY } from '../currency.types';

describe('test currency reducer', () => {
  test('should return default state', () => {
    expect(currencyReducer()).toMatchSnapshot();
    expect(currencyReducer()).toEqual({
      currency: 0
    });
  });

  test('should change currency', () => {
    expect(currencyReducer(initialState, changeCurrency(1))).toMatchSnapshot();
    expect(currencyReducer(initialState, changeCurrency(1))).toEqual({
      currency: 1
    });
  });
});
