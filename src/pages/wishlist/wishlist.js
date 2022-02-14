import React from 'react';

import { useAppStyles } from '../../components/app/app.styles';
import FilledWishlist from './filled-wishlist';
import useWishlistLoader from '../../hooks/use-wishlist-loader';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import ToastContainer from '../../containers/toast';

const Wishlist = () => {
  const styles = useAppStyles();
  const { loading, error, wishlist } = useWishlistLoader();

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.rootApp}>
      <div className={styles.containerApp}>
        <FilledWishlist items={wishlist.products} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Wishlist;
