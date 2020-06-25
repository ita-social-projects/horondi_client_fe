import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBar from '../../../components/LoadingBar';
import CategoryItem from '../category-item';
import { useStyles } from './categories.style';
import { getCategories } from '../../../redux/home-categories/categories.actions';
import { LANGUAGE } from '../../../configs';

const Categories = () => {
  const { categories, loading } = useSelector(({ categories }) => ({
    categories: categories.categories,
    loading: categories.loading
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const items = categories.map(({ _id, name, images, categoryCode }) => (
    <CategoryItem
      key={_id}
      categoryCode={categoryCode}
      categoryName={name[LANGUAGE].value}
      categoryImage={images.large}
    />
  ));

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className={classes.categories}>{items}</div>
      )}
    </>
  );
};

export default Categories;
