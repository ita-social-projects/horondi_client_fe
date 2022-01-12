import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { useStyles } from './currency.styles';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { changeCurrency } from '../../redux/currency/currency.actions';
import { CURRENCIES_LIST, DEFAULT_CURRENCY, CURRENCY } from '../../configs';
import { HRYVNIA_UNICODE, DOLLAR_UNICODE } from './constants';

const currencyInLocalStorage = getFromLocalStorage(CURRENCY) || DEFAULT_CURRENCY;

const CurrencyComponent = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  useEffect(() => {
    dispatch(changeCurrency(currencyInLocalStorage));
  }, [dispatch]);
  const handleChange = (e) => {
    const targetValue = +e.target.value;
    if (targetValue !== undefined) {
      setToLocalStorage('currency', targetValue);
      dispatch(changeCurrency(targetValue));
    }
  };
  const mappedCurrencies = CURRENCIES_LIST.map(({ currency: curr, value }) => (
    <Button onClick={handleChange} data-cy={`${CURRENCY} ${value + 1}`} key={value} value={value}>
      {curr === 'UAH' ? HRYVNIA_UNICODE : DOLLAR_UNICODE}
    </Button>
  ));
  return (
    <div data-cy='currency' className={styles.root}>
      <ButtonGroup>{mappedCurrencies}</ButtonGroup>
    </div>
  );
};

export default CurrencyComponent;
