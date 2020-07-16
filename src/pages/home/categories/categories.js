import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import LoadingBar from '../../../components/loading-bar';
import CategoryItem from './category-item';
import { useStyles } from './categories.style';
import { HOMEPAGE_TITLES } from '../../../configs';

const Categories = () => {
  const { categories, loading, language } = useSelector(
    ({ Categories, Language }) => ({
      categories: Categories.list,
      loading: Categories.loading,
      language: Language.language
    })
  );
  const styles = useStyles();

  const categoriesList = categories
    ? categories.map(({ _id, name, images, categoryCode }) => (
      <CategoryItem
        key={_id}
        categoryCode={categoryCode}
        categoryName={name[language].value}
        categoryImage={images.large}
      />
    ))
    : null;

  return (
    <div className={styles.catalog}>
      <Typography variant='h2' className={styles.title}>
        {HOMEPAGE_TITLES[language].catalog}
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
