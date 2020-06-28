import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import LoadingBar from '../../../components/LoadingBar';
import CategoryItem from '../category-item';
import { useStyles } from './categories.style';
import { HOMEPAGE_TITLES } from '../../../configs';

const Categories = () => {
  const { categories, loading, language } = useSelector(
    ({ categories, language }) => ({
      categories: categories.list,
      loading: categories.loading,
      language: language.language
    })
  );
  const classes = useStyles();

  const items = categories.map(({ _id, name, images, categoryCode }) => (
    <CategoryItem
      key={_id}
      categoryCode={categoryCode}
      categoryName={name[language].value}
      categoryImage={images.large}
    />
  ));

  return (
    <div className={classes.catalog}>
      <Typography variant='h2' className={classes.title}>
        {HOMEPAGE_TITLES[language].catalog}
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
