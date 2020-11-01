import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from '../logged-cabinet/logged-cabinet.styles';
import { CABINET_OPTIONS_NOT_LOGGED } from '../../translations/cabinet.translations';

const NotLoggedCabinet = ({ onChangeTheme }) => {
  const { lightMode, language } = useSelector(({ Theme, Language }) => ({
    lightMode: Theme.lightMode,
    language: Language.language
  }));

  const styles = useStyles();
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  return (
    <ul className={styles.cabinetDropdownList} data-cy='cabinet-dropdown'>
      <li>
        <Link to='/wishlist' className={styles.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={onChangeTheme} onKeyDown={onChangeTheme} tabIndex={0}>
        {themeIcon}
        <span>{CABINET_OPTIONS_NOT_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={styles.link}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[language].logIn}</span>
        </Link>
      </li>
    </ul>
  );
};

export default NotLoggedCabinet;
