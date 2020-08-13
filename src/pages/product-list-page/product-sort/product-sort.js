import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import useStyles from './product-sort.styles';
import CountPerPage from '../count-per-page';
import {
  setSortByPrice,
  setSortByRate,
  setSortByPopularity
} from '../../../redux/products/products.actions';
import {
  SORT_BY_SELECT_OPTIONS,
  SORT_BY_TEXT
} from '../../../translations/product-list.translations';
import { SORT_ASC, SORT_DESC, RATE, POPULARITY } from '../../../configs';

const ProductSort = () => {
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const styles = useStyles();
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    const { name, value } = JSON.parse(e.target.value);

    if (name === SORT_ASC || name === SORT_DESC) {
      return dispatch(setSortByPrice(value));
    }
    if (name === RATE) {
      return dispatch(setSortByRate(value));
    }
    if (name === POPULARITY) {
      return dispatch(setSortByPopularity(value));
    }
  };

  const sortByText = SORT_BY_TEXT[language].value;

  const selectOptions = SORT_BY_SELECT_OPTIONS.map(
    ({ lang, optionValue }, index) => (
      <option key={lang[1].value} value={JSON.stringify(optionValue)}>
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
          onChange={selectHandler}
          className={styles.root}
          variant='outlined'
        >
          {selectOptions}
        </TextField>
      </div>
      <CountPerPage />
    </div>
  );
};

export default ProductSort;
