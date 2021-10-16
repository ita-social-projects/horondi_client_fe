import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import ThemeContext from '../../context/theme-context';
import Routes from '../../routes';
import Chat from '../../containers/chat';
import SearchBarList from '../../containers/search-bar-list';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import { useStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { getCategories } from '../../redux/categories/categories.actions';
import { preserveUser } from '../../redux/user/user.actions';
import {
  getAllFilters,
  setCountPerPage,
  getFiltredProducts
} from '../../redux/products/products.actions';
import { selectLocation } from '../../redux/selectors/multiple.selectors';

const App = () => {
  const [appTheme, setAppTheme] = useState(true);
  const { location } = useSelector(selectLocation);
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
    dispatch(getAllFilters());
    dispatch(getFiltredProducts({}));
  }, []);

  useEffect(() => {
    dispatch(setCountPerPage(productsCount));
  }, [dispatch, productsCount]);

  useEffect(() => {
    setAppTheme(themeMode);
  });

  return (
    <div className={styles.mainBar}>
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={[appTheme, setAppTheme]}>
          <CssBaseline />
          <Routes />
          <Chat />
          <SearchBarList />
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
