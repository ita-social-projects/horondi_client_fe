import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useHistory, useLocation } from 'react-router';
import { TextField } from '@material-ui/core';

import { getMin, getMax } from '../../../../utils/priceCalculating';
import { useStyles } from '../product-list-filter.styles';
import { URL_QUERIES_NAME } from '../../../../configs/index';
import { useCurrency } from '../../../../hooks/use-currency';
import useDebounce from '../../../../hooks/use-debounce';

const PriceFilter = ({ priceRange, resetPrices }) => {
  const { getPriceWithCurrency, getBaseCurrencyPrice } = useCurrency();
  const { t } = useTranslation();
  const { search } = useLocation();
  const { priceFilter, page, defaultPage } = URL_QUERIES_NAME;
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const styles = useStyles();
  const history = useHistory();

  const min = getMin(getPriceWithCurrency(priceRange.minPrice));
  const max = getMax(getPriceWithCurrency(priceRange.maxPrice));

  const fixPrice = (inputPrices) => inputPrices.map((el) => getBaseCurrencyPrice(el));

  const [prices, setPrices] = useState([min, max]);
  const [pricesFromInput, setPricesFromInput] = useState([]);

  useEffect(() => {
    setPrices([min, max]);
  }, [min, max, resetPrices]);

  const handlePriceChange = (_event, newValue) => {
    setPrices(newValue.map((value) => +value));
  };

  const handleTextField = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
    const newPrices = [...prices];
    newPrices[e.target.id] = e.target.value;
    setPrices(newPrices);
    setPricesFromInput(fixPrice(newPrices));
  };

  const handlePriceFilter = useCallback(
    (pricesArr) => {
      searchParams.set(priceFilter, pricesArr.map((price) => price).join());
      searchParams.set(page, defaultPage);
      history.push(`?${searchParams.toString()}`);
    },
    [defaultPage, page, priceFilter, history, searchParams]
  );

  const debouncedPrices = useDebounce(pricesFromInput, 1000);

  useEffect(() => {
    debouncedPrices.length && handlePriceFilter(debouncedPrices);
  }, [debouncedPrices, handlePriceFilter]);

  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' component='div' className={styles.priceName}>
        {t('common.price')}
        <div className={styles.priceRange}>
          {t('common.from')}
          <TextField
            id='0'
            className={styles.priceRangeInput}
            style={{ marginRight: '1rem' }}
            variant='outlined'
            onChange={handleTextField}
            type='tel'
            value={prices[0]}
            inputProps={{ type: 'number', min: 0 }}
          />
          {t('common.to')}
          <TextField
            id='1'
            className={styles.priceRangeInput}
            variant='outlined'
            onChange={handleTextField}
            type='tel'
            value={prices[1]}
            inputProps={{ type: 'number', min: 0 }}
          />
        </div>
      </Typography>
      <Slider
        id='slider'
        className={styles.slider}
        value={prices.map((price) => +price)}
        onChange={handlePriceChange}
        onClick={() => handlePriceFilter(fixPrice(prices))}
        valueLabelDisplay='auto'
        min={min}
        max={max}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
