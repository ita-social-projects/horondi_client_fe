import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './search-bar.styles';
import { getFilteredProductsQuery } from '../../pages/product-list-page/operations/product-list.queries';
import SearchIcon from './SearchIcon';

const SearchBar = ({
  searchParams,
  setSearchParams,
  initialSearchState,
  fieldOptions = {},
  fromNavBar = true
}) => {
  const styles = useStyles(fromNavBar);
  const { t } = useTranslation();

  const [searchTimeout, setSearchTimeout] = useState(null);
  const { loading, refetch } = useQuery(getFilteredProductsQuery, {
    onCompleted: (data) =>
      setSearchParams((prevState) => ({ ...prevState, loading, products: data.getProducts.items })),
    variables: { search: searchParams.searchFilter }
  });

  const handleSearch = ({ target }) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (target.value && target.value.trim()) {
      setSearchTimeout(
        setTimeout(() => {
          setSearchParams(() => ({
            products: [],
            searchFilter: target.value,
            searchBarVisibility: !!target.value
          }));
          refetch();
        }, 1000)
      );
    }
  };

  const handleOnBlur = () => {
    setTimeout(() => setSearchParams(initialSearchState), 100);
  };

  return (
    <div className={styles.root}>
      <SearchIcon />
      <TextField
        placeholder={t('searchBar.search')}
        onChange={handleSearch}
        onBlur={handleOnBlur}
        onFocus={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
