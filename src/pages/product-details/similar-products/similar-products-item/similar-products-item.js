import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import useStyles from './similar-products-item.styles';

const SimilarProductItem = ({ imageUrl, id, name, rate, price }) => {
  const styles = useStyles({ image: imageUrl });
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  return (
    <Link to={`/product/${id}`}>
      <div className={styles.similarItem}>
        <div className={styles.info}>
          <span>{name[language].value}</span>
          <Rating value={rate} readOnly size='small' />
          <span>{price / 100} UAH</span>
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductItem;
