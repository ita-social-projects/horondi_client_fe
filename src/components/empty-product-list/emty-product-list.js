import React from 'react';
import { useTheme } from '@material-ui/styles';

import { EMPTY_PRODUCT_LIST_IMAGES } from '../../configs';
import { useStyles } from './empty-product-list.styles';

export const EmptyProductList = ({ name }) => {
  const styles = useStyles();
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  const emptyProductImgLink = isLightTheme
    ? EMPTY_PRODUCT_LIST_IMAGES.lightTheme
    : EMPTY_PRODUCT_LIST_IMAGES.darkTheme;

  return (
    <div>
      <img className={styles.image} src={emptyProductImgLink} alt={name} />
    </div>
  );
};
