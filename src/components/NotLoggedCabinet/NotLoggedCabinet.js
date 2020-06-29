import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from '../LoggedCabinet/LoggedCabinet.styles';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { LANGUAGE, CABINET_OPTIONS_NOT_LOGGED } from '../../configs';

const NotLoggedCabinet = () => {
  const lightMode = useSelector(({ Theme }) => Theme.lightMode);
  const dispatch = useDispatch();

  const styles = useStyles();
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  const changeTheme = () => {
    dispatch(setThemeMode(!lightMode));
  };

  return (
    <ul className={styles.cabinetDropdownList}>
      <li>
        <Link to='/wishlist' className={styles.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[LANGUAGE].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_NOT_LOGGED[LANGUAGE].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={styles.link}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[LANGUAGE].logIn}</span>
        </Link>
      </li>
    </ul>
  );
};

export default NotLoggedCabinet;
