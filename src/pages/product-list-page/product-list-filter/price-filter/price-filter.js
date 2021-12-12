import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { TextField } from '@material-ui/core';
import CurrencyComponent from '../../../../containers/currency/currency-component';
import { getMin, getMax } from '../../../../utils/priceCalculating';
import { useStyles } from '../product-list-filter.styles';
import { URL_QUERIES_NAME } from '../../../../configs/index';

const PriceFilter = ({ priceRange }) => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const { priceFilter, page, defaultPage } = URL_QUERIES_NAME;
  const searchParams = new URLSearchParams(search);
  const styles = useStyles();
  const history = useHistory();

  const [prices, setPrices] = useState(
    searchParams.get(priceFilter)
      ? searchParams
        .get(priceFilter)
        .split(',')
        .map((price) => +price)
      : []
  );

  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));

  useEffect(() => {
    if (prices.length === 0 && priceRange.minPrice)
      setPrices([priceRange.minPrice[currency].value, priceRange.maxPrice[currency].value]);
  }, [priceRange, currency, prices.length]);
  const handlePriceChange = (event, newValue) => {
    setPrices(newValue.map((value) => +value));
  };

  const handlePriceFilter = () => {
    searchParams.set(priceFilter, prices.map((price) => price).join());
    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };

  const min = getMin(priceRange.minPrice, currency);
  const max = getMax(priceRange.maxPrice, currency);

  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' component='div'>
        <div style={{ display: 'flex' }}>
          {t('common.price')}
          <CurrencyComponent fromSideBar />
        </div>
        <div className={styles.priceRange}>
          {t('common.from')}
          <TextField
            className={styles.priceRangeInput}
            style={{ marginRight: '1rem' }}
            variant='outlined'
            type='tel'
            defaultValue={prices[0] || min}
          />
          {t('common.to')}
          <TextField
            className={styles.priceRangeInput}
            variant='outlined'
            type='tel'
            defaultValue={prices[1] || max}
          />
        </div>
      </Typography>
      <Slider
        className={styles.slider}
        value={prices.map((price) => +price)}
        defaultValue={prices.map((price) => +price)}
        onChange={handlePriceChange}
        onChangeCommitted={handlePriceFilter}
        valueLabelDisplay='auto'
        min={min}
        max={max}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
