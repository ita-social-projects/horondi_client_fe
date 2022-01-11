import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './search-bar-list.styles';
import SearchBarListItem from './search-bar-list-item';
import { handleSearchListLoading } from '../../utils/handle-search-bar-list';

const SearchBarList = () => {
  const { products, language, searchBarVisibility, searchBarLoading } = useSelector(
    ({ SearchBar, Language }) => ({
      products: SearchBar.list,
      searchBarVisibility: SearchBar.visibility,
      searchBarLoading: SearchBar.loading,
      language: Language.language
    })
  );

  const styles = useStyles();

  return (
    <>
      {searchBarVisibility && (
        <div className={styles.searchBarList}>
          {products.length
            ? products.map((item) => <SearchBarListItem key={item._id} product={item} />)
            : handleSearchListLoading(searchBarLoading, styles.emptyList, language)}
        </div>
      )}
    </>
  );
};

export default SearchBarList;
