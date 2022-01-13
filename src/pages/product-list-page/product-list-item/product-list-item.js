import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/styles';

import { useStyles } from './product-list-item.style';
import StarRating from '../../../components/star-rating';
import { getImage } from '../../../utils/imageLoad';
import { IMG_URL } from '../../../configs';
import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import routes from '../../../configs/routes';
import { getCurrencySign } from '../../../utils/currency';

const ProductListItem = ({ product }) => {
  const { t } = useTranslation();
  const { palette } = useTheme();

  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));

  const currencySign = getCurrencySign(currency);

  const [image, setImage] = useState(IMG_URL + product.images.primary.small);

  const { pathToProducts } = routes;
  const isLightTheme = palette.type === 'light';

  useEffect(() => {
    getImage(product.images.primary.small)
      .then((src) => setImage(src))
      .catch(() => setImage(isLightTheme ? productPlugLight : productPlugDark));

    return () => setImage(null);
  }, [isLightTheme, product.images.primary.small]);

  const checkSizes = () => {
    const availableSizes = product.sizes.filter(
      ({ size, price }) => size.available && { size, price }
    );
    return availableSizes && availableSizes[0] ? (
      <>
        <div className={styles.price}>
          <div className={styles.value}>
            {t('common.from') + availableSizes[availableSizes.length - 1]?.price[currency].value}
            {'\u00A0'}
          </div>
          <div className={styles.currency}>{currencySign}</div>
        </div>
      </>
    ) : (
      <>{t('productListPage.sizeNotAvailable')} </>
    );
  };

  const styles = useStyles({ image });
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} className={styles.wrapper}>
      <Link to={`${pathToProducts}/${product._id}`}>
        <div className={styles.productItem}>
          <div className={styles.name}>
            <StarRating size='small' readOnly rate={product.rate} />
            <div>
              <span className={styles.title}>
                {t(`${product.translationsKey}.name`)}
                <span className={styles.price}>{checkSizes()}</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.arrayOf(
      PropTypes.shape({
        lang: PropTypes.string,
        value: PropTypes.string
      })
    ),
    rate: PropTypes.number,
    basePrice: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number
      })
    ),
    images: PropTypes.shape({
      isMain: PropTypes.string,
      large: PropTypes.string,
      name: PropTypes.arrayOf(
        PropTypes.shape({
          lang: PropTypes.string,
          value: PropTypes.string
        })
      )
    })
  })
};
ProductListItem.defaultProps = {
  product: {
    _id: '',
    basePrice: [
      {
        value: 1
      }
    ],
    sizes: [
      {
        size: {
          _id: ''
        },
        price: [
          {
            value: 1,
            currency: ''
          }
        ]
      }
    ],
    images: {
      primary: { medium: '' },
      additional: {}
    },
    rate: 1
  }
};

export default ProductListItem;
