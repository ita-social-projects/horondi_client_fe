import React, { useState, createContext } from 'react';
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

  const { error } = useQuery(getAllCurrencies, {
    onCompleted: (data) => setCurrencies({ ...data.getAllCurrencies[0].convertOptions })
  });

  if (error) return errorOrLoadingHandler(error);

  const currencyHandler = (event) => {
    const newCurrencyName = event.target.value;

    return setCurrentCurrency(newCurrencyName);
  };

  return (
    <CurrencyContext.Provider value={{ currency: currentCurrency, currencyHandler, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
