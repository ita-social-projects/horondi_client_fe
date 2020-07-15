import React from 'react';
import { Typography, Card, Link } from '@material-ui/core';
import useStyles from './product-list-item.style';

const ProductListItem = ({ product }) => {
  const styles = useStyles({ image: product.images.primary.medium });
  const name = product.name[0].value;
  const price = product.basePrice;
  return (
    <Link to={`/:${product._id}`} className={styles.productItem}>
      <Card className={styles.name}>
        <Typography>{name}</Typography>
        <Typography>${price}</Typography>
      </Card>
    </Link>
  );
};

export default ProductListItem;
