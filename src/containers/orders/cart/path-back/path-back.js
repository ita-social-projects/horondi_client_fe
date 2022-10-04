import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../../configs/routes';
import { useStyles } from './path-back.styles';

const { pathToMain } = routes;

const PathBack = ({ categoryLink, categoryText, currentPageText }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.path}>
      <div className={styles.pathLine}>
        <Link to={pathToMain}>{t('cart.pathBack.toMain')}</Link> /{' '}
        <Link to={categoryLink}>{t(categoryText)}</Link> / {t(currentPageText)}
      </div>
    </div>
  );
};

export default PathBack;
