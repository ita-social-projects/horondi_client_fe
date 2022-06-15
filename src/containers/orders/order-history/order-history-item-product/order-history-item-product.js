import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useQuery } from '@apollo/client';
import { useStyles } from './order-history-item-product.styles';
import { IMG_URL } from '../../../../configs';
import ConstructorCanvas from '../../../../components/constructor-canvas';
import { getConstructorByModel } from '../../operations/getConstructorByModel.query';
import { useCurrency } from '../../../../hooks/use-currency';

const canvasW = 720;
const canvasH = 500;
const canvasX = 0;
const canvasY = 0;

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
  const pocket =
    constructor && constructor.pocketsWithRestrictions[0]?.currentPocketWithPosition?.pocket;

  const defaultProductName = product
    ? t(`${product?.translationsKey}.name`)
    : t('product.notAvailable');
  const constructorProductName = t('common.backpackFromConstructor');
  const productName = product?.isFromConstructor ? constructorProductName : defaultProductName;

  const defaultProductImg = (
    <img
      src={`${IMG_URL}${product?.images?.primary.medium}`}
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
      <TableCell>{productImg}</TableCell>
      <TableCell>
        <div>
          <p className={styles.productName}>{productName}</p>
          <p className={styles.productBottom}>
            {product && t('cart.bottomMaterial')} -{' '}
            {product && t(`${product.bottomMaterial.material.translationsKey}.name`)}
          </p>
        </div>
      </TableCell>
      <TableCell>
        <div className={styles.description}>{item.options.size.name}</div>
      </TableCell>
      <TableCell>
        <div className={styles.price}>
          {currencySign}
          {fixedPriceProduct}
        </div>
      </TableCell>
      <TableCell>
        <div className={styles.description}>{item.quantity}</div>
      </TableCell>
      <TableCell>
        <div className={styles.price}>
          {currencySign}
          {item.quantity * fixedPriceProduct}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrderHistoryItemProduct;
