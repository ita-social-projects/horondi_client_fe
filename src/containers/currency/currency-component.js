import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, Select } from '@material-ui/core';
import { useStyles } from './currency.styles';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { changeCurrency } from '../../redux/currency/currency.actions';
import { CURRENCIES_LIST, DEFAULT_CURRENCY } from '../../configs';
import { HRYVNIA_UNICODE, DOLLAR_UNICODE } from './constants';

const currencyInLocalStorage = getFromLocalStorage('currency') || DEFAULT_CURRENCY;

const CurrencyComponent = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  useEffect(() => {
    dispatch(changeCurrency(currencyInLocalStorage));
  }, [dispatch]);
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
      setToLocalStorage('currency', targetValue);
      dispatch(changeCurrency(targetValue));
    }
  };
  const mappedCurrencies = CURRENCIES_LIST.map(({ currency: curr, value }) => (
    <MenuItem data-cy={`currency${value + 1}`} key={value} value={value} className={styles.item}>
      {curr === 'UAH' ? HRYVNIA_UNICODE : DOLLAR_UNICODE}
    </MenuItem>
  ));
  return (
    <div data-cy='currency ' className={styles.root}>
      <Select
        labelId='demo-simple-select-label'
        onChange={handleChange}
        defaultValue={currencyInLocalStorage}
        value={currency}
      >
        {mappedCurrencies}
      </Select>
    </div>
  );
};

export default CurrencyComponent;
