import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
      <div className={styles.categoryInner}>
        <span>
          {t('home.moveToCategory')} {categoryName}
        </span>
        <ArrowRightAltIcon />
      </div>
      <span className={styles.categoryName}>{categoryName}</span>
    </Link>
  );
};

export default CategoryItem;
