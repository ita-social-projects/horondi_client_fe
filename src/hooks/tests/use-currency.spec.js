import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { CurrencyContext } from '../../context/currency-context';
import { HryvniaIcon } from '../../images/profile-icons';
import { useCurrency } from '../use-currency';

const mockedValues = {
  currency: 'UAH',
  currencies: {
    UAH: {
      name: 'UAH',
      exchangeRate: 30
    },
    USD: {
      name: 'USD',
      exchangeRate: 1
    }
  }
};

const wrapper = ({ children }) => <CurrencyContext.Provider value={mockedValues}>{children}</CurrencyContext.Provider>;

describe('use-currency tests', () => {
  const { result } = renderHook(() => useCurrency(), { wrapper });

  it('should return currency sign', () => {
    expect(result.current.getCurrencySign()).toStrictEqual(<HryvniaIcon />);
  });

  it('should return value with currency', () => {
    expect(result.current.getPriceWithCurrency(10)).toEqual(300);
  });

  it('should return base price', () => {
    expect(result.current.getBaseCurrencyPrice(900)).toEqual(30);
  });
});
