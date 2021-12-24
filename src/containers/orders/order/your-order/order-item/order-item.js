import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IMG_URL } from '../../../../../configs';
import { useStyles } from '../../../../checkout/checkout-form/checkout-form.styles';

import { getCurrencySign } from '../../../../../utils/currency';
import { getProductById } from '../../../operations/order.queries';
import { getConstructorById } from '../../../operations/getConstructorById.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../../hooks/useIsLoadingOrError';

const OrderItem = ({ product }) => {
  const styles = useStyles();
  const { currency } = useSelector((state) => ({
    currency: state.Currency.currency
  }));
  const { t } = useTranslation();
  const currencySign = getCurrencySign(currency);

  const {
    data: dataProduct,
    loading: loadingProduct,
    error: errorProduct
  } = useQuery(getProductById, {
    variables: { id: product?.productId },
    skip: product.constructor
  });

  const {
    data: dataConstructor,
    loading: loadingConstructor,
    error: errorConstructor
  } = useQuery(getConstructorById, {
    variables: { id: product.productId },
    skip: !product.constructor
  });

  const { isLoading, isError } = useIsLoadingOrError(
    [loadingConstructor, loadingProduct],
    [errorConstructor, errorProduct]
  );

  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  const orderItem = product.constructor
    ? dataConstructor?.getConstructorById
    : dataProduct?.getProductById;

  const { sizeAndPrice } = product;
  return (
    <ListItem className={styles.yourOrderListItem} key={orderItem?._id} alignItems='center'>
      <Typography component='div'>x {product.quantity}</Typography>
      <img
        className={styles.yourOrderListImg}
        src={`${IMG_URL}${
          product.constructor
            ? orderItem?.model.images.thumbnail
            : orderItem?.images.primary.thumbnail
        }`}
        alt='product-img'
      />
      <ListItemText
        className={styles.yourOrderListItemDescriptionContainer}
        primary={
          <div className={styles.yourOrderListItemDescriptionPrimary}>
            {t(
              `${
                product.constructor ? orderItem?.model.translationsKey : orderItem.translationsKey
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
                  product.constructor
                    ? sizeAndPrice.bottomMaterial?.translationsKey
                    : orderItem.bottomMaterial.material.translationsKey
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
        <div>
          <FontAwesomeIcon icon={currencySign} />
        </div>
      </Typography>
    </ListItem>
  );
};

export default OrderItem;
