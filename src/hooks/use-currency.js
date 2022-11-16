import React, { useContext, useMemo } from 'react';

import { CurrencyContext } from '../context/currency-context';
import { HryvniaIcon, DollarIcon } from '../images/profile-icons';

export const useCurrency = () => {
  const { currency: currentCurrency, currencies } = useContext(CurrencyContext);

  const getPriceWithCurrency = (value, exchangeRate) => {
    const fixedRateExchange = currentCurrency === 'UAH' && exchangeRate;

    return Math.round(value * (fixedRateExchange || currencies[currentCurrency].exchangeRate));
  };

  const currencySign = useMemo(
    () => (currentCurrency === 'UAH' ? <HryvniaIcon /> : <DollarIcon />),
    [currentCurrency]
  );

  const getBaseCurrencyPrice = (value) =>
    Math.round(value / currencies[currentCurrency].exchangeRate);

  const getCertificatePriceInUSD = (value) => Math.round(value / currencies.UAH.exchangeRate);

  return {
    currencySign,
    getPriceWithCurrency,
    getBaseCurrencyPrice,
    getCertificatePriceInUSD
  };
};
