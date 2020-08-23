import { CHANGE_CURRENCY } from './currency.types';

const changeCurrency = (value) => ({
  type: CHANGE_CURRENCY,
  payload: value
});

export { changeCurrency };
