import React, { useEffect, useLayoutEffect, useState, useCallback } from 'react';
import {
  AppBar,
  IconButton as BurgerMenu,
  Typography,
  Toolbar,
  Link as PhoneLink
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useStyles } from './app-header.styles';
import { useCart } from '../../hooks/use-cart';
import Sidebar from '../../containers/sidebar';
import HeaderRightBar from '../../containers/header-right-bar';
import CurrencyComponent from '../../containers/currency';
import ThemeComponent from '../../containers/theme/theme-component';
import Language from '../../containers/language';
import HeaderNotificationBar from '../header-notification-bar';
import NotificationCertificateEnds from '../../containers/my-certificates/notification-certificate-ends';

import { HORONDI } from '../../configs';
import { useAppStyles } from '../app/app.styles';

const AppHeader = ({ expireDate }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [notification, setNotification] = useState(null);
  const styles = useStyles();
  const appStyles = useAppStyles();
  const { cart, cartOperations } = useCart();
  const { clearCart } = cartOperations;

  useEffect(
    () =>
      expireDate
        ? setNotification(<NotificationCertificateEnds expireDate={expireDate} />)
        : setNotification(null),
    [expireDate]
  );

  const Header = clsx({
    [styles.header]: true,
    [styles.sticky]: sticky,
    'mui-fixed': true
  });

  const clearCartHandler = useCallback(() => {
    if (cart.length) {
      clearCart();
    }
  }, [cart, clearCart]);

  useLayoutEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const currPoint = window.scrollY;
      currPoint > lastScrollTop ? setSticky(true) : setSticky(false);
      lastScrollTop = currPoint <= 0 ? 0 : currPoint;
    });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('storage', clearCartHandler);
    return () => {
      window.removeEventListener('storage', clearCartHandler);
    };
  }, [clearCartHandler]);

  return (
    <div className={styles.root}>
      <AppBar position='static' className={Header} data-testid='header-container'>
        <Toolbar className={`${appStyles.containerWideApp} ${styles.upperToolbar}`} disableGutters>
          <Typography>{t('header.workingDays')}</Typography>
          <div className={styles.theme}>
            <ThemeComponent />
          </div>
          <div className={styles.language}>
            <Language />
          </div>
          <div className={styles.currency}>
            <CurrencyComponent />
          </div>
          <PhoneLink href='tel:+380961737361' className={styles.callUs} variant='body1'>
            {t('header.callUs')}
          </PhoneLink>
        </Toolbar>
        <Toolbar className={`${appStyles.containerWideApp} ${styles.bottomToolbar}`} disableGutters>
          <BurgerMenu
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
            data-testid='burger-icon'
          >
            <MenuIcon />
          </BurgerMenu>
          <Typography variant='h5'>
            <Link to='/' className={styles.logo}>
              {HORONDI.toUpperCase()}
            </Link>
          </Typography>
          <HeaderRightBar setIsMenuOpen={setIsMenuOpen} />
        </Toolbar>
        {notification && (
          <HeaderNotificationBar closeNotificationBar={setNotification}>
            {notification}
          </HeaderNotificationBar>
        )}
      </AppBar>
      <div className={styles.headerspace} />
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default AppHeader;
