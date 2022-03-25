import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Settings, History, PersonOutlineOutlined, Person } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useStyles } from './header-profile.styles';
import { logoutUser } from '../../redux/user/user.actions';
import { RETURN_PAGE, LANGUAGE } from '../../configs';
import routes from '../../configs/routes';
import { GiftCertificatesIcon } from '../../images/gift-certificates-icon';

import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import ThemeContext from '../../context/theme-context';
import { saveUserConfigs } from './profile.queries';
import i18n from '../../i18n';
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

  const [, setLightMode] = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  const history = useHistory();

  const configsUser = {
    currency: getFromLocalStorage('currency'),
    language: i18n.language,
    theme: getFromLocalStorage('theme')
  };

  const { firstName, lastName, email } = userData || {};

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
    if (userData) {
      const { theme, language, currency } = userData.configs;

      setLightMode(theme === 'light');
      setToLocalStorage('theme', theme);

      i18n.changeLanguage(language);
      setToLocalStorage(LANGUAGE, language);

      setToLocalStorage('currency', currency);
      dispatch(changeCurrency(currency));
    }
  }, [userData]);

  const handleLogIn = () => {
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
    <MenuItem key={value} onClick={clickHandler} disableGutters data-testid='menuItem'>
      {icon}
      {value}
    </MenuItem>
  ));

  return (
    <div className={styles.profile} data-cy='profile'>
      {userData ? (
        <Person onClick={handleClick} onKeyDown={handleClick} tabIndex={0} data-testid='iconIn' />
      ) : (
        <PersonOutlineOutlined
          onClick={handleLogIn}
          onKeyDown={handleLogIn}
          tabIndex={0}
          data-cy='iconOut'
        />
      )}
      <Menu
        data-testid='menu'
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
