import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useStyles from './product-list-item.style';
import StarRating from '../../../containers/star-rating';

const ProductListItem = ({ product, category }) => {
  const styles = useStyles({ image: product.images.primary.medium });
  const { language } = useSelector(({ Language: { language } }) => ({
    language
  }));
  const name = product.name[language].value;
  const price = product.basePrice;
  return (
    <Link to={`${category}/${product._id}`} className={styles.productItem}>
      <Card className={styles.name}>
        {name}
        <StarRating size='small' rate={product.rate} />${price}
      </Card>
    </Link>
  );
};

ProductListItem.propTypes = {
  category: PropTypes.string,
  product: PropTypes.shape({
    _id: PropTypes.string,
    basePrice: PropTypes.number,
    images: PropTypes.objectOf(
      PropTypes.shape({
        primary: PropTypes.shape({
          medium: PropTypes.string,
          _typename: PropTypes.string
        })
      })
    )
  }),
  rate: PropTypes.number
};
ProductListItem.defaultProps = {
  category: 'backpacks',
  product: {
    _id: '',
    basePrice: 1,
    images: {
      primary: { medium: '' }
    },
    additional: {}
  },
  rate: 1
};

export default ProductListItem;
