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
    let isSubscribed = true;

    getImage(categoryImageUrl)
      .then((src) => (isSubscribed ? setImage(src) : null))
      .catch((badSrc) => {
        if (isSubscribed) {
          setImage(badSrc);
        }
      });

    return () => (isSubscribed = false);
  }, [categoryImageUrl]);

  const styles = useStyles({ image });

  return (
    <Link className={styles.categoryItem} to={`/${categoryUrl}`}>
      <span className={styles.categoryName}>{categoryName}</span>
      <div className={styles.categoryInner}>
        <span>
          {t('home.moveToCategory')} {categoryName}
        </span>
        <ArrowRightAltIcon className={styles.arrow} />
      </div>
    </Link>
  );
};

export default CategoryItem;
