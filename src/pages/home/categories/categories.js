import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LoadingBar from '@/LoadingBar';
import { watchCategoriesLoad } from '../../../redux/home-categories/categories.actions';

const Categories = () => {
  const { categories, loading } = useSelector(({ categories }) => ({
    categories: categories.categories,
    loading: categories.loading
  }));

  useEffect(() => {
    watchCategoriesLoad();
  }, [watchCategoriesLoad]);

  const items = categories.map((category) => <div key={category._id} />);

  return <>{loading ? <LoadingBar /> : <div>{items}</div>}</>;
};

export default Categories;
