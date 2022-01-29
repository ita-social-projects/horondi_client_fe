import * as React from 'react';
import { Button, Divider, List, Paper, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import SelfPickup from '../../../checkout/checkout-form/delivery/self-pickup/self-pickup';
import { useCart } from '../../../../hooks/use-cart';
import OrderItem from './order-item';
import { getCurrencySign } from '../../../../utils/currency';

const YourOrder = ({ ...props }) => {
  const { cart } = useCart();
  const {
    currency,
    checkoutFormBtnValue,
    consentLink,
    t,
    totalPriceToPay,
    values,
    language,
    styles,
    deliveryType,
    setPricesFromQuery
  } = props;

  const [productPrices, setProductPrices] = useState([]);
  const currencySign = getCurrencySign(currency);
  useEffect(() => {
    setPricesFromQuery(productPrices.map((item) => item[currency].value));
  }, [setPricesFromQuery, productPrices, currency]);
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
        {cart
          ? cart.map((item) => (
            <OrderItem
              key={item.id}
              product={item}
              setProductPrices={setProductPrices}
              data-testid='orderItem'
            />
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
        <div className={styles.totalPrice}>
          <span>{currencySign}</span>
          {totalPriceToPay}
        </div>{' '}
      </Typography>
      <Divider variant='fullWidth' />
      <div className={styles.yourOrderConsentLink}>{consentLink}</div>
      <Button
        data-testid='submit-btn'
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
