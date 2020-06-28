import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LanguageIcon from '@material-ui/icons/Language';
import { useStyles } from './app-header.styles';

import NavbarLeft from '../../containers/navbar-left';

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
            <LanguageIcon className={classes.icons} />
            <ShoppingBasketIcon className={classes.icons} />
            <PersonIcon className={classes.icons} />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
