import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { CssBaseline } from '@material-ui/core';

import Routes from '../../routes';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import CircularUnderLoad from '../loading-bar';
import { useStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { setThemeMode } from '../../redux/theme/theme.actions';

import { getCategories } from '../../redux/categories/categories.actions';
import { changeCurrency } from '../../redux/currency/currency.actions';

const App = () => {
  const { isLoading, lightMode } = useSelector(({ Categories, Theme }) => ({
    isLoading: Categories.loading,
    lightMode: Theme.lightMode
  }));
  const dispatch = useDispatch();
  const styles = useStyles();

  const localStorageThemeMode = getFromLocalStorage('theme');
  const themeMode = localStorageThemeMode === LIGHT_THEME;
  const themeValue = theme(localStorageThemeMode);
  const currencyInLocalStorage = getFromLocalStorage('currency') || 0;

  useEffect(() => {
    dispatch(changeCurrency(currencyInLocalStorage));
    dispatch(getCategories());
  }, [dispatch, currencyInLocalStorage]);

  useEffect(() => {
    dispatch(setThemeMode(themeMode));
  }, [lightMode, dispatch, themeMode]);

  if (isLoading) {
    return (
      <div className={styles.center}>
        <CircularUnderLoad />
      </div>
    );
  }

  return (
    <ThemeProvider theme={themeValue}>
      <CssBaseline />
      <Routes />
      <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
    </ThemeProvider>
  );
};

export default App;
