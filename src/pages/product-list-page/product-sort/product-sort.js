import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useStyles } from './product-sort.styles';
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
import { URL_QUERIES_NAME } from '../../../configs';

const ProductSort = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { sort, page, defaultPage } = URL_QUERIES_NAME;
  const query = searchParams.get(sort);
  useEffect(() => {
    SORT_BY_SELECT_OPTIONS.forEach(({ optionValue }) => {
      if (query === optionValue.name) {
        dispatch(setSortByPrice(optionValue.value));
      }
      if (query === optionValue.name) {
        dispatch(setSortByRate(optionValue.value));
      }
      if (query === optionValue.name) {
        dispatch(setSortByPopularity(optionValue.value));
      }
      if (query === optionValue.name) {
        dispatch(setSortByPrice(optionValue.value));
      }
    });
  }, [dispatch, searchParams.toString()]);

  const selectHandler = (e) => {
    const { name } = JSON.parse(e.target.value);
    searchParams.set(sort, name);
    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };

  const sortByText = SORT_BY_TEXT[language].value;

  const selectOptions = SORT_BY_SELECT_OPTIONS.map(({ lang, optionValue }) => (
    <option key={lang[1].value} value={JSON.stringify(optionValue)}>
      {lang[language].value}
    </option>
  ));

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
