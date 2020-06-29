import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';

const Categories = ({ categoryName, categoryImage, categoryCode }) => {
  const props = {
    image: categoryImage
  };
  const linkTo = categoryCode.split('-')[1];
  const styles = useStyles(props);

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

export default Categories;
