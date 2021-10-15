import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
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
  }, [priceRange]);
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
      <Typography id='range-slider' gutterBottom>
        {t('common.price')}: {t('common.from')} {Math.round(prices[0])} - {t('common.to')}{' '}
        {Math.round(prices[1])}
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
