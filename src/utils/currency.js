import React from 'react';
import { DollarIcon, HryvniaIcon } from '../images/profile-icons';

export const getCurrencySign = (currency = 0) => (currency ? <DollarIcon /> : <HryvniaIcon />);
