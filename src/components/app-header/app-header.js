import React, { useLayoutEffect, useState, useContext } from 'react';
import {
  AppBar,
  IconButton as BurgerMenu,
  Switch,
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
import Language from '../../containers/language';
import ThemeContext from '../../context/theme-context';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';

import { HORONDI, DARK_THEME, LIGHT_THEME } from '../../configs';
import { useAppStyles } from '../app/app.styles';

const AppHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useContext(ThemeContext);
  const [sticky, setSticky] = useState(false);
  const theme = getFromLocalStorage('theme');
  const styles = useStyles();
  const appStyles = useAppStyles();

  const Header = clsx({
    [styles.header]: true,
    [styles.sticky]: sticky
  });

  useLayoutEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const currPoint = window.scrollY;
      currPoint > lastScrollTop ? setSticky(true) : setSticky(false);
      lastScrollTop = currPoint <= 0 ? 0 : currPoint;
    });
  }, []);

  const handleChangeTheme = (e) => {
    e.target.checked = !e.target.checked;
    setLightMode(!lightMode);
    setToLocalStorage('theme', !lightMode ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <div className={styles.root}>
      <AppBar position='static' className={Header}>
        <Toolbar className={`${appStyles.containerWideApp} ${styles.upperToolbar}`} disableGutters>
          <Typography>{t('header.workingDays')}</Typography>
          <div className={styles.theme}>
            <Typography>{t('header.lightTheme')}</Typography>
            <Switch checked={theme === 'dark'} onClick={handleChangeTheme} />
            <Typography>{t('header.darkTheme')}</Typography>
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
          <BurgerMenu className={styles.menuButton} onClick={() => setIsMenuOpen(true)}>
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
