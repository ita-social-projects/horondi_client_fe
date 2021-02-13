import React from 'react';
import { useSelector } from 'react-redux';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import { useStyles } from './similar-products.styles';

const SimilarProducts = () => {
  const styles = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  return (
    <div id='similar-products'>
      <div className={styles.similarItems} />
    </div>
  );
};

export default SimilarProducts;
