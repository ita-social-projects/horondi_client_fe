import React, { useContext } from 'react';
<<<<<<< HEAD
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { useStyles } from './currency.styles';
import { CURRENCY, CURRENCIES_LIST } from '../../configs';
=======
import { ButtonGroup, Button } from '@material-ui/core';
import _ from 'lodash';

import { useStyles } from './currency.styles';
import { CURRENCY } from '../../configs';
>>>>>>> 795c4727 (change currency context due to comments)
import { CurrencyContext } from '../../context/currency-context';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const CurrencyComponent = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const { currency, currencyHandler } = useContext(CurrencyContext);

  const mappedCurrencies = Object.values(CURRENCIES_LIST).map(
    ({ label: currencyLabel, unicode: currencyUnicode }) => (
      <ToggleButton
        value={currencyLabel}
        key={currencyLabel}
        arau-label={`${CURRENCY} ${currencyLabel}`}
      >
        {currencyUnicode}
      </ToggleButton>
    )
  );

  return (
    <div data-cy='currency' className={styles.root}>
      <ToggleButtonGroup
        value={currency}
        exclusive
        onChange={currencyHandler}
        aria-label={CURRENCY}
      >
        {mappedCurrencies}
      </ToggleButtonGroup>
    </div>
  );
};

export default CurrencyComponent;
