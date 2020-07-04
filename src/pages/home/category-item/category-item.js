import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';

const CategoryItem = ({ categoryName, categoryImage, categoryCode }) => {
  const linkTo = categoryCode.split('-')[1];
  const styles = useStyles({ image: categoryImage });

  return (
    <Link to={`/${linkTo}`} className={styles.link}>
      <div className={styles.categoryItem}>
        <div className={styles.categoryNameWrapper}>
          <span>{categoryName}</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
