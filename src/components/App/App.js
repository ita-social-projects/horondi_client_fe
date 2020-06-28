import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import configureStore from '../../store/store';
import Routes from '../../routes';
import { theme } from './app-theme/app.theme';
import { DARK_THEME, LIGHT_THEME } from '../../configs';

const App = () => {
  const lightMode = useSelector(({ theme }) => theme.lightMode);
  const themeMode = lightMode ? LIGHT_THEME : DARK_THEME;
  const themeValue = theme(themeMode);
  const store = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeValue}>
        <Routes />
        <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
