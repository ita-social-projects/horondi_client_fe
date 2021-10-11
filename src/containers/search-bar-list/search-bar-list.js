import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStyles } from './search-bar-list.styles';
import SearchBarListItem from './search-bar-list-item';
import { handleSearchListLoading } from '../../utils/handle-search-bar-list';

const SearchBarList = () => {
  const { products, searchBarVisibility, searchBarLoading } = useSelector(({ SearchBar }) => ({
    products: SearchBar.list,
    searchBarVisibility: SearchBar.visibility,
    searchBarLoading: SearchBar.loading
  }));
  const { i18n } = useTranslation();

  const styles = useStyles();

  return (
    <>
      {searchBarVisibility && (
        <div className={styles.searchBarList}>
          {products.length
            ? products.map((item) => <SearchBarListItem key={item._id} product={item} />)
            : handleSearchListLoading(
              searchBarLoading,
              styles.emptyList,
              i18n.language === 'ua' ? 0 : 1
            )}
        </div>
      )}
    </>
  );
};

export default SearchBarList;
