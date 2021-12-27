import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './search-bar.styles';
import { getFilteredProductsQuery } from '../../pages/product-list-page/operations/product-list.queries';
import SearchIcon from './SearchIcon';
import { formRegExp } from '../../configs/regexp';

const SearchBar = ({
  searchParams,
  setSearchParams,
  initialSearchState,
  fromNavBar = true,
  handleErrors,
  errors
}) => {
  const styles = useStyles(fromNavBar);
  const { t } = useTranslation();

  const [searchTimeout, setSearchTimeout] = useState(null);
  const [search, setSearch] = useState();

  const { loading, refetch } = useQuery(getFilteredProductsQuery, {
    onCompleted: (data) =>
      setSearchParams((prevState) => ({ ...prevState, loading, products: data.getProducts.items })),
    variables: { search: searchParams.searchFilter }
  });

  const handleSearch = ({ target }) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearch(target.value);
    handleErrors();
    if (!formRegExp.search.test(target.value)) {
      handleErrors(t('error.onlyLetter'));
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

  const mainClass = fromNavBar ? styles.root : styles.notFromNavbar;

  const handleOnBlur = () => {
    setTimeout(() => setSearchParams(initialSearchState), 100);
  };

  return (
    <div className={mainClass}>
      <SearchIcon />
      <TextField
        placeholder={t('searchBar.search')}
        onBlur={handleOnBlur}
        onFocus={handleSearch}
        inputProps={{ maxLength: 20 }}
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
