import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './Cabinet.styles';
import { setThemeMode } from '../../redux/theme/theme.actions';

const CABINET_OPTIONS_NOT_LOGGED = {
  0: {
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logIn: 'Увійти'
  },
  1: {
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logIn: 'Log in'
  }
};

const CABINET_OPTIONS_LOGGED = {
  0: {
    profile: 'Профіль',
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logOut: 'Вийти'
  },
  1: {
    profile: 'Profile',
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logOut: 'Log out'
  }
};

const Cabinet = () => {
  const lightMode = useSelector(({ lightMode }) => lightMode);
  const dispatch = useDispatch();
  const [isLogged, language] = [true, 1]; // 0 === UA, 1 === EN

  const props = {
    logged: isLogged
  };

  const classes = useStyles(props);
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  const changeTheme = () => {
    dispatch(setThemeMode(!lightMode));
  };

  const loggedCabinet = () => (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <PersonOutlineIcon />
        <span>{CABINET_OPTIONS_LOGGED[language].profile}</span>
      </li>
      <li>
        <FavoriteIcon />
        <span>{CABINET_OPTIONS_LOGGED[language].wishlist}</span>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <ExitToAppIcon />
        <span>{CABINET_OPTIONS_LOGGED[language].logOut}</span>
      </li>
    </ul>
  );

  const notLoggedCabinet = () => (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <FavoriteIcon />
        <span>{CABINET_OPTIONS_NOT_LOGGED[language].wishlist}</span>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_NOT_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <ExitToAppIcon />
        <span>{CABINET_OPTIONS_NOT_LOGGED[language].logIn}</span>
      </li>
    </ul>
  );

  return (
    <div className={classes.cabinet}>
      <PersonOutlineIcon />
      {isLogged ? loggedCabinet() : notLoggedCabinet()}
    </div>
  );
};

export default Cabinet;

/*
*   const loggedCabinet = () => (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <Link to='/profile'>
          <PersonOutlineIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].profile}</span>
        </Link>
      </li>
      <li>
        <Link to='/wishlist'>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login'>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].logOut}</span>
        </Link>
      </li>
    </ul>
  );

  const notLoggedCabinet = () => (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <Link to='/wishlist'>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_NOT_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login'>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[language].logIn}</span>
        </Link>
      </li>
    </ul>
  );
* */
