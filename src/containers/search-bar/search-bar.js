import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './search-bar.styles';
import {
  setSearchFilter,
  getFiltredProducts
} from '../../redux/products/products.actions';
import { setSearchBarVisibility } from '../../redux/search-bar/search-bar.actions';
import { SEARCH_TEXT } from '../../translations/product-list.translations';

const SearchBar = ({ fromSideBar }) => {
  const language = useSelector(({ Language }) => Language.language);

  const styles = useStyles({ fromSideBar });
  const dispatch = useDispatch();

  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = ({ target }) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (target.value && target.value.trim()) {
      setSearchTimeout(
        setTimeout(() => {
          dispatch(setSearchFilter(target.value));
          dispatch(getFiltredProducts({ forSearchBar: true }));
          dispatch(setSearchBarVisibility(!!target.value));
        }, 1000)
      );
    }
  };

  const handleOnBlur = () => {
    setTimeout(() => dispatch(setSearchBarVisibility(false)), 100);
  };

  return (
    <TextField
      className={styles.root}
      label={SEARCH_TEXT[language].value}
      onChange={handleSearch}
      onBlur={handleOnBlur}
      onFocus={handleSearch}
    />
  );
};

export default SearchBar;
