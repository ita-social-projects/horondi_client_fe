import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { getBurgerMenuLinks } from '../../redux/burger-menu/burger-menu.actions';
import Routes from '../../routes';
import Chat from '../../containers/chat';
import SearchBarList from '../../containers/search-bar-list';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import { useStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { getCategories } from '../../redux/categories/categories.actions';
import { Loader } from '../loader/loader';
import { preserveUser } from '../../redux/user/user.actions';
import { setCountPerPage } from '../../redux/products/products.actions';
import { getContacts } from '../../redux/contacts/contacts.actions';

const App = () => {
  const { isLoading, lightMode, location } = useSelector(
    ({ Categories, Theme, router }) => ({
      isLoading: Categories.loading,
      lightMode: Theme.lightMode,
      location: router.location.pathname
    })
  );
  const dispatch = useDispatch();
  const styles = useStyles({ isHome: location === '/' });

  let localStorageThemeMode = getFromLocalStorage('theme');
  const themeMode = localStorageThemeMode === LIGHT_THEME;
  if (!localStorageThemeMode) {
    localStorageThemeMode = LIGHT_THEME;
  }
  const themeValue = theme(localStorageThemeMode);
  const productsCount = getFromLocalStorage('countPerPage');

  useEffect(() => {
    dispatch(preserveUser());
    dispatch(getBurgerMenuLinks());
    dispatch(getCategories());
    dispatch(getContacts());
  }, []);

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
      <SearchBarList />
    </ThemeProvider>
  );
};

export default App;
