import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IMG_URL } from '../../../../../configs';
import { Loader } from '../../../../../components/loader/loader';
import { useStyles } from '../../../../checkout/checkout-form/checkout-form.styles';

import { getCurrencySign } from '../../../../../utils/currency';
import { getProductById } from '../../../operations/order.queries';
import errorOrLoadingHandler from '../../../../../utils/errorOrLoadingHandler';

const OrderItem = ({ product }) => {
  const styles = useStyles();
  const { language, currency } = useSelector((state) => ({
    language: state.Language.language,
    currency: state.Currency.currency
  }));
  const { t } = useTranslation();
  const currencySign = getCurrencySign(currency);
  const { data, loading, error } = useQuery(getProductById, {
    variables: { id: product.productId }
  });

  if (loading) return <Loader width={90} height={50} heightWrap={50} />;

  if (error) return errorOrLoadingHandler(error);

  const orderItem = data.getProductById;

  const sizeAndPrice = orderItem.sizes.find(
    (size) => size.size._id === product.sizeAndPrice.size._id && size.size
  );

  return (
    <ListItem className={styles.yourOrderListItem} key={orderItem._id} alignItems='center'>
      <Typography component='div'>x {product.quantity}</Typography>
      <img
        className={styles.yourOrderListImg}
        src={`${IMG_URL}${orderItem.images.primary.thumbnail}`}
        alt='product-img'
      />
      <ListItemText
        className={styles.yourOrderListItemDescriptionContainer}
        primary={
          <div className={styles.yourOrderListItemDescriptionPrimary}>
            {orderItem.name[language].value}
          </div>
        }
        secondary={
          <Typography className={styles.yourOrderListItemDescriptionSecondary} component='div'>
            <div>
              {t('product.productDescription.bottomMaterial')}:{' '}
              {t(`${orderItem.bottomMaterial.material.translationsKey}.name`)}
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
