import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import routes from '../../../../const/routes';
import { useStyles } from './path-back.styles';

const { pathToCategory, pathToMain } = routes;

const PathBack = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { isLightTheme } = useSelector(({ Theme }) => ({
    isLightTheme: Theme.lightMode
  }));

  return (
    <div className={isLightTheme ? styles.whiteThemePath : styles.darkThemePath}>
      <div className={styles.pathLine}>
        <Link to={pathToMain}>{t('cart.pathBack.toMain')}</Link> /{' '}
        <Link to={pathToCategory}>{t('cart.pathBack.toCatalog')}</Link> /{' '}
        {t('cart.pathBack.yourCart')}
      </div>
    </div>
  );
};

export default PathBack;
