import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';
import { getImage } from '../../../../utils/imageLoad';
import { HOME_BUTTONS } from '../../../../translations/homepage.translations';

const CategoryItem = ({ categoryName, categoryImageUrl, categoryUrl, language }) => {
  const [image, setImage] = useState(categoryImageUrl);

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
        {HOME_BUTTONS[language].MOVE_TO_CATEGORY}
        <span>&#8594;</span>
      </div>
    </Link>
  );
};

export default CategoryItem;
