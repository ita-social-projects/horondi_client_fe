import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { getMin, getMax } from '../../../../utils/priceCalculating';
import { useStyles } from '../product-list-filter.styles';
import { URL_QUERIES_NAME } from '../../../../configs/index';
import { setPriceFilter } from '../../../../redux/products/products.actions';

const PriceFilter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { priceFilter, page, defaultPage } = URL_QUERIES_NAME;

  const { filters, currency, maxPrice, minPrice } = useSelector(({ Products, Currency }) => ({
    filters: Products.filters.priceFilter,
    currency: Currency.currency,
    maxPrice: Products.filterData.maxPrice,
    minPrice: Products.filterData.minPrice
  }));

  useEffect(() => {
    if (searchParams.get(priceFilter)) {
      dispatch(
        setPriceFilter(
          searchParams
            .get(priceFilter)
            .split(',')
            .map((price) => price)
        )
      );
    } else if (minPrice && maxPrice) {
      dispatch(setPriceFilter([minPrice[currency].value, maxPrice[currency].value]));
    }
  }, [dispatch, searchParams.toString()]);

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceFilter(newValue.map((value) => value)));
  };
  const handlePriceFilter = () => {
    searchParams.set(priceFilter, filters.map((price) => price).join());
    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };

  const min = getMin(minPrice, currency);
  const max = getMax(maxPrice, currency);
  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' gutterBottom>
        {t('common.price')}: {t('common.from')} {Math.round(filters[0] / 100)}- {t('common.to')}{' '}
        {Math.round(filters[1] / 100)}
      </Typography>
      <Slider
        className={styles.slider}
        value={filters.map((price) => price / 100)}
        defaultValue={filters.map((price) => price / 100)}
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
