import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { useStyles, defaultStyles } from './header-search-bar.styles';
import {
  getFiltredProducts,
  setSearchFilter
} from '../../redux/products/products.actions';
import { SEARCH_TEXT } from '../../translations/product-list.translations';

const SearchBar = withStyles({
  ...defaultStyles
})(TextField);

const HeaderSearchBar = () => {
  const language = useSelector(({ Language }) => Language.language);

  const styles = useStyles();
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => {
    dispatch(setSearchFilter(target.value));
    dispatch(getFiltredProducts({ forSearchBar: true }));
  };

  return (
    <SearchBar
      className={styles.searchBar}
      id='custom-css-standard-input'
      label={SEARCH_TEXT[language].value}
      onChange={handleSearch}
    />
  );
};

export default HeaderSearchBar;
