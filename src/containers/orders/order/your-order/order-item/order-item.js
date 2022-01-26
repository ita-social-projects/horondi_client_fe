import { ListItem, ListItemText, Typography } from '@material-ui/core';
import * as React from 'react';
import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IMG_URL } from '../../../../../configs';
import { useStyles } from '../../../../checkout/checkout-form/checkout-form.styles';

import { getCurrencySign } from '../../../../../utils/currency';
import { getProductById } from '../../../operations/order.queries';
import { getConstructorById } from '../../../operations/getConstructorById.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../../hooks/useIsLoadingOrError';

const OrderItem = ({ product, setProductPrices }) => {
  const styles = useStyles();
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const { t } = useTranslation();
  const currencySign = getCurrencySign(currency);

  const [
    getProductByIdHandler,
    { data: dataProduct, called: calledProduct, error: errorProduct, loading: loadingProduct }
  ] = useLazyQuery(getProductById, {
    variables: {
      id: product?.productId
    }
  });

  const [
    getConstructorByIdHandler,
    {
      data: dataConstructor,
      called: calledConstructor,
      error: errorConstructor,
      loading: loadingConstructor
    }
  ] = useLazyQuery(getConstructorById, {
    variables: {
      id: product.productId
    }
  });

  const isConstructor = Object.keys(product.constructor).length !== 0;

  if (!isConstructor && !calledProduct) {
    getProductByIdHandler();
  }
  if (isConstructor && !calledConstructor) {
    getConstructorByIdHandler();
  }

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingConstructor, loadingProduct],
    [errorConstructor, errorProduct]
  );

  const orderItem = isConstructor
    ? dataConstructor?.getConstructorById
    : dataProduct?.getProductById;

  const { sizeAndPrice } = product;

  useEffect(() => {
    const { constructor } = product;
    const { size, price } = sizeAndPrice;
    if (!constructor && orderItem) {
      const currentSize = orderItem?.sizes.find((item) => item.size._id === size._id);
      setProductPrices((prevState) => [...prevState, currentSize?.price]);
    }
    if (constructor && orderItem) {
      setProductPrices((prevState) => [...prevState, price]);
    }
  }, [setProductPrices, product, orderItem, sizeAndPrice]);

  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <ListItem className={styles.yourOrderListItem} key={orderItem?._id} alignItems='center'>
      <Typography component='div'>x {product.quantity}</Typography>
      <img
        className={styles.yourOrderListImg}
        src={`${IMG_URL}${
          isConstructor ? orderItem?.model.images.thumbnail : orderItem?.images.primary.thumbnail
        }`}
        alt='product-img'
      />
      <ListItemText
        className={styles.yourOrderListItemDescriptionContainer}
        primary={
          <div className={styles.yourOrderListItemDescriptionPrimary}>
            {t(
              `${
                isConstructor ? orderItem?.model.translationsKey : orderItem?.translationsKey
              }.name`
            )}
          </div>
        }
        secondary={
          <Typography className={styles.yourOrderListItemDescriptionSecondary} component='div'>
            <div>
              {t('product.productDescription.bottomMaterial')}:{' '}
              {t(
                `${
                  isConstructor
                    ? sizeAndPrice.bottomMaterial?.translationsKey
                    : orderItem?.bottomMaterial.material.translationsKey
                }.name`
              )}
            </div>
            <div>
              {t('common.size')}:{sizeAndPrice.size.name}
            </div>
          </Typography>
        }
      />
      <Typography className={styles.yourOrderListItemPrice} component='div'>
        <div>{sizeAndPrice.price[currency]?.value}</div>
        <div style={{ width: '3px' }} />
        <div className={styles.priceForItem}>{currencySign}</div>
      </Typography>
    </ListItem>
  );
};

export default OrderItem;
