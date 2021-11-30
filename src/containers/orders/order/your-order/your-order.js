import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider, List, Paper, Typography } from '@material-ui/core';
import SelfPickup from '../../../checkout/checkout-form/delivery/self-pickup/self-pickup';
import { useCart } from '../../../../hooks/use-cart';
import OrderItem from './order-item';

const YourOrder = ({ ...props }) => {
  const {
    cart,
    cartOperations: { getTotalPrice }
  } = useCart();

  const {
    currency,
    checkoutFormBtnValue,
    consentLink,
    t,
    currencySign,

    values,
    language,
    styles,
    deliveryType
  } = props;

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
          ? cart.map((item) => <OrderItem key={item.id} product={item} data-testid='orderItem' />)
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
          {Math.ceil(getTotalPrice(currency))} <FontAwesomeIcon icon={currencySign} />
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
