import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
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
import ErrorBoundary from '../error-boundary';
import { preserveUser } from '../../redux/user/user.actions';
import { setCountPerPage } from '../../redux/products/products.actions';
import { getContacts } from '../../redux/contacts/contacts.actions';

const App = () => {
  const { isLoading, lightMode } = useSelector(({ Categories, Theme }) => ({
    isLoading: Categories.loading,
    lightMode: Theme.lightMode
  }));
  const dispatch = useDispatch();
  const styles = useStyles();

  let localStorageThemeMode = getFromLocalStorage('theme');
  const themeMode = localStorageThemeMode === LIGHT_THEME;
  if (!localStorageThemeMode) {
    localStorageThemeMode = LIGHT_THEME;
  }
  const themeValue = theme(localStorageThemeMode);
  const productsCount = getFromLocalStorage('countPerPage');

  useEffect(() => {
    dispatch(preserveUser());
  }, [dispatch]);

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
    <ErrorBoundary>
      <ThemeProvider theme={themeValue}>
        <CssBaseline />
        <Routes />
        <Chat />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
