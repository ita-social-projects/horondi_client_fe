import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './search-bar-list.styles';
import { NOTHING_FOUND_MESSAGE } from '../../configs';
import SearchBarListItem from './search-bar-list-item';
import CircularLoadingBar from '../../components/circular-loading-bar';
import { setProductsForSearchBar } from '../../redux/search-bar/search-bar.actions';

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
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(setProductsForSearchBar([])), [dispatch]);

  return (
    <>
      {searchBarVisibility && (
        <div className={styles.searchBarList}>
          {products.length ? (
            products.map((item) => (
              <SearchBarListItem key={item._id} product={item} />
            ))
          ) : searchBarLoading ? (
            <CircularLoadingBar />
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
