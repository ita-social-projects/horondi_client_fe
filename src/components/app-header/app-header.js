import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import NavbarLeft from '../../containers/navbar-left';
import { useStyles } from './app-header.styles';
import Language from '../language/Language';
import Cabinet from '../Cabinet';

const AppHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.header}>
          <NavbarLeft />
          <Toolbar>
            {/* Here will be NavbarRight */}
            <AttachMoneyIcon className={classes.icons} />
            <Language />
            <ShoppingBasketIcon className={classes.icons} />
            <Cabinet />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
