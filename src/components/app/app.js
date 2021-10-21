import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import ThemeContext from '../../context/theme-context';
import CategoriesContextProvider from '../../context/categories/categories-context';
import Routes from '../../routes';
import Chat from '../../containers/chat';
import { theme } from './app-theme/app.theme';
import { LIGHT_THEME } from '../../configs';
import { useStyles } from './app.styles';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { preserveUser } from '../../redux/user/user.actions';
import { getContacts } from '../../redux/contacts/contacts.actions';
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

  useEffect(() => {
    dispatch(preserveUser());
    dispatch(getContacts());
  }, []);

  useEffect(() => {
    setAppTheme(themeMode);
  });

  return (
    <div className={styles.mainBar}>
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={[appTheme, setAppTheme]}>
          <CategoriesContextProvider>
            <CssBaseline />
            <Routes />
            <Chat />
          </CategoriesContextProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
