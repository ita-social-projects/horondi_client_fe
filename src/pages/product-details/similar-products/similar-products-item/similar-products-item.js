import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import StarRating from '../../../../components/star-rating';

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
    return () => setImage('');
  }, [imageUrl, isLightTheme]);

  const styles = useStyles({ image, isLightTheme, palette });

  return (
    <Link to={`${pathToProducts}/${id}`}>
      <div className={styles.similarItem}>
        <div className={styles.info}>
          <span>{t(`${translationsKey}.name`)}</span>
          <div className={styles.priceOfSimilarProducts}>{price}</div>
          <div className={styles.rate}>
            <StarRating size='small' readOnly rate={rate} precision={1} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductsItem;
