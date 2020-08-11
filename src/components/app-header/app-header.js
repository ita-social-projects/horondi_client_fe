import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { useStyles } from './app-header.styles';
import Language from '../../containers/language';
import NavbarLeft from '../../containers/navbar-left';
import Cabinet from '../../containers/cabinet';

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
            <ShoppingBasketIcon />
            <Cabinet />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
