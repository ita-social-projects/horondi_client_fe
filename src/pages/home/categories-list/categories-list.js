import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';

import CategoryItem from './category-item';
import { URL_QUERIES_NAME, countPerPage } from '../../../configs/index';
import { RESPONSIVE_CATEGORIES } from '../constants';

import { CategoriesContext } from '../../../context/categories/categories-context';
import { useStyles } from './categories-list.style';

import './categories-carousel.css';
import { ITEMS_PER_PAGE } from '../../product-list-page/constants';

const CategoriesList = () => {
  const styles = useStyles();
  const { categories } = useContext(CategoriesContext);
  const { t } = useTranslation();

  const countPerPageValue = ITEMS_PER_PAGE[0].value;

  const categoriesList = categories.map(({ _id, name, images, translationsKey }) => (
    <CategoryItem
      key={_id}
      categoryUrl={`${getCategoryURL(name)}?${
        URL_QUERIES_NAME.categoryFilter
      }=${_id}&page=1&${countPerPage}=${countPerPageValue}`}
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

export const getCategoryURL = (category) => {
  const [filteredCategory] = category.filter((item) => item.lang === 'en');

  if (filteredCategory.value) {
    return `catalog/${filteredCategory.value.toLowerCase()}`;
  }
};

export default CategoriesList;
