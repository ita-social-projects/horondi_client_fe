import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './product-path.styles.js';
import routes from '../../../configs/routes';

const { pathToCategory, pathToMain, pathToAllProducts } = routes;

const ProductPath = ({ category, translationsKey }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.paths}>
      <Link to={pathToMain}>{t('common.home')}</Link> {`\u00A0 / \u00A0`}
      <Link to={pathToAllProducts}>{t('common.scrollbar.catalog')}</Link> {`\u00A0 / \u00A0`}
      <Link to={pathToCategory}>{category ? t(`${category.translationsKey}.name`) : null}</Link>
      {`\u00A0 / \u00A0`}
      {t(`${translationsKey}.name`)}
    </div>
  );
};

export default ProductPath;
