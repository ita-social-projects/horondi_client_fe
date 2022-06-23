import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { useStyles } from './search-bar.styles';
import { getFilteredProductsQuery } from '../../pages/product-list-page/operations/product-list.queries';
import SearchIcon from './SearchIcon';
import useDebounce from '../../hooks/use-debounce';
import ClearIcon from './ClearIcon';

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

  const visibilityToggle = (value) => {
    setSearchParams((prevState) => ({
      ...prevState,
      searchBarVisibility: value
    }));
  };

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
  }, [debouncedSearchValue]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const mainClass = fromNavBar ? styles.root : styles.notFromNavbar;

  const handleOnBlur = () => {
    setTimeout(() => visibilityToggle(false), 100);
  };

  const handleOnFocus = () => {
    if (searchValue) {
      visibilityToggle(true);
    }
  };

  return (
    <div className={mainClass}>
      <SearchIcon searchInputIcon={styles.searchInputIcon} />
      <TextField
        placeholder={t('searchBar.search')}
        value={defaultValue || searchValue}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        inputProps={{ maxLength: 20 }}
        onChange={searchHandler || handleSearch}
      />
      <ClearIcon searchValue={searchValue} setSearchValue={setSearchValue} clearInputIcon={styles.clearInputIcon}
      clearIconBlock={styles.clearIconBlock} />
    </div>
  );
};

export default SearchBar;
