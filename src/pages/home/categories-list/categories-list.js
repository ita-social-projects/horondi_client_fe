import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-multi-carousel';

import CircularLoadingBar from '../../../components/circular-loading-bar';
import CategoryItem from './category-item';
import { URL_LANGUAGE, RESPONSIVE_CATEGORIES } from '../../../configs';
import { HOMEPAGE_TITLES } from '../../../translations/homepage.translations';

import { useStyles } from './categories-list.style';
import './categories-carousel.css';

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
    ? categories
        .map(
          ({ _id, name, images, isMain }) =>
            isMain && (
              <CategoryItem
                key={_id}
                categoryUrl={getCategoryURL(name)}
                categoryName={name[language].value}
                categoryImageUrl={images.large}
              />
            )
        )
        .filter((val) => val)
    : null;

  return (
    <div className={styles.catalog} id='home-categories'>
      {loading ? (
        <CircularLoadingBar className={styles.loadingIndicator} />
      ) : (
        <div>
          <Carousel responsive={RESPONSIVE_CATEGORIES} swipeable={false}>
            {categoriesList}
          </Carousel>
        </div>
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
