import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { getAllCurrencies } from './constants';
import errorOrLoadingHandler from '../utils/errorOrLoadingHandler';

const initialValues = {
  currency: 'UAH',
  currencyHandler: () => {},
  getPriceWithCurrency: () => {},
  currencies: {}
};

export const CurrencyContext = createContext(initialValues);

const CurrencyContextProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState({});
  const [currentCurrency, setCurrentCurrency] = useState('UAH');

  const { error } = useQuery(getAllCurrencies, {
    onCompleted: (data) => setCurrencies({ ...data.getAllCurrencies[0].convertOptions })
  });

  if (error) return errorOrLoadingHandler(error);

  const currencyHandler = (event) => {
    const newCurrencyName = event.target.value;
    const newCurrency = currencies[newCurrencyName].name;

    return setCurrentCurrency(newCurrency);
  };

  const getPriceWithCurrency = (value) => Math.round(value * currencies[currentCurrency].exchangeRate);

  return (
    <CurrencyContext.Provider
      value={{ currency: currentCurrency, currencyHandler, getPriceWithCurrency, currencies }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
