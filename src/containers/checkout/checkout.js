import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';

import { useStyles } from './checkout.styles';
import CheckoutForm from './checkout-form';
import { Loader } from '../../components/loader/loader';
import routes from '../../configs/routes';
import { setIsOrderCreated } from '../../redux/order/order.actions';
import { useCart } from '../../hooks/use-cart';

const { pathToMain } = routes;

const Checkout = () => {
  const location = useLocation();
  const { promoCode, certificateData } = location?.state;
  const [isCashPayment, setIsCashPayment] = useState();
  const { loading, isOrderCreated, order } = useSelector(({ Order }) => ({
    loading: Order.loading,
    isOrderCreated: Order.isOrderCreated,
    order: Order.order
  }));
  const dispatch = useDispatch();

  const { cart: cartItems, cartOperations } = useCart();

  useEffect(() => () => dispatch(setIsOrderCreated(false)), [dispatch, isOrderCreated]);

  const styles = useStyles();

  const onCashPayment = () => setIsCashPayment(true);

  return (
    <div className={styles.root}>
      {isOrderCreated && isCashPayment && <Redirect to={`thanks/${order?.orderNumber}`} />}
      {!cartItems.length && !loading && <Redirect to={pathToMain} />}
      {loading && <Loader />}
      {!loading && (
        <div className={styles.checkoutContainer}>
          <CheckoutForm
            cartItems={cartItems}
            cartOperations={cartOperations}
            promoCode={promoCode}
            certificate={certificateData}
            handleCashPayment={onCashPayment}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
