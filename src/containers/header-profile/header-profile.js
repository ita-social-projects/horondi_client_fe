import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Settings, History, PersonOutlineOutlined, Person } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';
import { useStyles } from './header-profile.styles';
import { logoutUser } from '../../redux/user/user.actions';
import { RETURN_PAGE } from '../../configs';
import routes from '../../configs/routes';
import { GiftCertificatesIcon } from '../../images/gift-certificates-icon';

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

  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  const history = useHistory();

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

  const handleLogIn = () => {
    setIsMenuOpen(false);
    const pathName = history.location.pathname;
    const returnPath =
      (pathName === pathToRegister || pathName === pathToLogin ? pathToMain : pathName) +
      history.location.search;
    sessionStorage.setItem(RETURN_PAGE, returnPath);
    handleRedirect(pathToLogin);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setAnchorEl(null);
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
