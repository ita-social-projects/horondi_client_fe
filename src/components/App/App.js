import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { CssBaseline } from '@material-ui/core';
import Routes from '../../routes';
import { theme } from './app-theme/app.theme';
import { DARK_THEME, LIGHT_THEME } from '../../configs';
import CircularUnderLoad from '../LoadingBar';
import { useStyles } from './App.styles';

import { getCategories } from '../../redux/categories/categories.actions';

const App = () => {
  const { isLoading, lightMode } = useSelector(({ Categories, Theme }) => ({
    isLoading: Categories.loading,
    lightMode: Theme.lightMode
  }));
  const dispatch = useDispatch();
  const styles = useStyles();
  const themeMode = lightMode ? LIGHT_THEME : DARK_THEME;
  const themeValue = theme(themeMode);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
