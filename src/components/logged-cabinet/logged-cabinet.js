import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './logged-cabinet.styles';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { CABINET_OPTIONS_LOGGED } from '../../configs';

const LoggedCabinet = () => {
  const { lightMode, language } = useSelector(({ Theme, Language }) => ({
    lightMode: Theme.lightMode,
    language: Language.language
  }));
  const dispatch = useDispatch();

  const styles = useStyles();
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  const changeTheme = () => {
    dispatch(setThemeMode(!lightMode));
  };

  return (
    <ul className={styles.cabinetDropdownList}>
      <li>
        <Link to='/profile' className={styles.link}>
          <PersonOutlineIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].profile}</span>
        </Link>
      </li>
      <li>
        <Link to='/wishlist' className={styles.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={styles.link}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].logOut}</span>
        </Link>
      </li>
    </ul>
  );
};

export default LoggedCabinet;
