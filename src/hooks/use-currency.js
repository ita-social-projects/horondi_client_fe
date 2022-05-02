import React, { useContext } from 'react';

import { CurrencyContext } from '../context/currency-context';
import { HryvniaIcon, DollarIcon } from '../images/profile-icons';

export const useCurrency = () => {
  const { currency: currentCurrency, currencies } = useContext(CurrencyContext);

  const getPriceWithCurrency = (value) =>
    Math.round(value * currencies[currentCurrency].exchangeRate);

  const getCurrencySign = () => {
    switch (currentCurrency) {
      case 'USD':
        return <DollarIcon />;
      default:
        return <HryvniaIcon />;
    }
  };

  return {
    getPriceWithCurrency,
    getCurrencySign
  };
};
