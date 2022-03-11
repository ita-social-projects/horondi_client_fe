import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Settings, History, PersonOutlineOutlined, Person } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from '@apollo/client';
import { useStyles } from './header-profile.styles';
import { logoutUser } from '../../redux/user/user.actions';
import { RETURN_PAGE, DARK_THEME, LIGHT_THEME, LANGUAGE } from '../../configs';
import routes from '../../configs/routes';
import { GiftCertificatesIcon } from '../../images/gift-certificates-icon';

import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import ThemeContext from '../../context/theme-context';
import { saveUserConfigs, userQuery } from './profile.queries';
import { changeLanguage } from '../../redux/language/language.actions';
import i18n from '../../i18n';
import { LANGUAGES_LIST } from '../language/constants';
import { changeCurrency } from '../../redux/currency/currency.actions';

const {
  pathToProfile,
  pathToOrderHistory,
  pathToRegister,
  pathToLogin,
  pathToMain,
  pathToMyCertificates
} = routes;

const HeaderProfile = ({ fromSideBar, setIsMenuOpen }) => {
  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));

  const [lightMode, setLightMode] = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  const history = useHistory();

  const { data: user, refetch } = useQuery(userQuery, {
    variables: {
      id: userData?._id
    }
  });

  const configsUser = {
    currency: getFromLocalStorage('currency'),
    language: getFromLocalStorage('language'),
    theme: getFromLocalStorage('theme')
  };

  const { firstName, lastName, email } = user?.getUserById || {};

  const [saveConfigs] = useMutation(saveUserConfigs, {
    variables: {
      user: {
        firstName,
        lastName,
        email,
        configs: configsUser
      },
      id: userData?._id
    }
  });

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

  useEffect(() => {
    if (user) {
      refetch();
      const { theme, language, currency } = user?.getUserById.configs || '';

      setLightMode(theme === 'light');
      setToLocalStorage('theme', !lightMode ? LIGHT_THEME : DARK_THEME);

      i18n.changeLanguage(LANGUAGES_LIST[language].lang.toLowerCase());
      setToLocalStorage(LANGUAGE, language);
      dispatch(changeLanguage(language));

      setToLocalStorage('currency', currency);
      dispatch(changeCurrency(currency));
    }
  }, [user]);

  const handleLogIn = async () => {
    setIsMenuOpen(false);
    const pathName = history.location.pathname;
    const returnPath =
      (pathName === pathToRegister || pathName === pathToLogin ? pathToMain : pathName) +
      history.location.search;
    sessionStorage.setItem(RETURN_PAGE, returnPath);
    handleRedirect(pathToLogin);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    await saveConfigs();
    dispatch(logoutUser());
    setToLocalStorage('theme', lightMode ? LIGHT_THEME : DARK_THEME);
  };

  const handleRedirect = (link) => {
    dispatch(push(link));
    setAnchorEl(null);
  };

  const PROFILE_DATA = [
    {
      value: t('headerProfile.profile'),
      icon: <Settings />,
      clickHandler: () => {
        setIsMenuOpen(false);
        return handleRedirect(pathToProfile);
      }
    },
    {
      value: t('headerProfile.orderHistory'),
      icon: <History />,
      clickHandler: () => {
        setIsMenuOpen(false);
        return handleRedirect(pathToOrderHistory);
      }
    },
    {
      value: t('headerProfile.myCertificates'),
      icon: <GiftCertificatesIcon viewBox='0 -3 24 24' />,
      clickHandler: () => {
        setIsMenuOpen(false);
        return handleRedirect(pathToMyCertificates);
      }
    },
    {
      value: t('common.logOut'),
      icon: <ExitToAppIcon />,
      clickHandler: () => {
        setIsMenuOpen(false);
        return handleLogout();
      }
    }
  ];

  const mappedProfileList = PROFILE_DATA.map(({ value, icon, clickHandler }) => (
    <MenuItem key={value} onClick={clickHandler} disableGutters data-cy='menuItem'>
      {icon}
      {value}
    </MenuItem>
  ));

  return (
    <div className={styles.profile} data-cy='profile'>
      {userData ? (
        <Person onClick={handleClick} onKeyDown={handleClick} tabIndex={0} data-cy='iconIn' />
      ) : (
        <PersonOutlineOutlined
          onClick={handleLogIn}
          onKeyDown={handleLogIn}
          tabIndex={0}
          data-cy='iconOut'
        />
      )}
      <Menu
        data-cy='menu'
        className={styles.list}
        anchorEl={anchorEl}
        keepMounted
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
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
