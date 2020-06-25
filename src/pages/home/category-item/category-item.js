import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';

const Categories = ({ categoryName, categoryImage, categoryCode }) => {
  const props = {
    image: categoryImage
  };
  const linkTo = categoryCode.split('-')[1];
  const classes = useStyles(props);

  return (
    <Link to={`/${linkTo}`} className={classes.link}>
      <div className={classes.categoryItem}>
        <div className={classes.categoryNameWrapper}>
          <span>{categoryName}</span>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
