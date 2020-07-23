import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';

const CategoryItem = ({ categoryName, categoryImage, categoryUrl }) => {
  const styles = useStyles({ image: categoryImage });

  return (
    <Link to={`/${categoryUrl}`} className={styles.link}>
      <div className={styles.categoryItem}>
        <div className={styles.categoryNameWrapper}>
          <span>{categoryName}</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
