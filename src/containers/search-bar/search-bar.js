import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './search-bar.styles';
import {
  getFiltredProducts,
  setSearchFilter
} from '../../redux/products/products.actions';
import { SEARCH_TEXT } from '../../translations/product-list.translations';

const SearchBar = ({ fromSideBar }) => {
  const language = useSelector(({ Language }) => Language.language);

  const styles = useStyles({ fromSideBar });
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => {
    dispatch(setSearchFilter(target.value));
    dispatch(getFiltredProducts({ forSearchBar: true }));
  };

  return (
    <TextField
      className={styles.root}
      label={SEARCH_TEXT[language].value}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
