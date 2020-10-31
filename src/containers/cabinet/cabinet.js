import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HistoryIcon from '@material-ui/icons/History';

import { useStyles } from './cabinet.styles';
import { getWishlist } from '../../redux/wishlist/wishlist.actions';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { setToLocalStorage } from '../../services/local-storage.service';
import { setUser } from '../../redux/user/user.actions';
import { CABINET_OPTIONS_VALUES } from '../../translations/cabinet.translations';
import { DARK_THEME, LIGHT_THEME } from '../../configs';

const Cabinet = () => {
  const { userData, language, lightMode } = useSelector(
    ({ User, Language, Theme }) => ({
      userData: User.userData,
      lightMode: Theme.lightMode,
      language: Language.language
    })
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const styles = useStyles({ logged: !!userData });
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  const handleKeyDown = (e) => {
    e.persist();
    return !(e.type === 'keydown' && e.key !== 'Enter');
  };

  const handleClick = (e) => {
    handleKeyDown(e) && setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTheme = (e) => {
    e.persist();
    if (e.type === 'keydown' && e.key !== 'Enter') {
      return;
    }
    dispatch(setThemeMode(!lightMode));
    setToLocalStorage('theme', !lightMode ? LIGHT_THEME : DARK_THEME);
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    setToLocalStorage('accessToken', null);
  };

  const handleRedirect = (link) => {
    dispatch(push(link));
  };

  const CABINET_STATIC_DATA = [
    {
      value: CABINET_OPTIONS_VALUES[language].wishlist,
      icon: <FavoriteIcon />,
      clickHandler: () => handleRedirect('/wishlist')
    },
    {
      value: CABINET_OPTIONS_VALUES[language].changeTheme,
      icon: themeIcon,
      clickHandler: handleChangeTheme
    }
  ];

  const CABINET_NOT_LOGGED_DATA = [
    {
      value: CABINET_OPTIONS_VALUES[language].logIn,
      icon: <ExitToAppIcon />,
      clickHandler: () => handleRedirect('/login')
    }
  ];

  const CABINET_LOGGED_DATA = [
    {
      value: CABINET_OPTIONS_VALUES[language].profile,
      icon: <PersonOutlineIcon />,
      clickHandler: () => handleRedirect('/profile')
    },
    {
      value: CABINET_OPTIONS_VALUES[language].orderHistory,
      icon: <HistoryIcon />,
      clickHandler: () => handleRedirect('/order-history')
    },
    {
      value: CABINET_OPTIONS_VALUES[language].logOut,
      icon: <ExitToAppIcon />,
      clickHandler: handleLogout
    }
  ];

  const mappedCabinetList = useMemo(
    () =>
      CABINET_STATIC_DATA.concat(
        userData ? CABINET_LOGGED_DATA : CABINET_NOT_LOGGED_DATA
      ).map(({ value, icon, clickHandler }) => (
        <MenuItem key={value} onClick={clickHandler} disableGutters>
          {icon}
          {value}
        </MenuItem>
      )),
    [userData, lightMode]
  );

  return (
    <div className={styles.cabinet} data-cy='cabinet'>
      <PersonOutlineIcon
        onClick={handleClick}
        onKeyDown={handleClick}
        tabIndex={0}
      />
      <Menu
        className={styles.list}
        anchorEl={anchorEl}
        keepMounted
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {mappedCabinetList}
      </Menu>
    </div>
  );
};

export default Cabinet;
