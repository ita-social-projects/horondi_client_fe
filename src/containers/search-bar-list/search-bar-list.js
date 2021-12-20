import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './search-bar-list.styles';
import SearchBarListItem from './search-bar-list-item';
import { handleSearchListLoading } from '../../utils/handle-search-bar-list';

const SearchBarList = ({ searchParams }) => {
  const { t } = useTranslation();

  const styles = useStyles();
  const { products, searchBarVisibility, loading } = searchParams;

  return (
    <>
      {searchBarVisibility && (
        <div className={styles.searchBarList}>
          {products.length
            ? products.map((item) => <SearchBarListItem key={item._id} product={item} />)
            : handleSearchListLoading(loading, styles.emptyList, t('error.onlyLetter'))}
        </div>
      )}
    </>
  );
};

export default SearchBarList;
