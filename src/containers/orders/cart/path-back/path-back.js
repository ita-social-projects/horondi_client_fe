import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../../const/routes';
import { useStyles } from './path-back.styles';

const { pathToCategory, pathToMain } = routes;

const PathBack = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.path}>
      <div className={styles.pathLine}>
        <Link to={pathToMain}>{t('cart.pathBack.toMain')}</Link> /{' '}
        <Link to={pathToCategory}>{t('cart.pathBack.toCatalog')}</Link> /{' '}
        {t('cart.pathBack.yourCart')}
      </div>
    </div>
  );
};

export default PathBack;
