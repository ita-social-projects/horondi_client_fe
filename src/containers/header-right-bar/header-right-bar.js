import React, { useState } from 'react';
import { useStyles } from './header-right-bar.styles';

import CurrencyComponent from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import HeaderProfile from '../header-profile';
import SearchBar from '../search-bar';
import SearchBarList from '../search-bar-list';

const HeaderRightBar = ({ fromSideBar, setIsMenuOpen }) => {
  const styles = useStyles({ fromSideBar });

  const initialSearchState = {
    searchFilter: '',
    products: [],
    searchBarVisibility: false,
    loading: false
  };

  const [searchParams, setSearchParams] = useState(initialSearchState);

  return (
    <div className={styles.root}>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        initialSearchState={initialSearchState}
      />
      <SearchBarList searchParams={searchParams} />
      <div className={styles.currency}>
        <CurrencyComponent fromSideBar={fromSideBar} />
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
