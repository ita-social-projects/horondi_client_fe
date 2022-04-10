import React from 'react';
import { DollarIcon, HryvniaIcon } from '../images/profile-icons';

export const getCurrencySign = (currency = 'UAH') =>
  currency === 'USD' ? <DollarIcon /> : <HryvniaIcon />;
