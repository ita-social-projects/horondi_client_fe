import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import _ from 'lodash';
import { useStyles } from './product-sizes.styles';

const ProductSizes = ({
  handleSizeChange,
  sizes,
  checkDisabledProduct,
  sizeIsNotSelectedError,
  currentSize
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const filterDuplicatesNames = (sizesArray) => _.uniqBy(sizesArray, 'name');

  const filteredSizes = filterDuplicatesNames(sizes);

  const sizeButtons =
    filteredSizes &&
    !!filteredSizes.length &&
    filteredSizes.map(({ size }, index) => (
      <Button
        disabled={!(size.available && checkDisabledProduct)}
        key={size._id}
        className={
          size._id === currentSize._id && checkDisabledProduct
            ? styles.selectedSize
            : styles.sizeButton
        }
        onClick={() => handleSizeChange(index)}
      >
        {size.name}
      </Button>
    ));

  const checkSizeName = () => {
    if (currentSize.available) return t(`product.size.${currentSize.name}`);
    return '-';
  };

  return (
    <div>
      {sizeButtons ? (
        <div className={styles.container}>
          <div className={styles.label}>
            <span>{t('common.size')}: </span>
            <span>{checkSizeName()}</span>
          </div>
          <div className={styles.sizeButtons}>
            <ButtonGroup data-cy='sizes'>{sizeButtons}</ButtonGroup>
          </div>
        </div>
      ) : null}
      {sizeIsNotSelectedError ? <div className={styles.error}>{t('error.errorSize')}</div> : null}
    </div>
  );
};

export default ProductSizes;
