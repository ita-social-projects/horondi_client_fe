import React, { useLayoutEffect, useState } from 'react';
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
import Sidebar from '../../containers/sidebar';
import HeaderRightBar from '../../containers/header-right-bar';
import CurrencyComponent from '../../containers/currency';
import ThemeComponent from '../../containers/theme/theme-component';
import Language from '../../containers/language';

import { HORONDI } from '../../configs';
import { useAppStyles } from '../app/app.styles';

const AppHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const styles = useStyles();
  const appStyles = useAppStyles();

  const Header = clsx({
    [styles.header]: true,
    [styles.sticky]: sticky,
    'mui-fixed': true
  });

  useLayoutEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const currPoint = window.scrollY;
      currPoint > lastScrollTop ? setSticky(true) : setSticky(false);
      lastScrollTop = currPoint <= 0 ? 0 : currPoint;
    });
  }, []);

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
      </AppBar>
      <div className={styles.headerspace} />
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default AppHeader;
