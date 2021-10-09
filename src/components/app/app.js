import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Routes from '../../routes';
import Chat from '../../containers/chat';
import SearchBarList from '../../containers/search-bar-list';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import { useStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { getCategories } from '../../redux/categories/categories.actions';
import { preserveUser } from '../../redux/user/user.actions';
import {
  getAllFilters,
  setCountPerPage,
  getFiltredProducts
} from '../../redux/products/products.actions';
import { getContacts } from '../../redux/contacts/contacts.actions';
import { selectLightModeAndLocation } from '../../redux/selectors/multiple.selectors';

const App = () => {
  const { lightMode, location } = useSelector(selectLightModeAndLocation);
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
    dispatch(getCategories());
    dispatch(getContacts());
    dispatch(getAllFilters());
    dispatch(getFiltredProducts({}));
  }, []);

  useEffect(() => {
    dispatch(setCountPerPage(productsCount));
  }, [dispatch, productsCount]);

  useEffect(() => {
    dispatch(setThemeMode(themeMode));
  }, [lightMode, dispatch, themeMode]);

  return (
    <div className={styles.mainBar}>
      <ThemeProvider theme={themeValue}>
        <CssBaseline />
        <Routes />
        <Chat />
        <SearchBarList />
      </ThemeProvider>
    </div>
  );
};

export default App;
