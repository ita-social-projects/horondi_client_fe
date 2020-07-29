import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useStyles from './product-list-item.style';
import StarRating from '../../../containers/star-rating';

const ProductListItem = ({ product, category }) => {
  // const styles = useStyles({ image: product.images[0].primary.medium });
  const styles = useStyles({ image: './images/small_6x9a1lkkbjjc9v1.jpg' });
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

export default ProductListItem;
