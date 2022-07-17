import React from 'react';
import { useStyles } from './sidemenu-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import WishlistHeader from '../wishlist-header';
import ThemeComponent from '../theme';

const SidemenuRightBar = ({ fromSideBar, setIsMenuOpen }) => {
  const styles = useStyles({ fromSideBar });
  return (
    <div className={styles.flexColumn}>
      <div className={styles.root}>
        <div
          className={`${styles.wishlist} ${styles.iconItem}`}
          onClick={() => setIsMenuOpen(false)}
          data-testid='wishlist-icon'
        >
          <WishlistHeader />
        </div>
        <div
          className={`${styles.cartHeader} ${styles.iconItem}`}
          onClick={() => setIsMenuOpen(false)}
          data-testid='cart-icon'
        >
          <CartHeader fromSideBar />
        </div>
      </div>
      <div className={styles.root}>
        <div className={`${styles.togglItem} ${styles.iconItem}`}>
          <Language fromSideBar />
        </div>
        <div className={`${styles.togglItem} ${styles.iconItem}`}>
          <Currency fromSideBar />
        </div>
        <div className={`${styles.togglItem} ${styles.iconItem}`}>
          <ThemeComponent fromSideBar />
        </div>
      </div>
    </div>
  );
};

export default SidemenuRightBar;
