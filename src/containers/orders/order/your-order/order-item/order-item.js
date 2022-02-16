import React, { useEffect, useMemo } from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { IMG_URL } from '../../../../../configs';
import { useStyles } from '../../../../checkout/checkout-form/checkout-form.styles';
import { getCurrencySign } from '../../../../../utils/currency';
import { getProductById } from '../../../operations/order.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../../hooks/useIsLoadingOrError';
import { useCart } from '../../../../../hooks/use-cart';
import { getConstructorByModel } from '../../../operations/getConstructorByModel.query';

const OrderItem = ({ product, setProductPrices, promoCode }) => {
  const styles = useStyles();
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const { t } = useTranslation();
  const currencySign = getCurrencySign(currency);
  const { cartOperations } = useCart();

  const { isFromConstructor, sizeAndPrice } = product;

  const {
    data: dataProduct,
    error: errorProduct,
    loading: loadingProduct
  } = useQuery(isFromConstructor ? getConstructorByModel : getProductById, {
    variables: {
      id: isFromConstructor ? product?.model?._id : product?.productId
    }
  });

  const { isLoading, isError } = useIsLoadingOrError([loadingProduct], [errorProduct]);

  const orderItem = isFromConstructor
    ? dataProduct?.getConstructorByModel[0]
    : dataProduct?.getProductById;

  const calculatePrice = useMemo(() => {
    const { size } = sizeAndPrice;
    const currentSize = orderItem?.sizes?.find((item) => item.size._id === size._id);

    if (promoCode) {
      const { categories, discount } = promoCode.getPromoCodeByCode;
      const isAllowCategory = categories.find((item) => item === orderItem?.category.code);

      if (isAllowCategory) {
        return currentSize?.price.map((item) => ({
          ...item,
          value: Math.round(item.value - (item.value / 100) * discount)
        }));
      }
    }
    return currentSize?.price;
  }, [orderItem, promoCode, sizeAndPrice]);

  const productName = isFromConstructor
    ? t('common.backpackFromConstructor')
    : t(`${orderItem?.translationsKey}.name`);

  const bottomMaterialName = t(
    `${
      isFromConstructor
        ? product.bottom.translationsKey
        : orderItem?.bottomMaterial.material.translationsKey
    }.name`
  );

  useEffect(() => {
    const { size, price } = sizeAndPrice;
    if (!isFromConstructor && orderItem) {
      const currentSize = orderItem?.sizes.find((item) => item.size._id === size._id);
      setProductPrices((prevState) => [...prevState, currentSize?.price]);
    }
    if (isFromConstructor && orderItem) {
      setProductPrices((prevState) => [...prevState, price]);
    }
  }, [setProductPrices, product, orderItem, sizeAndPrice, isFromConstructor, calculatePrice]);

  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <ListItem className={styles.yourOrderListItem} key={orderItem?._id} alignItems='center'>
      <Typography component='div'>x {product.quantity}</Typography>
      <img
        className={styles.yourOrderListImg}
        src={`${IMG_URL}${orderItem?.images?.primary.thumbnail}`}
        alt='product-img'
      />
      <ListItemText
        className={styles.yourOrderListItemDescriptionContainer}
        primary={<div className={styles.yourOrderListItemDescriptionPrimary}>{productName}</div>}
        secondary={
          <Typography className={styles.yourOrderListItemDescriptionSecondary} component='div'>
            <div>
              {t('product.productDescription.bottomMaterial')}: {bottomMaterialName}
            </div>
            <div>
              {t('common.size')}:{sizeAndPrice.size.name}
            </div>
          </Typography>
        }
      />
      <Typography className={styles.yourOrderListItemPrice} component='div'>
        <div>
          {promoCode
            ? cartOperations.getProductPriceWithPromoCode(product.productId, currency, promoCode)
            : sizeAndPrice.price[currency]?.value}
        </div>
        <div style={{ width: '3px' }} />
        <div className={styles.priceForItem}>{currencySign}</div>
      </Typography>
    </ListItem>
  );
};

export default OrderItem;
