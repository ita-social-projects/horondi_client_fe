import React from 'react';
import { Button, Divider, List, Paper, Typography } from '@material-ui/core';
import SelfPickup from '../../../checkout/checkout-form/delivery/self-pickup/self-pickup';
import { useCart } from '../../../../hooks/use-cart';
import OrderItem from './order-item';
import { useCurrency } from '../../../../hooks/use-currency';

const YourOrder = ({ ...props }) => {
  const { currencySign, getPriceWithCurrency } = useCurrency();
  const { cartItems, cartOperations } = useCart();
  const { getTotalPriceWithCertificate } = cartOperations;
  const {
    checkoutFormBtnValue,
    consentLink,
    t,
    totalPriceToPay,
    values,
    language,
    styles,
    deliveryType,
    setPricesFromQuery,
    promoCode,
    certificate
  } = props;

  const totalPrice = certificate
    ? getTotalPriceWithCertificate(certificate) >= 0
      ? getTotalPriceWithCertificate(certificate)
      : 0
    : getPriceWithCurrency(totalPriceToPay);

  const orderItems =
    cartItems &&
    cartItems.map((item) => (
      <OrderItem
        key={item.id}
        product={item}
        setProductPrices={setPricesFromQuery}
        data-testid='orderItem'
        promoCode={promoCode}
      />
    ));

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
      <List className={styles.yourOrderList} data-testid='orderList'>
        {orderItems}
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
        <div className={styles.totalPrice}>
          {currencySign}
          {totalPrice}
        </div>{' '}
      </Typography>
      <Divider variant='fullWidth' />
      <div className={styles.yourOrderConsentLink}>{consentLink}</div>
      <Button
        data-testid='confirmButton'
        variant='contained'
        type='submit'
        className={styles.yourOrderButton}
      >
        {checkoutFormBtnValue(values, language)}
      </Button>
    </Paper>
  );
};

export default YourOrder;
