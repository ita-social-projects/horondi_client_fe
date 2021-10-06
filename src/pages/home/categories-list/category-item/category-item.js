import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useStyles } from './category-item.style';
import { getImage } from '../../../../utils/imageLoad';

const CategoryItem = ({ categoryName, categoryImageUrl, categoryUrl }) => {
  const [image, setImage] = useState(categoryImageUrl);
  const { t } = useTranslation();

  useEffect(() => {
    getImage(categoryImageUrl)
      .then((src) => setImage(src))
      .catch((badSrc) => setImage(badSrc));
  }, [categoryImageUrl]);

  const styles = useStyles({ image });

  return (
    <Link className={styles.categoryItem} to={`/${categoryUrl}`}>
      <span className={styles.categoryName}>{categoryName}</span>
      <div className={styles.categoryInner}>
        {t('home.moveToCategory')}
        <span>&#8594;</span>
      </div>
    </Link>
  );
};

export default CategoryItem;
