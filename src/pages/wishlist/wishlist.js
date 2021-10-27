import React from 'react';

import { useStyles } from './wishlist.styles';
import FilledWishlist from './filled-wishlist';
import useWishlistLoader from '../../hooks/use-wishlist-loader';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const Wishlist = () => {
  const styles = useStyles();
  const { loading, error, wishlist } = useWishlistLoader();

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.root}>
      <FilledWishlist items={wishlist.products} />
    </div>
  );
};

export default Wishlist;
