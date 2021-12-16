import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { TextField } from '@material-ui/core';
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
      : ['', '']
  );

  const searchParamsRef = useRef();
  searchParamsRef.current = searchParams;

  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));

  const min = getMin(priceRange.minPrice, currency);
  const max = getMax(priceRange.maxPrice, currency);

  useEffect(() => {
    if (prices[0] === '' && prices[1] === '' && min && max) {
      setPrices([min, max]);
    }
  }, [min, max, currency, prices]);

  const handlePriceChange = (event, newValue) => {
    setPrices(newValue.map((value) => +value));
  };

  const handleTextField = (e) => {
    const newPrices = [...prices];
    newPrices[e.target.id] = e.target.value;
    setPrices(newPrices);
  };

  const handlePriceFilter = useCallback(
    (pricesArr) => {
      searchParamsRef.current.set(priceFilter, pricesArr.map((price) => price).join());
      searchParamsRef.current.set(page, defaultPage);
      history.push(`?${searchParamsRef.current.toString()}`);
    },
    [defaultPage, page, priceFilter, history]
  );

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (prices[0] !== min) {
        handlePriceFilter(prices);
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [prices, min, handlePriceFilter]);

  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' component='div'>
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
          />
          {t('common.to')}
          <TextField
            id='1'
            className={styles.priceRangeInput}
            variant='outlined'
            onChange={handleTextField}
            type='tel'
            value={prices[1]}
          />
        </div>
      </Typography>
      <Slider
        id='slider'
        className={styles.slider}
        value={prices.map((price) => +price)}
        onChange={handlePriceChange}
        onClick={() => handlePriceFilter(prices)}
        valueLabelDisplay='auto'
        min={min}
        max={max}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
