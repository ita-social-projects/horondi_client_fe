import React, { useContext } from 'react';

import { CurrencyContext } from '../context/currency-context';
import { HryvniaIcon, DollarIcon } from '../images/profile-icons';

export const useCurrency = () => {
  const { currency: currentCurrency, currencies } = useContext(CurrencyContext);

  const getPriceWithCurrency = (value) =>
    Math.round(value * currencies[currentCurrency].exchangeRate);

  const getCurrencySign = () => {
    if (currentCurrency === 'USD') {
      return <DollarIcon />;
    }
    return <HryvniaIcon />;
  };

  const getBaseCurrencyPrice = (value) =>
    Math.round(value / currencies[currentCurrency].exchangeRate);

  const getCertificatePriceInUSD = (value) => Math.round(value / currencies.UAH.exchangeRate);

  return {
    getPriceWithCurrency,
    getCurrencySign,
    getBaseCurrencyPrice,
    getCertificatePriceInUSD
  };
};
