import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import LoadingBar from '../../../components/LoadingBar';
import CategoryItem from '../category-item';
import { useStyles } from './categories.style';
import { getCategories } from '../../../redux/categories/categories.actions';
import { LANGUAGE, HOMEPAGE_TITLES } from '../../../configs';

const Categories = () => {
  const { categories, loading } = useSelector(({ categories }) => ({
    categories: categories.categories,
    loading: categories.loading
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  /* useEffect(() => {
    dispatch(getCategories());
  }, []); */

  const items = categories.map(({ _id, name, images, categoryCode }) => (
    <CategoryItem
      key={_id}
      categoryCode={categoryCode}
      categoryName={name[LANGUAGE].value}
      categoryImage={images.large}
    />
  ));

  return (
    <div className={classes.catalog}>
      <Typography variant='h2' className={classes.title}>
        {HOMEPAGE_TITLES[LANGUAGE].catalog}
      </Typography>
      {loading ? (
        <LoadingBar className={classes.loadingIndicator} />
      ) : (
        <div className={classes.categories}>{items}</div>
      )}
    </div>
  );
};

export default Categories;
