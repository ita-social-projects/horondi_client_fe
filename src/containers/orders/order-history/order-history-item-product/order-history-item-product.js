import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@material-ui/styles';
import { useStyles } from './order-history-item-product.styles';
import { getCurrencySign } from '../../../../utils/currency';
import { IMG_URL } from '../../../../configs';
import productPlugDark from '../../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../../images/product-plug-light-theme-img.png';

const OrderHistoryItemProduct = ({ item, currency }) => {
  const styles = useStyles();
  const currencySign = getCurrencySign(currency);
  const fixedPriceProduct = item.fixedPrice[currency].value;
  const { t } = useTranslation();
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  const plugImage = isLightTheme ? productPlugLight : productPlugDark;

  const { product } = item;

  const defaultProductName = product
    ? t(`${product?.translationsKey}.name`)
    : t('product.notAvailable');
  const constructorProductName = t('common.backpackFromConstructor');
  const productName = product?.isFromConstructor ? constructorProductName : defaultProductName;

  return (
    <TableRow className={styles.root}>
      <TableCell className={styles.image}>
        <img
          src={product?.images ? `${IMG_URL}${product?.images?.primary.thumbnail}` : plugImage}
          alt='img-product'
          className={styles.imgItem}
        />
      </TableCell>
      <TableCell className={styles.description}>
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productBottom}>
          {product && t('cart.bottomMaterial')} -{' '}
          {product && t(`${product.bottomMaterial.material.translationsKey}.name`)}
        </p>
      </TableCell>
      <TableCell className={styles.description}>{item.options.size.name}</TableCell>
      <TableCell className={styles.description}>
        <div className={styles.price}>
          {currencySign}
          {fixedPriceProduct}
        </div>
      </TableCell>
      <TableCell className={styles.description}>{item.quantity}</TableCell>
      <TableCell className={styles.description}>
        <div className={styles.price}>
          {currencySign}
          {item.quantity * fixedPriceProduct}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrderHistoryItemProduct;
