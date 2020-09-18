import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { CssBaseline } from '@material-ui/core';

import Routes from '../../routes';
import Chat from '../../containers/chat';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import { useStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { setThemeMode } from '../../redux/theme/theme.actions';

import { getCategories } from '../../redux/categories/categories.actions';

import { Loader } from '../loader/loader';
import { setCountPerPage } from '../../redux/products/products.actions';
import { getContacts } from '../../redux/contacts/contacts.actions';

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
  const productsCount = getFromLocalStorage('countPerPage');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setCountPerPage(productsCount));
  }, [dispatch, productsCount]);
  useEffect(() => {
    dispatch(setThemeMode(themeMode));
  }, [lightMode, dispatch, themeMode]);

  if (isLoading) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  return (
    <ThemeProvider theme={themeValue}>
      <CssBaseline />
      <Routes />
      <Chat />
      <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
    </ThemeProvider>
  );
};

export default App;
