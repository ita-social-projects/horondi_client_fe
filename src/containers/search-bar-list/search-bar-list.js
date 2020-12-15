import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './search-bar-list.styles';
import { NOTHING_FOUND_MESSAGE } from '../../configs';
import SearchBarListItem from './search-bar-list-item';
import Loader from '../../components/loader';

const SearchBarList = () => {
  const {
    products,
    language,
    searchBarVisibility,
    searchBarLoading
  } = useSelector(({ SearchBar, Language }) => ({
    products: SearchBar.list,
    searchBarVisibility: SearchBar.visibility,
    searchBarLoading: SearchBar.loading,
    language: Language.language
  }));

  const styles = useStyles();

  return (
    <>
      {searchBarVisibility && (
        <div className={styles.searchBarList}>
          {products.length ? (
            products.map((item) => (
              <SearchBarListItem key={item._id} product={item} />
            ))
          ) : searchBarLoading ? (
            <Loader />
          ) : (
            <Typography className={styles.emptyList} variant='h3'>
              {NOTHING_FOUND_MESSAGE[language]}
            </Typography>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBarList;
