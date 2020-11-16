import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './search-bar-list.styles';
import { SEARCH_TEXT } from '../../translations/product-list.translations';
import SearchBarListItem from './search-bar-list-item';

const SearchBarList = () => {
  const products = useSelector(({ Products }) => Products.searchBarProducts);

  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBarList}>
      {products.map((item) => (
        <SearchBarListItem key={item._id} product={item} />
      ))}
    </div>
  );
};

export default SearchBarList;
