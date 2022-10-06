import React, { useContext } from 'react';

import { CurrencyContext } from '../context/currency-context';
import { HryvniaIcon, DollarIcon } from '../images/profile-icons';

export const useCurrency = () => {
  const { currency: currentCurrency, currencies } = useContext(CurrencyContext);

  const uah = currentCurrency === 'UAH';

  const getPriceWithCurrency = (value, exchangeRate) => {
    const fixedRateExchange = uah && exchangeRate;

    return Math.round(value * (fixedRateExchange || currencies[currentCurrency].exchangeRate));
  };

  const getCurrencySign = () => (uah ? <HryvniaIcon /> : <DollarIcon />);

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
