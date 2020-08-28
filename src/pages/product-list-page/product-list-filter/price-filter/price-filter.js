import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { PRICE_TEXT } from '../../../../translations/product-list.translations';
import useStyles from '../product-list-filter.styles';
import { setPriceFilter } from '../../../../redux/products/products.actions';

const PriceFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { filterData, filters, language } = useSelector(
    ({ Products: { filterData, filters }, Language: { language } }) => ({
      filterData,
      filters,
      language
    })
  );

  const { priceFilter } = filters;

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceFilter(newValue.map((value) => value * 100)));
  };

  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' gutterBottom>
        {PRICE_TEXT[language].value}:
      </Typography>
      <Slider
        className={styles.slider}
        value={priceFilter.map((price) => price / 100)}
        defaultValue={[
          Math.min(
            ...filterData.map((product) => product.basePrice[0].value / 100)
          ),
          Math.max(
            ...filterData.map((product) => product.basePrice[0].value / 100)
          )
        ]}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        min={Math.min(
          ...filterData.map((product) => product.basePrice[0].value / 100)
        )}
        max={Math.max(
          ...filterData.map((product) => product.basePrice[0].value / 100)
        )}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
