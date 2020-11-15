import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';
import { getImage } from '../../../../utils/imageLoad';

const CategoryItem = ({ categoryName, categoryImageUrl, categoryUrl }) => {
  const [image, setImage] = useState(categoryImageUrl);

  useEffect(() => {
    getImage(categoryImageUrl)
      .then((src) => setImage(src))
      .catch((badSrc) => setImage(badSrc));
  }, [categoryImageUrl]);

  const styles = useStyles({ image });

  return (
    <Link to={`/${categoryUrl}`} className={styles.link}>
      <div className={styles.categoryItem} data-cy='category-item'>
        <div className={styles.categoryNameWrapper}>
          <span>{categoryName}</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
