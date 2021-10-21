import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStyles } from './product-sizes.styles';

import { SIZE } from '../../../translations/product-details.translations';

const ProductSizes = ({ handleSizeChange, sizes, sizeIsNotSelectedError }) => {
  const styles = useStyles();
  const { language, size: currentSize } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    size: Products.productToSend.options.size
  }));

  const sizeButtons =
    sizes &&
    !!sizes.length &&
    sizes.map(({ size }, index) => {
      if (size.available) {
        return (
          <Button
            key={size._id}
            className={size._id === currentSize._id ? styles.selectedSize : styles.sizeButton}
            onClick={() => handleSizeChange(index)}
          >
            {size.name}
          </Button>
        );
      }
      return null;
    });

  return (
    <div className={styles.sizeButtons}>
      {sizeButtons ? (
        <div className={styles.container}>
          <div className={styles.label}>{SIZE[language].size}:</div>
          <div>
            <ButtonGroup data-cy='sizes'>{sizeButtons}</ButtonGroup>
          </div>
        </div>
      ) : null}
      {sizeIsNotSelectedError ? <div className={styles.error}>{SIZE[language].error}</div> : null}
    </div>
  );
};

export default ProductSizes;
