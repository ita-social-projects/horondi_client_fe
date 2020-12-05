import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHryvnia, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './product-list-item.style';
import StarRating from '../../../components/star-rating';
import { getImage } from '../../../utils/imageLoad';
import { IMG_URL } from '../../../configs';

import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import routes from '../../../configs/routes';

const ProductListItem = ({ product }) => {
  const { language, currency, isLightTheme } = useSelector(
    ({ Language, Currency, Theme }) => ({
      language: Language.language,
      currency: Currency.currency,
      isLightTheme: Theme.lightMode
    })
  );

  const [image, setImage] = useState(IMG_URL + product.images.primary.small);
  const {pathToProducts}= routes
  useEffect(() => {
    getImage(product.images.primary.small)
      .then((src) => setImage(src))
      .catch(() => setImage(isLightTheme ? productPlugLight : productPlugDark));

    return () => setImage(null);
  }, [isLightTheme, product.images.primary.small]);

  const styles = useStyles({ image, isLightTheme });

  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} className={styles.wrapper}>
      <Link to={`${pathToProducts}/${product._id}`}>
        <div className={styles.productItem}>
          <div className={styles.name}>
            {product.name[language].value}
            <div>
              <span className={styles.title}>
                <StarRating size='small' readOnly rate={product.rate} />
                <span>
                  <FontAwesomeIcon icon={currencySign} />
                  {product.basePrice[currency].value / 100}
                </span>
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
    images: {
      primary: { medium: '' },
      additional: {}
    },
    rate: 1
  }
};

export default ProductListItem;
