import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import NavbarLeft from '../../containers/navbar-left';
import { useStyles } from './app-header.styles';
import Language from '../language';
import Cabinet from '../Cabinet';

const AppHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position='static'>
        <Toolbar className={styles.header}>
          <NavbarLeft />
          <Toolbar>
            {/* Here will be NavbarRight */}
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
