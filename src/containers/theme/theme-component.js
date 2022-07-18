import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Typography } from '@material-ui/core';
import { DARK_THEME, LIGHT_THEME } from '../../configs';
import ThemeContext from '../../context/theme-context';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { useStyles } from './theme.styles';

const ThemeComponent = () => {
  const { t } = useTranslation();
  const [lightMode, setLightMode] = useContext(ThemeContext);
  const theme = getFromLocalStorage('theme');
  const styles = useStyles();

  const handleChangeTheme = (e) => {
    e.target.checked = !e.target.checked;
    setLightMode(!lightMode);
    setToLocalStorage('theme', !lightMode ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <div className={styles.root}>
      <Typography>{t('header.lightTheme')}</Typography>
      <Switch checked={theme === 'dark'} onClick={handleChangeTheme} data-testid='switch-theme' />
      <Typography>{t('header.darkTheme')}</Typography>
    </div>
  );
};

export default ThemeComponent;
