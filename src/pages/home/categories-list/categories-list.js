import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './categories-list.style';
import LoadingBar from '../../../components/loading-bar';
import CategoryItem from './category-item';
import { URL_LANGUAGE, IMG_URL } from '../../../configs';
import { getImage } from '../../../utils/imageLoad'
import { HOMEPAGE_TITLES } from '../../../translations/homepage.translations';

const CategoriesList = () => {
  const { categories, loading, language } = useSelector(
    ({ Categories, Language }) => ({
      categories: Categories.list,
      loading: Categories.loading,
      language: Language.language
    })
  );
  const styles = useStyles();
 
  const categoriesList = categories
    ? categories.map(({ _id, name, images, isMain }) =>
      isMain ? (
        <CategoryItem
          key={_id}
          categoryUrl={getCategoryURL(name)}
          categoryName={name[language].value}
          categoryImage={getImage(`${IMG_URL}${images.large}`)}
        />
      ) : null
    )
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

export const getCategoryURL = (category) => {
  const [filteredCategory] = category.filter(
    (item) => item.lang === URL_LANGUAGE
  );

  if (filteredCategory.value) {
    return filteredCategory.value.toLowerCase();
  }
};

export default CategoriesList;
