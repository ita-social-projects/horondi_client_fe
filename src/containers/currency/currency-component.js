import React, { useContext } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import _ from 'lodash';

import { useStyles } from './currency.styles';
import { CURRENCY } from '../../configs';
import { CurrencyContext } from '../../context/currency-context';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const CurrencyComponent = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const { currencyHandler, currencies } = useContext(CurrencyContext);

  const mappedCurrencies = Object.values(currencies).map(
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
      {errorOrLoadingHandler(false, _.isEmpty(currencies))}
      <ButtonGroup>{mappedCurrencies}</ButtonGroup>
    </div>
  );
};

export default CurrencyComponent;
