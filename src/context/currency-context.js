import React, { useState, createContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getAllCurrencies } from './constants';

const initialValues = {
  currency: {
    name: 'USD',
    exchangeRate: 1
  },
  currencyHandler: () => {}
};

export const CurrencyContext = createContext(initialValues);

const CurrencyContextProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState({
    name: 'USD',
    exchangeRate: 1
  });

  const { data } = useQuery(getAllCurrencies);

  const currencyHandler = (event) => {
    const newCurrencyName = event.target.value;
    const newCurrency = currencies.find((el) => el.name === newCurrencyName);

    if (newCurrency) {
      return setCurrentCurrency(newCurrency);
    }
  };

  useEffect(() => {
    if (data) {
      setCurrencies([...data.getAllCurrencies[0].convertOptions]);
    }
  }, [data]);

  return (
    <CurrencyContext.Provider value={{ currency: currentCurrency, currencyHandler }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
