import { CHANGE_CURRENCY } from './currency.types';

const changeCurrency = (value = 0) => ({
  type: CHANGE_CURRENCY,
  payload: value
});

export { changeCurrency };
