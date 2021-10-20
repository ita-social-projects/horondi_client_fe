import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';

import CategoryItem from './category-item';
import {
  URL_LANGUAGE,
  RESPONSIVE_CATEGORIES,
  URL_QUERIES_NAME,
  countPerPage
} from '../../../configs';
import { CategoriesContext } from '../../../context/categories-context';
import { useStyles } from './categories-list.style';

import './categories-carousel.css';

const CategoriesList = () => {
  const styles = useStyles();
  const { categories } = useContext(CategoriesContext);
  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const { quantityPerPage } = useSelector(({ Products }) => ({
    quantityPerPage: Products.countPerPage
  }));

  const categoriesList = categories.map(({ _id, name, images }) => (
    <CategoryItem
      key={_id}
      categoryUrl={`${getCategoryURL(name)}?${
        URL_QUERIES_NAME.categoryFilter
      }=${_id}&page=1&${countPerPage}=${quantityPerPage}`}
      categoryName={name[language].value}
      categoryImageUrl={images.large}
      language={language}
    />
  ));

  return (
    <div id='catalog' data-section-style='light' className={styles.catalog}>
      <Carousel responsive={RESPONSIVE_CATEGORIES} swipeable>
        {categoriesList}
      </Carousel>
    </div>
  );
};

export const getCategoryURL = (category) => {
  const [filteredCategory] = category.filter((item) => item.lang === URL_LANGUAGE);

  if (filteredCategory.value) {
    return `catalog/${filteredCategory.value.toLowerCase()}`;
  }
};

export default CategoriesList;
