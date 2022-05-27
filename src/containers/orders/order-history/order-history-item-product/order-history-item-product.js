import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useQuery } from '@apollo/client';
import { useStyles } from './order-history-item-product.styles';
import { IMG_URL } from '../../../../configs';
import ConstructorCanvas from '../../../../components/constructor-canvas';
import { getConstructorByModel } from '../../operations/getConstructorByModel.query';
import { useCurrency } from '../../../../hooks/use-currency';

const OrderHistoryItemProduct = ({ item }) => {
  const styles = useStyles();
  const { getCurrencySign, getPriceWithCurrency } = useCurrency();
  const currencySign = getCurrencySign();
  const fixedPriceProduct = getPriceWithCurrency(item.fixedPrice);
  const { t } = useTranslation();

  const { product } = item;
  const { data: constructorByModel, loading: loadingConstructorByModel } = useQuery(
    getConstructorByModel,
    {
      variables: {
        id: product?.model?._id
      },
      skip: !product?.isFromConstructor
    }
  );

  const constructor =
    constructorByModel?.getConstructorByModel && constructorByModel.getConstructorByModel[0];
  const bottom = constructor?.bottoms.findIndex(
    (b) => b.features.material._id === product?.bottomMaterial.material._id
  );
  const basic = constructor?.basics.findIndex(
    (b) =>
      b.features.material._id === product?.mainMaterial.material._id &&
      b.features.color._id === product?.mainMaterial.color._id
  );
  const pattern = constructor?.patterns.findIndex((b) => b._id === product?.pattern._id);
  const pocket =
    constructor && constructor.pocketsWithRestrictions[0]?.currentPocketWithPosition?.pocket;

  const defaultProductName = product
    ? t(`${product?.translationsKey}.name`)
    : t('product.notAvailable');
  const constructorProductName = t('common.backpackFromConstructor');
  const productName = product?.isFromConstructor ? constructorProductName : defaultProductName;

  const defaultProductImg = (
    <img
      src={`${IMG_URL}${product?.images?.primary.thumbnail}`}
      alt='img-product'
      className={styles.image}
    />
  );
  const constructorItem = {
    basic: constructor?.basics[basic],
    bottom: constructor?.bottoms[bottom],
    pattern: constructor?.patterns[pattern],
    pocket
  };
  const constructorProductImg = loadingConstructorByModel ? null : (
    <div className={styles.imgCanvasItem}>
      <ConstructorCanvas item={constructorItem} width={130} height={133} x={0} y={0} />
    </div>
  );
  const productImg = product?.isFromConstructor ? constructorProductImg : defaultProductImg;

  return (
    <TableRow className={styles.root}>
      <TableCell className={styles.image}>{productImg}</TableCell>
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
