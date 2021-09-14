import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import { useStyles } from './currency.styles';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { changeCurrency } from '../../redux/currency/currency.actions';
import { CURRENCIES_LIST, DEFAULT_CURRENCY, hryvniaUnicode, dollarUnicode } from '../../configs';
import Dropdown from '../../components/dropdown';

const currencyInLocalStorage = getFromLocalStorage('currency') || DEFAULT_CURRENCY;

const CurrencyComponent = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
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
  const mappedCurrencies = CURRENCIES_LIST.map(({ currency, value }) => (
    <MenuItem data-cy={`currency${value + 1}`} key={value} value={value}>
      {currency === 'UAH' ? hryvniaUnicode : dollarUnicode}
    </MenuItem>
  ));
  return (
    <div data-cy='currency ' className={styles.root}>
      <Dropdown
        mappedItems={mappedCurrencies}
        handler={handleChange}
        defaultValue={currencyInLocalStorage}
        value={currency}
        fromSideBar={fromSideBar}
      />
    </div>
  );
};

export default CurrencyComponent;
