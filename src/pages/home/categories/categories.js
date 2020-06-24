import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LoadingBar from '../../../components/LoadingBar';
import CategoryItem from '../category-item';
import { useStyles } from './categories.style';
import { watchCategoriesLoad } from '../../../redux/home-categories/categories.actions';
import { LANGUAGE } from '../../../configs';

const TEMPORARY_CATEGORIES = {
  0: {
    BACKPACKS: 'РЮКЗАКИ',
    BAGS: 'СУМКИ',
    ACCESSORIES: 'АКСЕСУАРИ'
  },
  1: {
    BACKPACKS: 'BACKPACKS',
    BAGS: 'BAGS',
    ACCESSORIES: 'ACCESSORIES'
  }
};

const TEMPORARY_IMAGES = [
  'https://horondi.blob.core.windows.net/horondi/categories/backpacks.jpg',
  'https://horondi.blob.core.windows.net/horondi/categories/bags.jpg',
  'https://horondi.blob.core.windows.net/horondi/categories/accessories.jpg'
];

const Categories = () => {
  const { categories, loading } = useSelector(({ categories }) => ({
    categories: categories.categories,
    loading: categories.loading
  }));
  const classes = useStyles();

  useEffect(() => {
    watchCategoriesLoad();
  }, [watchCategoriesLoad]);

  const items = Object.values(
    TEMPORARY_CATEGORIES[LANGUAGE]
  ).map((category, i) => (
    <CategoryItem
      key={i}
      categoryName={category}
      categoryImage={TEMPORARY_IMAGES[i]}
    />
  ));

  return (
    <>
      {!loading ? (
        <LoadingBar />
      ) : (
        <div className={classes.categories}>{items}</div>
      )}
    </>
  );
};

export default Categories;
