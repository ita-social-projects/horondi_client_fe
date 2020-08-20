import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/local-storage.service';
import { changeCurrency } from '../../redux/currency/currency.actions';
import { CURRENCIES_LIST } from '../../translations/currency.translation';
import Dropdown from '../../components/dropdown';
import useStyles from './currency.styles';

const currencyInLocalStorage = getFromLocalStorage('currency') || 0;

const Currency = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrency(currencyInLocalStorage));
  }, [dispatch]);

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
      setToLocalStorage('currency', targetValue);
      dispatch(changeCurrency(targetValue));
    }
  };
  const mappedCurrencies = CURRENCIES_LIST.map(({ currency, value }) => (
    <MenuItem id={`currency${value + 1}`} key={value} value={value}>
      {currency === 'UAH' ? '\u20b4' : '\u0024'}
    </MenuItem>
  ));
  return (
    <div id='currency'>
      <Dropdown
        styles={styles}
        mappedItems={mappedCurrencies}
        handler={handleChange}
        defaultValue={currencyInLocalStorage}
      />
    </div>
  );
};

export default Currency;
