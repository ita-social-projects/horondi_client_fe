import React from 'react';
import { useStyles } from './header-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import HeaderProfile from '../header-profile';
import HeaderSearchBar from '../header-search-bar';

const HeaderRightBar = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });

  return (
    <div className={styles.root}>
      <HeaderSearchBar />
      <Currency fromSideBar={fromSideBar} />
      <Language fromSideBar={fromSideBar} />
      <CartHeader fromSideBar={fromSideBar} />
      <HeaderProfile fromSideBar={fromSideBar} />
    </div>
  );
};

export default HeaderRightBar;
