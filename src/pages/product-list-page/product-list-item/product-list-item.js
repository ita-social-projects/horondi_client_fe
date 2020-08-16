import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHryvnia } from '@fortawesome/free-solid-svg-icons';
import useStyles from './product-list-item.style';
import StarRating from '../../../components/star-rating';
import * as productImage from '../../../images/pdp_main.jpg';

const ProductListItem = ({ product, category }) => {
  const styles = useStyles({ image: productImage });
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));

  return (
    <Link
      to={`${category.toLowerCase()}/${product._id}`}
      className={styles.productItem}
    >
      <Card className={styles.name}>
        {product.name[language].value}
        <StarRating size='small' readOnly rate={product.rate} />
        <div>
          <FontAwesomeIcon icon={faHryvnia} />
          {product.basePrice[0].value}
        </div>
      </Card>
    </Link>
  );
};

ProductListItem.propTypes = {
  category: PropTypes.string,
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.arrayOf(
      PropTypes.shape({
        lang: PropTypes.string,
        value: PropTypes.string
      })
    ),
    rate: PropTypes.number,
    basePrice: PropTypes.number,
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
  category: '',
  product: {
    _id: '',
    basePrice: 1,
    images: {
      primary: { medium: '' },
      additional: {}
    },
    rate: 1
  }
};

export default ProductListItem;
