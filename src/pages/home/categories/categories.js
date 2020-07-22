import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import LoadingBar from '../../../components/LoadingBar';
import CategoryItem from '../category-item';
import { useStyles } from './categories.style';
import { LANGUAGE, HOMEPAGE_TITLES, URL_LANGUAGE } from '../../../configs';

const Categories = () => {
  const { categories, loading } = useSelector(({ Categories }) => ({
    categories: Categories.list,
    loading: Categories.loading
  }));
  const styles = useStyles();

  const categoriesList = categories
    ? categories.map(({ _id, name, images, isMain }) =>
      isMain ? (
        <CategoryItem
          key={_id}
          categoryUrl={getCategoryURL(name)}
          categoryName={name[LANGUAGE].value}
          categoryImage={images.large}
        />
      ) : null
    )
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

export const getCategoryURL = (category) => {
  const [filteredCategory] = category.filter(
    (item) => item.lang === URL_LANGUAGE
  );

  if (filteredCategory.value) {
    return filteredCategory.value.toLowerCase();
  }
};

export default Categories;
