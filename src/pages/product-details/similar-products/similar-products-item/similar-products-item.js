import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { useStyles } from './similar-products-item.styles';
import { getImage } from '../../../../utils/imageLoad';
import { IMG_URL } from '../../../../configs';

import productPlugDark from '../../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../../images/product-plug-light-theme-img.png';
import routes from '../../../../configs/routes';

const { pathToProducts } = routes;

const SimilarProductsItem = ({ imageUrl, id, rate, price, translationsKey }) => {
  const { t } = useTranslation();

  const [image, setImage] = useState(IMG_URL + imageUrl);
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

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
          <span>{t(`${translationsKey}.name`)}</span>
          <span>{price}</span>
          <Rating className={styles.rating} value={rate} readOnly size='small' />
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductsItem;
