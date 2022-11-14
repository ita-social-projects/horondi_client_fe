import React, { useContext, useEffect } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useQuery } from '@apollo/client';
import { useStyles } from './order-history-item-product.styles';
import ConstructorCanvas from '../../../../components/constructor-canvas';
import { getConstructorByModel } from '../../operations/getConstructorByModel.query';
import { useCurrency } from '../../../../hooks/use-currency';
import useProductImage from '../../../../hooks/use-product-image';
import ThemeContext from '../../../../context/theme-context';

const canvasW = 720;
const canvasH = 500;
const canvasX = 0;
const canvasY = 0;

const OrderHistoryItemProduct = ({ item, itemPriceWithDiscount, fixedExchangeRate }) => {
  const styles = useStyles();
  const { getCurrencySign, getPriceWithCurrency } = useCurrency();
  const [isLightTheme] = useContext(ThemeContext);
  const currencySign = getCurrencySign();
  const productPrice = getPriceWithCurrency(item.fixedPrice, fixedExchangeRate);
  const totalProductPrice = getPriceWithCurrency(itemPriceWithDiscount, fixedExchangeRate);
  const { t } = useTranslation();
  const { imageUrl, checkImage } = useProductImage();

  const { product } = item;
  const productPrimaryImage = product?.images.primary.medium;
  const { data: constructorByModel, loading: loadingConstructorByModel } = useQuery(
    getConstructorByModel,
    {
      variables: {
        id: product?.model?._id
      },
      skip: !product?.isFromConstructor
    }
  );

  useEffect(() => {
    checkImage(productPrimaryImage, isLightTheme);
  }, [checkImage, isLightTheme, productPrimaryImage]);

  const constructor = constructorByModel?.getConstructorByModel;
  const bottom = constructor?.bottoms.findIndex(
    (b) => b.features.material._id === product?.bottomMaterial.material._id
  );
  const basic = constructor?.basics.findIndex(
    (b) =>
      b.features.material._id === product?.mainMaterial.material._id &&
      b.features.color._id === product?.mainMaterial.color._id
  );
  const pattern = constructor?.patterns.findIndex((b) => b._id === product?.pattern._id);

  const defaultProductName = product
    ? t(`${product?.translationsKey}.name`)
    : t('product.notAvailable');
  const constructorProductName = t('common.backpackFromConstructor');
  const productName = product?.isFromConstructor ? constructorProductName : defaultProductName;

  const defaultProductImg = <img src={imageUrl} alt='img-product' className={styles.image} />;
  const constructorItem = {
    basic: constructor?.basics[basic],
    bottom: constructor?.bottoms[bottom],
    pattern: constructor?.patterns[pattern]
  };
  const constructorProductImg = loadingConstructorByModel ? null : (
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
        <div>
          <p className={styles.productName}>{productName}</p>
          <p className={styles.productBottom}>
            {product && t('cart.bottomMaterial')} -{' '}
            {product && t(`${product.bottomMaterial.material.translationsKey}.name`)}
          </p>
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
