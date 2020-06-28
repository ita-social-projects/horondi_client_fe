import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './LoggedCabinet.styles';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { LANGUAGE, CABINET_OPTIONS_LOGGED } from '../../configs';

const LoggedCabinet = () => {
  const lightMode = useSelector(({ Theme }) => Theme.lightMode);
  const dispatch = useDispatch();

  const classes = useStyles();
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  const changeTheme = () => {
    dispatch(setThemeMode(!lightMode));
  };

  return (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <Link to='/profile' className={classes.link}>
          <PersonOutlineIcon />
          <span>{CABINET_OPTIONS_LOGGED[LANGUAGE].profile}</span>
        </Link>
      </li>
      <li>
        <Link to='/wishlist' className={classes.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_LOGGED[LANGUAGE].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_LOGGED[LANGUAGE].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={classes.link}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_LOGGED[LANGUAGE].logOut}</span>
        </Link>
      </li>
    </ul>
  );
};

export default LoggedCabinet;
