import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import useTranslationsLoad from '../../hooks/use-translations-load';

import ThemeContext from '../../context/theme-context';
import CategoriesContextProvider from '../../context/categories/categories-context';
import Routes from '../../routes';
import Chat from '../../containers/chat';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import { useAppStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { preserveUser } from '../../redux/user/user.actions';
import { selectLocation } from '../../utils/multiple.selectors';
import { SnackBarContextProvider } from '../../context/snackbar-context';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import CurrencyContextProvider from '../../context/currency-context';
import WishlistContextProvider from '../../context/wishlist-context';
import CartContextProvider from '../../context/cart-context';

const App = () => {
  const [appTheme, setAppTheme] = useState(true);
  const { location } = useSelector(selectLocation);
  const dispatch = useDispatch();
  const styles = useAppStyles({ isHome: location === '/' });
  const isLoading = useTranslationsLoad();

  let localStorageThemeMode = getFromLocalStorage('theme');
  const themeMode = localStorageThemeMode === LIGHT_THEME;
  if (!localStorageThemeMode) {
    localStorageThemeMode = LIGHT_THEME;
  }

  useEffect(() => {
    dispatch(preserveUser());
  }, [dispatch]);

  const themeValue = theme(localStorageThemeMode);

  useEffect(() => {
    setAppTheme(themeMode);
  }, [themeMode]);

  if (isLoading) return errorOrLoadingHandler(null, isLoading);

  return (
    <div className={styles.mainBar}>
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={[appTheme, setAppTheme]}>
          <CategoriesContextProvider>
            <SnackBarContextProvider>
              <CurrencyContextProvider>
                <WishlistContextProvider>
                  <CartContextProvider>
                    <CssBaseline />
                    <Routes />
                    <Chat />
                  </CartContextProvider>
                </WishlistContextProvider>
              </CurrencyContextProvider>
            </SnackBarContextProvider>
          </CategoriesContextProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
