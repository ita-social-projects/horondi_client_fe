import React, { useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './app-header.styles';
import Language from '../../containers/language';
import NavbarLeft from '../../containers/navbar-left';
import HeaderProfile from '../../containers/header-profile';
import Sidebar from '../../containers/sidebar';
import CartHeader from '../../containers/cart-header';
import Currency from '../../containers/currency';

const AppHeader = () => {
  const styles = useStyles();

  const [menu, setMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      <AppBar position='static' className={styles.header}>
        <Toolbar>
          <IconButton
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.categories}>
            <NavbarLeft />
          </div>
          <Currency />
          <Language />
          <CartHeader />
          <HeaderProfile />
        </Toolbar>
      </AppBar>
      <Sidebar setMenuOpen={setMenuOpen} menu={menu} />
    </div>
  );
};

export default AppHeader;
