import React, { useContext, useLayoutEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './search-bar.styles';
import { getFilteredProductsQuery } from '../../pages/product-list-page/operations/product-list.queries';
import { SearchContext } from '../../components/app/app';

const SearchBar = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const { t } = useTranslation();

  const { searchParams, setSearchParams } = useContext(SearchContext);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const { loading, refetch } = useQuery(getFilteredProductsQuery, {
    onCompleted: (data) =>
      setSearchParams((prevState) => ({ ...prevState, products: data.getProducts.items })),
    variables: { search: searchParams.searchFilter }
  });

  const handleSearch = ({ target }) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (target.value && target.value.trim()) {
      setSearchTimeout(
        setTimeout(() => {
          setSearchParams((prevState) => ({
            ...prevState,
            searchFilter: target.value,
            searchBarVisibility: !!target.value,
            loading
          }));
          refetch();
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
    setTimeout(() => setSearchParams({ searchBarVisibility: false }), 100);
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
