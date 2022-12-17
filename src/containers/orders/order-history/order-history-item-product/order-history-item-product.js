import React, { useContext, useEffect } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useStyles } from './order-history-item-product.styles';
import ConstructorCanvas from '../../../../components/constructor-canvas';
import { useCurrency } from '../../../../hooks/use-currency';
import useProductImage from '../../../../hooks/use-product-image';
import ThemeContext from '../../../../context/theme-context';

const canvasW = 720;
const canvasH = 500;
const canvasX = 0;
const canvasY = 0;

const OrderHistoryItemProduct = ({ item, itemPriceWithDiscount, fixedExchangeRate }) => {
  const styles = useStyles();
  const { currencySign, getPriceWithCurrency } = useCurrency();
  const [isLightTheme] = useContext(ThemeContext);
  const productPrice = getPriceWithCurrency(item.fixedPrice, fixedExchangeRate);
  const totalProductPrice = getPriceWithCurrency(itemPriceWithDiscount, fixedExchangeRate);
  const { t } = useTranslation();
  const { imageUrl, checkImage } = useProductImage();

  const { product } = item;
  const productPrimaryImage = product?.isFromConstructor ? null : product?.images.primary.medium;

  useEffect(() => {
    checkImage(productPrimaryImage, isLightTheme);
  }, [checkImage, isLightTheme, productPrimaryImage]);

  const defaultProductName = product
    ? t(`${product?.translationsKey}.name`)
    : t('product.notAvailable');
  const constructorProductName = t('common.backpackFromConstructor');
  const productName = product?.isFromConstructor ? constructorProductName : defaultProductName;

  const defaultProductImg = <img src={imageUrl} alt='img-product' className={styles.image} />;
  const constructorItem = {
    basic: item?.constructorBasics,
    bottom: item?.constructorBottom,
    pattern: item?.product?.pattern
  };
  const constructorProductImg = (
    <ConstructorCanvas
      item={constructorItem}
      className={styles.imgCanvasItem}
      width={canvasW}
      height={canvasH}
      x={canvasX}
      y={canvasY}
    />
  );

  const productImg = product?.isFromConstructor ? constructorProductImg : defaultProductImg;
  return (
    <TableRow className={styles.root} classes={{ root: styles.tableBody }}>
      <TableCell className={styles.imageCell}>{productImg}</TableCell>
      <TableCell>
        <div className={styles.product}>
          <p className={styles.productName}>{productName}</p>
        </div>
      </TableCell>
      <TableCell className={styles.empty} />
      <TableCell>
        <div className={styles.description}>{item.options.size?.name || '-'}</div>
      </TableCell>
      <TableCell>
        <div className={styles.price}>
          {currencySign}
          {productPrice}
        </div>
      </TableCell>
      <TableCell>
        <div className={styles.description}>{item.quantity}</div>
      </TableCell>
      <TableCell>
        <div className={styles.price}>
          {currencySign}
          {totalProductPrice}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrderHistoryItemProduct;
