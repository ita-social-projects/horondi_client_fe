import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './app-header.styles';
import { Cabinet } from '../../containers';
import Language from '../../containers/language';
import NavbarLeft from '../../containers/navbar-left';
import CartHeader from '../../containers/cart-header';
import Currency from '../../containers/currency';

const AppHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position='static'>
        <Toolbar className={styles.header}>
          <NavbarLeft />
          <Toolbar>
            <Currency />
            <Language />
            <CartHeader />
            <Cabinet />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
