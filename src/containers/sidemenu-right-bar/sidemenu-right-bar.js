import React from 'react';
import { useStyles } from './sidemenu-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import HeaderProfile from '../header-profile';

const SidemenuRightBar = ({ fromSideBar, setIsMenuOpen }) => {
  const styles = useStyles({ fromSideBar });

  return (
    <div className={styles.root}>
      <div className={styles.currency}>
        <Currency fromSideBar={fromSideBar} />
      </div>
      <div className={styles.language}>
        <Language fromSideBar={fromSideBar} />
      </div>
      <div className={styles.cartHeader} onClick={() => setIsMenuOpen(false)}>
        <CartHeader fromSideBar={fromSideBar} />
      </div>
      <div className={styles.headerProfile}>
        <HeaderProfile fromSideBar={fromSideBar} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default SidemenuRightBar;
