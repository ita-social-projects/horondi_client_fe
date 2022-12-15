import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../../configs/routes';
import { useStyles } from './path-back.styles';

const { pathToMain } = routes;

const PathBack = ({ categoryLink, categoryText, currentPageText, className }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={`${styles.path} ${className}`}>
      <div className={styles.pathLine}>
        <Link to={pathToMain}>{t('cart.pathBack.toMain')}</Link>
        {` / `}
        <Link to={categoryLink}>{t(categoryText)}</Link>
        {` / `}
        <span>{t(currentPageText)}</span>
      </div>
    </div>
  );
};

export default PathBack;
