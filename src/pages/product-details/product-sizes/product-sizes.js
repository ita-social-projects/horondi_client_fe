import React from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useStyles } from './product-sizes.styles';

const ProductSizes = ({
  handleSizeChange,
  sizes,
  available,
  isDeleted,
  sizeIsNotSelectedError,
  currentSize
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const filteredSizes = _.uniqBy(sizes, 'size.name');

  const sizeButtons = filteredSizes?.map(({ size }, index) => (
    <Button
      disabled={!(size.available && available)}
      key={size._id}
      className={
        size._id === currentSize._id && available ? styles.selectedSize : styles.sizeButton
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
      <div className={styles.container}>
        <div className={styles.label}>
          <span>{t('common.size')}: </span>
          <span>{checkSizeName()}</span>
        </div>
        {sizeButtons.length > 0 && (
          <div className={styles.sizeButtons}>
            <ButtonGroup disabled={isDeleted} data-cy='sizes'>
              {sizeButtons}
            </ButtonGroup>
          </div>
        )}
      </div>
      {sizeIsNotSelectedError ? <div className={styles.error}>{t('error.errorSize')}</div> : null}
    </div>
  );
};

export default ProductSizes;
