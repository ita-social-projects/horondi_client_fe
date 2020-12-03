import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { PRICE_TEXT, PRICE_FROM, PRICE_TO } from '../../../../translations/product-list.translations';
import { useStyles } from '../product-list-filter.styles';
import { changeFilterStatus, setPriceFilter } from '../../../../redux/products/products.actions';

const PriceFilter = ({ filterData, filters, language, currency }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { filterStatus} = useSelector(
    ({ Products}) => ({
      filterStatus: Products.filterStatus
    })
  );
  const { priceFilter } = filters;

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceFilter(newValue.map((value) => value * 100)));
  };
  const handlePriceFilter = ()=>{
    dispatch(changeFilterStatus(!filterStatus));
  }
  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' gutterBottom>
        {PRICE_TEXT[language].value}:  {PRICE_FROM[language].value} {Math.round(priceFilter[0]/100)}
        - {PRICE_TO[language].value} {Math.round(priceFilter[1]/100)}
      </Typography>
      <Slider
        className={styles.slider}
        value={priceFilter.map((price) => price / 100)}
        defaultValue={[
          Math.min(
            ...filterData.map(
              (product) => product.basePrice[currency].value / 100
            )
          ),
          Math.max(
            ...filterData.map(
              (product) => product.basePrice[currency].value / 100
            )
          )
        ]}
        onChange={handlePriceChange}
        onChangeCommitted={handlePriceFilter}
        valueLabelDisplay='auto'
        min={Math.min(
          ...filterData.map(
            (product) => product.basePrice[currency].value / 100
          )
        )}
        max={Math.max(
          ...filterData.map(
            (product) => product.basePrice[currency].value / 100
          )
        )}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
