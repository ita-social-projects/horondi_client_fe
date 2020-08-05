import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useStyles from './product-list-item.style';
import StarRating from '../../../containers/star-rating';
import * as productImage from '../../../images/pdp_main.jpg';

const ProductListItem = ({ product, category }) => {
  const styles = useStyles({ image: productImage });
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const name = product.name[language].value;
  const price = product.basePrice;
  return (
    <Link
      to={`${category.toLowerCase()}/${product._id}`}
      className={styles.productItem}
    >
      <Card className={styles.name}>
        {name}
        <StarRating size='small' readOnly rate={product.rate} />${price}
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
