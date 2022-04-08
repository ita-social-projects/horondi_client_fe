import React, { useContext } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { useStyles } from './currency.styles';
import { CURRENCIES_LIST, CURRENCY } from '../../configs';
import { CurrencyContext } from '../../context/currency-context';

const CurrencyComponent = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const { currencyHandler } = useContext(CurrencyContext);

  const mappedCurrencies = CURRENCIES_LIST.map(
    ({ name: currencyName, unicode: currencyUnicode }) => (
      <Button
        onClick={currencyHandler}
        data-cy={`${CURRENCY} ${currencyName}`}
        key={currencyName}
        value={currencyName}
      >
        {currencyUnicode}
      </Button>
    )
  );
  return (
    <div data-cy='currency' className={styles.root}>
      <ButtonGroup>{mappedCurrencies}</ButtonGroup>
    </div>
  );
};

export default CurrencyComponent;
