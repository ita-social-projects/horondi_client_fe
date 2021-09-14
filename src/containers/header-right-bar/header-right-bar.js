import React from 'react';
import { useStyles } from './header-right-bar.styles';

import CurrencyComponent from '../currency';
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
        <CurrencyComponent fromSideBar={fromSideBar} />
      </div>
      <div className={styles.language}>
        <Language fromSideBar={fromSideBar} />
      </div>
      <CartHeader fromSideBar={fromSideBar} />
      <HeaderProfile fromSideBar={fromSideBar} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default HeaderRightBar;
