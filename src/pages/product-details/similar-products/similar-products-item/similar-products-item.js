import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from './similar-products-item.styles';
import { getImage } from '../../../../utils/imageLoad';
import { IMG_URL } from '../../../../configs';

import productPlugDark from '../../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../../images/product-plug-light-theme-img.png';
import PATHS from '../../../../const/paths';

const { pathToProduct } = PATHS;

const SimilarProductsItem = ({ imageUrl, id, name, rate, price, currencySign }) => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));

  const [image, setImage] = useState(IMG_URL + imageUrl);

  useEffect(() => {
    getImage(imageUrl)
      .then((src) => setImage(src))
      .catch(() => setImage(isLightTheme ? productPlugLight : productPlugDark));
  }, [imageUrl, isLightTheme]);

  const styles = useStyles({ image, isLightTheme });

  return (
    <Link to={`${pathToProduct}/${id}`}>
      <div className={styles.similarItem}>
        <div className={styles.info}>
          <span>{name[language].value}</span>
          <Rating value={rate} readOnly size='small' />
          <span>
            {Math.round(price / 100)}
            {'\u00A0'}
            <FontAwesomeIcon icon={currencySign} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductsItem;
