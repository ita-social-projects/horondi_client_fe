import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';

const Categories = ({ categoryName, categoryImage }) => {
  const props = {
    image: categoryImage
  };

  const classes = useStyles(props);

  return (
    <Link to={`/${categoryName}`} className={classes.link}>
      <div className={classes.categoryItem}>
        <div className={classes.categoryNameWrapper}>
          <span>{categoryName}</span>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
