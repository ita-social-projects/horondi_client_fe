import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HistoryIcon from '@material-ui/icons/History';

import { useStyles } from './header-profile.styles';
import { getWishlist } from '../../redux/wishlist/wishlist.actions';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { setToLocalStorage } from '../../services/local-storage.service';
import { logoutUser } from '../../redux/user/user.actions';
import { PROFILE_OPTIONS_VALUES } from '../../translations/header-profile.translations';
import { DARK_THEME, LIGHT_THEME, RETURN_PAGE } from '../../configs';
import routes from '../../const/routes';

const {
  pathToWishlist,
  pathToProfile,
  pathToOrderHistory,
  pathToRegister,
  pathToLogin,
  pathToMain
} = routes;

const HeaderProfile = ({ fromSideBar, setIsMenuOpen }) => {
  const { userData, language, lightMode } = useSelector(({ User, Language, Theme }) => ({
    userData: User.userData,
    lightMode: Theme.lightMode,
    language: Language.language
  }));

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  const history = useHistory();
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
    if (handleKeyDown(e)) {
      dispatch(setThemeMode(!lightMode));
      setAnchorEl(null);
      setToLocalStorage('theme', !lightMode ? LIGHT_THEME : DARK_THEME);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setAnchorEl(null);
  };

  const handleRedirect = (link) => {
    dispatch(push(link));
    setAnchorEl(null);
  };

  const PROFILE_STATIC_DATA = [
    {
      value: PROFILE_OPTIONS_VALUES[language].wishlist,
      icon: <FavoriteIcon />,
      clickHandler: () => {
        setIsMenuOpen(false);
        return handleRedirect(pathToWishlist);
      }
    },
    {
      value: PROFILE_OPTIONS_VALUES[language].changeTheme,
      icon: themeIcon,
      clickHandler: handleChangeTheme
    }
  ];

  const PROFILE_NOT_LOGGED_DATA = [
    {
      value: PROFILE_OPTIONS_VALUES[language].logIn,
      icon: <ExitToAppIcon />,
      clickHandler: () => {
        setIsMenuOpen(false);
        const pathName = history.location.pathname;
        const returnPath =
          (pathName === pathToRegister || pathName === pathToLogin ? pathToMain : pathName) +
          history.location.search;
        sessionStorage.setItem(RETURN_PAGE, returnPath);
        handleRedirect(pathToLogin);
      }
    }
  ];

  const PROFILE_LOGGED_DATA = [
    {
      value: PROFILE_OPTIONS_VALUES[language].profile,
      icon: <PersonOutlineIcon />,
      clickHandler: () => handleRedirect(pathToProfile)
    },
    {
      value: PROFILE_OPTIONS_VALUES[language].orderHistory,
      icon: <HistoryIcon />,
      clickHandler: () => handleRedirect(pathToOrderHistory)
    },
    {
      value: PROFILE_OPTIONS_VALUES[language].logOut,
      icon: <ExitToAppIcon />,
      clickHandler: handleLogout
    }
  ];

  const mappedProfileList = useMemo(
    () =>
      PROFILE_STATIC_DATA.concat(userData ? PROFILE_LOGGED_DATA : PROFILE_NOT_LOGGED_DATA).map(
        ({ value, icon, clickHandler }) => (
          <MenuItem key={value} onClick={clickHandler} disableGutters>
            {icon}
            {value}
          </MenuItem>
        )
      ),
    [userData, PROFILE_STATIC_DATA, PROFILE_LOGGED_DATA, PROFILE_NOT_LOGGED_DATA]
  );

  return (
    <div className={styles.profile} data-cy='profile'>
      {userData ? (
        <PersonIcon onClick={handleClick} onKeyDown={handleClick} tabIndex={0} />
      ) : (
        <PersonOutlineIcon onClick={handleClick} onKeyDown={handleClick} tabIndex={0} />
      )}
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
        {mappedProfileList}
      </Menu>
    </div>
  );
};

export default HeaderProfile;
