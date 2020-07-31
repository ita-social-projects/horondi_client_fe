import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import LoadingBar from '../../../components/loading-bar';
import CategoryItem from '../category-item';
import { useStyles } from './categories.style';
import { LANGUAGE } from '../../../configs';
import { HOMEPAGE_TITLES } from '../../../translations/homepage.translations';

const Categories = () => {
  const { categories, loading } = useSelector(({ Categories }) => ({
    categories: Categories.list,
    loading: Categories.loading
  }));
  const styles = useStyles();

  const categoriesList = categories
    ? categories.map(({ _id, name, images, categoryCode }) => (
      <CategoryItem
        key={_id}
        categoryCode={categoryCode}
        categoryName={name[LANGUAGE].value}
        categoryImage={images.large}
      />
    ))
    : null;

  return (
    <div className={styles.catalog}>
      <Typography variant='h2' className={styles.title}>
        {HOMEPAGE_TITLES[LANGUAGE].catalog}
      </Typography>
      {loading ? (
        <LoadingBar className={styles.loadingIndicator} />
      ) : (
        <div className={styles.categories}>{categoriesList}</div>
      )}
    </div>
  );
};

export default Categories;
