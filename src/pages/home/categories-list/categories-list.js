import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { useQuery } from '@apollo/client';

import CategoryItem from './category-item';
import {
  URL_LANGUAGE,
  RESPONSIVE_CATEGORIES,
  URL_QUERIES_NAME,
  countPerPage
} from '../../../configs';
import { getAllCategoriesQuery } from './operations/categories.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import { useStyles } from './categories-list.style';

import './categories-carousel.css';

const CategoriesList = () => {
  const styles = useStyles();
  const [categories, setCategories] = useState([]);
  const { language, quantityPerPage } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    quantityPerPage: Products.countPerPage
  }));

  const { loading, error } = useQuery(getAllCategoriesQuery, {
    onCompleted: (data) => setCategories(data.getAllCategories.items)
  });

  const categoriesList = useMemo(
    () =>
      categories.map(({ _id, name, images }) => (
        <CategoryItem
          key={_id}
          categoryUrl={`${getCategoryURL(name)}?${
            URL_QUERIES_NAME.categoryFilter
          }=${_id}&page=1&${countPerPage}=${quantityPerPage}`}
          categoryName={name[language].value}
          categoryImageUrl={images.large}
          language={language}
        />
      )),
    [categories, styles]
  );

  if (loading || error) return errorOrLoadingHandler(error, loading);

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
