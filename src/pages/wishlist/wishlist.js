import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './wishlist.styles';
import FilledWishlist from './filled-wishlist';
import EmptyWishlist from './empty-wishlist';

const Wishlist = () => {
  const wishlistItems = useSelector(({ Wishlist }) => Wishlist.list);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {wishlistItems.length ? (
        <FilledWishlist items={wishlistItems} />
      ) : (
        <EmptyWishlist />
      )}
    </div>
  );
};

export default Wishlist;
