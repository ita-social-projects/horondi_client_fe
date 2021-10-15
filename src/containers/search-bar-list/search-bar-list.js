import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './search-bar-list.styles';
import SearchBarListItem from './search-bar-list-item';
import { handleSearchListLoading } from '../../utils/handle-search-bar-list';
import { SearchContext } from '../../components/app/app';

const SearchBarList = () => {
  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const styles = useStyles();
  const {
    searchParams: { products, searchBarVisibility, loading }
  } = useContext(SearchContext);

  return (
    <>
      {searchBarVisibility && (
        <div className={styles.searchBarList}>
          {products.length
            ? products.map((item) => <SearchBarListItem key={item._id} product={item} />)
            : handleSearchListLoading(loading, styles.emptyList, language)}
        </div>
      )}
    </>
  );
};

export default SearchBarList;
