import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import useStyles from './product-sort.styles';
import ProductsPerPage from '../products-per-page';
import {
  setSortByDate,
  setSortByPrice,
  setSortByRate,
  setSortByPopularity
} from '../../../redux/products/products.actions';
import {
  SORT_BY_SELECT_OPTIONS,
  SORT_BY_TEXT
} from '../../../translations/product-list.translations';

const ProductSort = () => {
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const styles = useStyles();
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    const { name, value } = JSON.parse(e.target.value);

    if (name === 'sortAsc' || name === 'sortDesc') {
      return dispatch(setSortByPrice(value));
    }
    if (name === 'rate') {
      return dispatch(setSortByRate(value));
    }
    if (name === 'popularity') {
      return dispatch(setSortByPopularity(value));
    }
  };

  const sortByText = SORT_BY_TEXT[language].value;

  const selectOptions = SORT_BY_SELECT_OPTIONS.map(
    ({ lang, optionValue }, index) => (
      <option key={index} value={JSON.stringify(optionValue)}>
        {lang[language].value}
      </option>
    )
  );

  return (
    <div data-cy='sort' className={styles.sortDiv}>
      <div>
        {sortByText}
        <TextField
          select
          SelectProps={{ native: true }}
          onChange={(e) => selectHandler(e)}
          className={styles.root}
          variant='outlined'
        >
          {selectOptions}
        </TextField>
      </div>
      <ProductsPerPage />
    </div>
  );
};

export default ProductSort;
