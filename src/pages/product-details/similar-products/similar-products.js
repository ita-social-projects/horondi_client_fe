import React from 'react';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import { useStyles } from './similar-products.styles';

const SimilarProducts = () => {
  const styles = useStyles();

  return (
    <div id='similar-products'>
      <div className={styles.similarItems} />
    </div>
  );
};

export default SimilarProducts;
