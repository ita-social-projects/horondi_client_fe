import React, { useContext } from 'react';

import { CurrencyContext } from '../../context/currency-context';
import { DollarIcon, HryvniaIcon } from '../../images/profile-icons';

const CurrencySign = () => {
  const { currency } = useContext(CurrencyContext);

  switch (currency) {
    case 'USD':
      return <DollarIcon />;
    default:
      return <HryvniaIcon />;
  }
};

export default CurrencySign;
