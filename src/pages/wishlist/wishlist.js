import React from 'react';

import { useAppStyles } from '../../components/app/app.styles';
import FilledWishlist from './filled-wishlist';
// import useWishlistLoader from '../../hooks/use-wishlist-loader';
// import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import ToastContainer from '../../containers/toast';
// new:
import useWishlist from '../../hooks/use-wishlist';
//  -----------------------------------------------

const Wishlist = () => {
  const styles = useAppStyles();
  // old:
  // const { loading, error, wishlist } = useWishlistLoader();

  // if (loading || error) return errorOrLoadingHandler(error, loading);

  // new:
  const { wishlist } = useWishlist();
  // ---------------------------------------

  return (
    <div className={styles.rootApp}>
      <div className={styles.containerApp}>
        {/* old: */}
        {/* <FilledWishlist items={wishlist.products} /> */}
        {/* new: */}
        <FilledWishlist items={wishlist} />
        {/* --------------------------------------------------- */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Wishlist;
