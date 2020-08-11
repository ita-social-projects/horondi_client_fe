import React, { useEffect } from 'react';
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

  const { products, filters, language } = useSelector(
    ({ Products: { products, filters }, Language: { language } }) => ({
      products,
      filters,
      language
    })
  );

  const { priceFilter } = filters;

  useEffect(() => {
    dispatch(
      setPriceFilter([
        Math.min(...products.map((product) => product.basePrice)),
        Math.max(...products.map((product) => product.basePrice))
      ])
    );
    console.log('here');
  }, [products]);

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceFilter(newValue));
  };

  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' gutterBottom>
        {PRICE_TEXT[language].value}:
      </Typography>
      <Slider
        className={styles.slider}
        value={priceFilter}
        defaultValue={[
          Math.min(...products.map((product) => product.basePrice)),
          Math.max(...products.map((product) => product.basePrice))
        ]}
        onChange={handlePriceChange}
        valueLabelDisplay='auto'
        min={Math.min(...products.map((product) => product.basePrice))}
        max={Math.max(...products.map((product) => product.basePrice))}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
