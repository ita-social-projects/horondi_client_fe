import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import Routes from '../../routes';
import { theme } from './app-theme/app.theme';
import { DARK_THEME, LIGHT_THEME } from '../../configs';

const App = () => {
  const lightMode = useSelector(({ lightMode }) => lightMode);
  const themeMode = lightMode ? LIGHT_THEME : DARK_THEME;
  const themeValue = theme(themeMode);

  return (
    <ThemeProvider theme={themeValue}>
      <Routes />
      <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
    </ThemeProvider>
  );
};

export default App;
