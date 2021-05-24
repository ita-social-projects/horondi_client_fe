import React from 'react';
import { useStyles } from './sidemenu-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import HeaderProfile from '../header-profile';
import SearchBar from '../search-bar';

const HeaderRightBar = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });

  return (
    <div className={styles.root}>
      <SearchBar fromSideBar={fromSideBar} />
      <Currency fromSideBar={fromSideBar} />
      <Language fromSideBar={fromSideBar} />
      <CartHeader fromSideBar={fromSideBar} />
      <HeaderProfile fromSideBar={fromSideBar} />
    </div>
  );
};

export default HeaderRightBar;
