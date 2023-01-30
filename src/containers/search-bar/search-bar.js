import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { InputAdornment } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useStyles } from './search-bar.styles';
import { getFilteredProductsQuery } from '../../pages/product-list-page/operations/product-list.queries';
import SearchIcon from './SearchIcon';
import useDebounce from '../../hooks/use-debounce';

const SearchBar = ({
  searchParams,
  setSearchParams,
  fromNavBar = true,
  searchHandler,
  defaultValue
}) => {
  const styles = useStyles({ fromNavBar });
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const [getProductsQuery, { loading }] = useLazyQuery(getFilteredProductsQuery, {
    onCompleted: (data) => {
      setSearchParams((prevState) => ({
        ...prevState,
        loading,
        products: data.getProducts.items
      }));
    },
    variables: { search: searchParams.searchFilter },
    fetchPolicy: 'no-cache'
  });

  const visibilityToggle = useCallback(
    (value) => {
      setSearchParams((prevState) => ({
        ...prevState,
        searchBarVisibility: value
      }));
    },
    [setSearchParams]
  );

  const handleOnBlur = useCallback(() => {
    setTimeout(() => visibilityToggle(false), 100);
  }, [visibilityToggle]);

  useEffect(() => {
    if (debouncedSearchValue) {
      setSearchParams(() => ({
        products: [],
        searchFilter: debouncedSearchValue,
        searchBarVisibility: true
      }));
      getProductsQuery();
    } else {
      handleOnBlur();
    }
  }, [debouncedSearchValue, getProductsQuery, handleOnBlur, setSearchParams]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const mainClass = fromNavBar ? styles.root : styles.notFromNavbar;

  const handleOnFocus = () => {
    if (searchValue) {
      visibilityToggle(true);
    }
  };

  const textFieldClear = () => {
    setSearchValue('');
  };

  return (
    <div className={mainClass}>
      <TextField
        placeholder={t('searchBar.search')}
        value={defaultValue || searchValue}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChange={searchHandler || handleSearch}
        InputProps={{
          inputProps: { maxLength: 20 },
          startAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='start'>
              <ClearIcon
                data-testid='clear-icon'
                className={styles.clearInputIcon}
                onClick={textFieldClear}
              />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default SearchBar;
