import React, { useState, createContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getAllCurrencies } from './constants';
import errorOrLoadingHandler from '../utils/errorOrLoadingHandler';

const initialValues = {
  currency: 'UAH',
  currencyHandler: () => {},
  currencies: {}
};

export const CurrencyContext = createContext(initialValues);

const CurrencyContextProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState({});
  const [currentCurrency, setCurrentCurrency] = useState('UAH');

  const { error, loading, data } = useQuery(getAllCurrencies);

  useEffect(() => {
    if (data) {
      setCurrencies({ ...data.getAllCurrencies[0].convertOptions });
    }
  }, [data]);

  const currencyHandler = (event, newCurrencyName) => {
    if (newCurrencyName !== null) {
      return setCurrentCurrency(newCurrencyName);
    }
  };

  if (error || loading) return errorOrLoadingHandler(error, loading);

  return (
    <CurrencyContext.Provider value={{ currency: currentCurrency, currencyHandler, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
