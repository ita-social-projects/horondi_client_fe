import React, { useCallback, useContext, useMemo } from 'react';

import { CurrencyContext } from '../context/currency-context';
import { HryvniaIcon, DollarIcon } from '../images/profile-icons';

export const useCurrency = () => {
  const { currency: currentCurrency, currencies } = useContext(CurrencyContext);

  const getPriceWithCurrency = useCallback(
    (value, exchangeRate) => {
      const fixedRateExchange = currentCurrency === 'UAH' && exchangeRate;
      return Math.round(value * (fixedRateExchange || currencies[currentCurrency].exchangeRate));
    },
    [currentCurrency, currencies]
  );

  const currencySign = useMemo(
    () => (currentCurrency === 'UAH' ? <HryvniaIcon /> : <DollarIcon />),
    [currentCurrency]
  );

  const getBaseCurrencyPrice = useCallback(
    (value) => Math.round(value / currencies[currentCurrency].exchangeRate),
    [currencies, currentCurrency]
  );

  const getCertificatePriceInUSD = useCallback(
    (value) => Math.round(value / currencies.UAH.exchangeRate),
    [currencies]
  );

  return {
    currencySign,
    getPriceWithCurrency,
    getBaseCurrencyPrice,
    getCertificatePriceInUSD
  };
};
