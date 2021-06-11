import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';

export const getCurrencySign = (currency = 0) => (currency ? faDollarSign : faHryvnia);
