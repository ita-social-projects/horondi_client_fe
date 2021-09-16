import React from 'react';
import { useStyles } from './header-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import HeaderProfile from '../header-profile';
import SearchBar from '../search-bar';

const HeaderRightBar = ({ fromSideBar, setIsMenuOpen }) => {
  const styles = useStyles({ fromSideBar });

  return (
    <div className={styles.root}>
      <SearchBar fromSideBar={fromSideBar} />
      <div className={styles.currency}>
        <Currency fromSideBar={fromSideBar} />
      </div>
      <div className={styles.language}>
        <Language fromSideBar={fromSideBar} />
      </div>
      <div className={styles.cart}>
        <CartHeader fromSideBar={fromSideBar} />
      </div>
      <div className={styles.profile}>
        <HeaderProfile fromSideBar={fromSideBar} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default HeaderRightBar;
