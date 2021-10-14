import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useStyles } from './search-bar.styles';
import { setSearchFilter, getFiltredProducts } from '../../redux/products/products.actions';
import { setSearchBarVisibility } from '../../redux/search-bar/search-bar.actions';

const SearchBar = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
  const [sticky, setSticky] = useState(false);
  const stickySearch = clsx({
    [styles.root]: true,
    [styles.sticky]: sticky
  });
  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const handleOnBlur = () => {
    setTimeout(() => dispatch(setSearchBarVisibility(false)), 100);
  };

  return (
    <TextField
      className={stickySearch}
      label={t('searchBar.search')}
      onChange={handleSearch}
      onBlur={handleOnBlur}
      onFocus={handleSearch}
    />
  );
};

export default SearchBar;
