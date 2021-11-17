import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Button
} from '@material-ui/core';
import { Loader } from '../../../../components/loader/loader';
import { IMG_URL } from '../../../../configs';
import SelfPickup from '../../../checkout/checkout-form/delivery/self-pickup/self-pickup';

const YourOrder = ({ ...props }) => {
  const { cartItems, cartLoading } = useSelector((state) => ({
    cartItems: state.Cart.list,
    cartLoading: state.Cart.loading
  }));
  const {
    currency,
    checkoutFormBtnValue,
    consentLink,
    t,
    currencySign,
    totalPriceToPay,
    values,
    language,
    styles,
    deliveryType
  } = props;

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <Paper className={styles.yourOrderContainer} elevation={4}>
      <Typography
        margin={20}
        gutterBottom
        variant='h3'
        component='div'
        style={{ fontWeight: '600' }}
      >
        {t('checkout.checkoutTitles.yourOrderTitle')}
      </Typography>
      <Divider variant='fullWidth' />
      <List className={styles.yourOrderList}>
        {cartItems
          ? cartItems.map((item) => (
            <ListItem
              className={styles.yourOrderListItem}
              key={item.product._id}
              alignItems='center'
            >
              <Typography component='div'>x {item.quantity}</Typography>
              <img
                className={styles.yourOrderListImg}
                src={`${IMG_URL}${item.product.images.primary.thumbnail} `}
                alt='product-img'
              />
              <ListItemText
                className={styles.yourOrderListItemDescriptionContainer}
                primary={
                  <div className={styles.yourOrderListItemDescriptionPrimary}>
                    {item.product.name[language].value}
                  </div>
                }
                secondary={
                  <Typography
                    className={styles.yourOrderListItemDescriptionSecondary}
                    component='div'
                  >
                    <div>
                      {t('product.productDescription.bottomMaterial')}:{' '}
                      {item.product.bottomMaterial.material.name[language].value}
                    </div>
                    <div>
                      {t('common.size')}: {item.options.size.name}
                    </div>
                  </Typography>
                }
              />
              <Typography className={styles.yourOrderListItemPrice} component='div'>
                <div>{item.price[currency].value}</div>
                <div style={{ width: '3px' }} />
                <div>
                  <FontAwesomeIcon icon={currencySign} />
                </div>
              </Typography>
            </ListItem>
          ))
          : null}
      </List>
      <Divider variant='fullWidth' />
      {deliveryType === 'SELFPICKUP' && (
        <>
          <SelfPickup />
          <Divider variant='fullWidth' />
        </>
      )}
      <Typography className={styles.yourOrderTotalPrice} component='div'>
        {t('common.toPay')}:
        <div>
          {Math.ceil(totalPriceToPay)} <FontAwesomeIcon icon={currencySign} />
        </div>{' '}
      </Typography>
      <Divider variant='fullWidth' />
      <div className={styles.yourOrderConsentLink}>{consentLink}</div>
      <Button variant='contained' type='submit' className={styles.yourOrderButton}>
        {checkoutFormBtnValue(values, language)}
      </Button>
    </Paper>
  );
};

export default YourOrder;
