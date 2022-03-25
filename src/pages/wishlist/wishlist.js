import React from 'react';

import { useAppStyles } from '../../components/app/app.styles';
import FilledWishlist from './filled-wishlist';
import ToastContainer from '../../containers/toast';
import { useWishlist } from '../../hooks/use-wishlist';

const Wishlist = () => {
  const styles = useAppStyles();

  const { wishlist } = useWishlist();

  return (
    <div className={styles.rootApp}>
      <div className={styles.containerApp}>
        <FilledWishlist items={wishlist} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Wishlist;
