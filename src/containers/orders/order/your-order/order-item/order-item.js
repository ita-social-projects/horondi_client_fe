import React, { useContext, useEffect, useMemo } from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { useStyles } from '../../../../checkout/checkout-form/checkout-form.styles';
import { getProductById } from '../../../operations/order.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../../../hooks/useIsLoadingOrError';
import { useCart } from '../../../../../hooks/use-cart';
import { getConstructorByModel } from '../../../operations/getConstructorByModel.query';
import ConstructorCanvas from '../../../../../components/constructor-canvas';
import { useCurrency } from '../../../../../hooks/use-currency';
import useProductImage from '../../../../../hooks/use-product-image';
import ThemeContext from '../../../../../context/theme-context';

const OrderItem = ({ product, setProductPrices, promoCode }) => {
  const { getPriceWithCurrency, currencySign } = useCurrency();
  const [isLightTheme] = useContext(ThemeContext);
  const styles = useStyles();
  const { imageUrl, checkImage } = useProductImage();

  const { t } = useTranslation();

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

  const orderItem = useMemo(
    () =>
      isFromConstructor
        ? { ...dataProduct?.getConstructorByModel, category: { code: 'constructor' } }
        : dataProduct?.getProductById,
    [isFromConstructor, dataProduct]
  );

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

  const { price } = sizeAndPrice;
  const { category, _id: orderItemId } = orderItem || {};
  const productImage = isFromConstructor ? null : orderItem?.images.primary.thumbnail;

  useEffect(() => {
    if (orderItemId) {
      setProductPrices((prevState) => [...prevState, { price, category }]);
    }
  }, [setProductPrices, price, category, orderItemId]);

  useEffect(() => {
    productImage && checkImage(productImage, isLightTheme);
  }, [checkImage, isLightTheme, productImage]);

  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  const defaultProductImg = (
    <img className={styles.yourOrderListImg} src={imageUrl} alt='product-img' />
  );
  const constructorProductImg = (
    <div className={styles.yourOrderListImg}>
      <ConstructorCanvas item={product} width={56} height={56} x={0} y={0} />
    </div>
  );

  const productImg = isFromConstructor ? constructorProductImg : defaultProductImg;

  return (
    <ListItem className={styles.yourOrderListItem} key={orderItem?._id} alignItems='center'>
      <Typography className={styles.listItemQuantity} component='div'>
        x {product.quantity}
      </Typography>
      <div>{productImg}</div>
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
            ? cartOperations.getProductPriceWithPromoCode(product.productId, promoCode)
            : getPriceWithCurrency(sizeAndPrice.price)}
        </div>
        <div style={{ width: '3px' }} />
        <div className={styles.priceForItem}>{currencySign}</div>
      </Typography>
    </ListItem>
  );
};

export default OrderItem;
