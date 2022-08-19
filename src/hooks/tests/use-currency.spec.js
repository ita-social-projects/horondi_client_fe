import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
import CurrencyContextProvider from '../../context/currency-context';
import { HryvniaIcon } from '../../images/profile-icons';
import { useCurrency } from '../use-currency';
import { mockedCurrencies } from '../../tests/unit/containers/currency/currency.variables';

const wrapper = ({ children }) => (
  <MockedProvider mocks={mockedCurrencies} addTypename={false}>
    <CurrencyContextProvider>{children}</CurrencyContextProvider>
  </MockedProvider>
);

describe('use-currency tests', () => {
  let renderedHook;

  beforeAll(async () => {
    renderedHook = renderHook(() => useCurrency(), { wrapper });

    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it('should return currency sign', () => {
    expect(renderedHook.result.current.getCurrencySign()).toStrictEqual(<HryvniaIcon />);
  });

  it('should return value with currency', () => {
    expect(renderedHook.result.current.getPriceWithCurrency(10)).toEqual(300);
  });

  it('should return base price', () => {
    expect(renderedHook.result.current.getBaseCurrencyPrice(900)).toEqual(30);
  });

  it('should return price in usd', () => {
    expect(renderedHook.result.current.getPriceInDollars(1000)).toEqual(33);
  });
});
