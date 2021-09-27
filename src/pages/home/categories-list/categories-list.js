import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';

import CategoryItem from './category-item';
import {
  URL_LANGUAGE,
  RESPONSIVE_CATEGORIES,
  URL_QUERIES_NAME,
  countPerPage
} from '../../../configs';

import { useStyles } from './categories-list.style';
import './categories-carousel.css';

const CategoriesList = () => {
  const { categories, language, quantityPerPage } = useSelector(
    ({ Categories, Language, Products }) => ({
      categories: Categories.list,
      language: Language.language,
      quantityPerPage: Products.countPerPage
    })
  );
  const styles = useStyles();

  const categoriesList = categories
    ? categories
      .map(({ _id, name, images }) => (
        <CategoryItem
          key={_id}
          categoryUrl={`${getCategoryURL(name)}?${
            URL_QUERIES_NAME.categoryFilter
          }=${_id}&page=1&${countPerPage}=${quantityPerPage}`}
          categoryName={name[language].value}
          categoryImageUrl={images.large}
          language={language}
        />
      ))
      .filter((val) => val)
    : null;

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
