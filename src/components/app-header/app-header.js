import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import NavbarLeft from '../../containers/navbar-left';
import { useStyles } from './app-header.styles';
import Cabinet from '../Cabinet';
import Language from '../language';

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
            <ShoppingBasketIcon className={styles.icons} />
            <Cabinet />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
