import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { useStyles } from './app-header.styles';
import { Cabinet } from '../../containers';
import Language from '../../containers/language';
import NavbarLeft from '../../containers/navbar-left';
import CartHeader from '../../containers/cart-header';

const AppHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position='static'>
        <Toolbar className={styles.header}>
          <NavbarLeft />
          <Toolbar>
            <AttachMoneyIcon className={styles.icons} />
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
