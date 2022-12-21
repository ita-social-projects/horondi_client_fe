import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';

import CategoryItem from './category-item';
import { URL_QUERIES_NAME, countPerPage } from '../../../configs/index';
import { RESPONSIVE_CATEGORIES } from '../constants';

import { CategoriesContext } from '../../../context/categories/categories-context';
import { useStyles } from './categories-list.style';
import routes from '../../../configs/routes';

import './categories-carousel.css';
import { ITEMS_PER_PAGE } from '../../product-list-page/constants';

const CategoriesList = () => {
  const styles = useStyles();
  const { categories } = useContext(CategoriesContext);
  const { t } = useTranslation();

  const countPerPageValue = ITEMS_PER_PAGE[0].value;
  const { pathToCategory } = routes;

  const categoriesList = categories.map(({ _id, name, images, translationsKey }) => (
    <CategoryItem
      key={_id}
      categoryUrl={`${pathToCategory}?${URL_QUERIES_NAME.categoryFilter}=%2C${_id}&${countPerPage}=${countPerPageValue}&${URL_QUERIES_NAME.page}=${URL_QUERIES_NAME.defaultPage}`}
      categoryName={t(`${translationsKey}.name`)}
      categoryImageUrl={images.large}
    />
  ));

  return (
    <div id='catalog' data-section-style='light' className={styles.catalog}>
      <div className={styles.catalogInner}>
        <h2 className={styles.categoryTitle}> {t('home.ourProducts')} </h2>
        <Carousel
          responsive={RESPONSIVE_CATEGORIES}
          swipeable
          draggable={false}
          infinite
          removeArrowOnDeviceType={['desktop']}
        >
          {categoriesList}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoriesList;
