import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useStyles from './similar-products-item.styles';

const SimilarProductItem = ({ imageUrl, id }) => {
  const styles = useStyles({ image: imageUrl });
  const { category } = useSelector(({ Products: { product } }) => ({
    category: product.category
  }));

  const categoryName = category.name[1].value.toLowerCase();
  return (
    <Link to={`/${categoryName}/${id}`}>
      <div className={styles.similarItem} />
    </Link>
  );
};

export default SimilarProductItem;
