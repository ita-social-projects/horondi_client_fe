import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from './similar-products-item.styles';
import { getImage } from '../../../../utils/imageLoad';
import { IMG_URL } from '../../../../configs';

import productPlugDark from '../../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../../images/product-plug-light-theme-img.png';
import routes from '../../../../const/routes';
import ThemeContext from '../../../../context/theme-context';

const { pathToProducts } = routes;

const SimilarProductsItem = ({ imageUrl, id, name, rate, price, currencySign }) => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const isLightTheme = useContext(ThemeContext);

  const [image, setImage] = useState(IMG_URL + imageUrl);

  useEffect(() => {
    getImage(imageUrl)
      .then((src) => setImage(src))
      .catch(() => setImage(isLightTheme ? productPlugLight : productPlugDark));
  }, [imageUrl, isLightTheme]);

  const styles = useStyles({ image, isLightTheme });

  return (
    <Link to={`${pathToProducts}/${id}`}>
      <div className={styles.similarItem}>
        <div className={styles.info}>
          <span>{name[language].value}</span>
          <span>
            {price}
            {'\u00A0'}
            <FontAwesomeIcon icon={currencySign} />
          </span>
          <Rating className={styles.rating} value={rate} readOnly size='small' />
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductsItem;
