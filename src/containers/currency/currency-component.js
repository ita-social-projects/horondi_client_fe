import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { useStyles } from './currency.styles';
import { CURRENCY, CURRENCIES_LIST } from '../../configs';
import { CurrencyContext } from '../../context/currency-context';

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
