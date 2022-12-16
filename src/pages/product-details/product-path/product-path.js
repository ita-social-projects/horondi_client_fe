import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './product-path.styles.js';
import routes from '../../../configs/routes';
import { countPerPage, URL_QUERIES_NAME } from '../../../configs/index.js';
import { ITEMS_PER_PAGE } from '../../product-list-page/constants';

const { pathToCategory, pathToMain, pathToAllProducts } = routes;

const ProductPath = ({ category, translationsKey }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const categoryId = category?._id;
  const countPerPageValue = ITEMS_PER_PAGE[0].value;
  const pathToCatologWithFilters = `${pathToCategory}?&${URL_QUERIES_NAME.page}=${URL_QUERIES_NAME.defaultPage}&${countPerPage}=${countPerPageValue}&${URL_QUERIES_NAME.categoryFilter}=%2C${categoryId}`;

  return (
    <div className={styles.paths}>
      <Link to={pathToMain}>{t('common.home')}</Link> {` / `}
      <Link to={pathToAllProducts}>{t('common.scrollbar.catalog')}</Link> {` / `}
      <Link to={pathToCatologWithFilters}>
        {category ? t(`${category.translationsKey}.name`) : null}
      </Link>
      {` / `}
      <span>{t(`${translationsKey}.name`)}</span>
    </div>
  );
};

export default ProductPath;
