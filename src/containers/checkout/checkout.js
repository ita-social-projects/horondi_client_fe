import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { useStyles } from './checkout.styles';
import CheckoutForm from './checkout-form';
import { getDeliveryType } from '../../redux/cart/cart.actions';
import { Loader } from '../../components/loader/loader';
import routes from '../../configs/routes';
import { setIsOrderCreated } from '../../redux/order/order.actions';

const Checkout = () => {
  const {
    language,
    isLightTheme,
    currency,
    cartItems,
    deliveryType,
    loading,
    isOrderCreated,
    order
  } = useSelector(({ Language, Theme, Currency, Cart, Order }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode,
    currency: Currency.currency,
    cartItems: Cart.list,
    deliveryType: Cart.deliveryType,
    loading: Order.loading,
    isOrderCreated: Order.isOrderCreated,
    order: Order.order
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeliveryType());
  }, [dispatch, deliveryType]);

  useEffect(() => () => dispatch(setIsOrderCreated(false)), [dispatch, isOrderCreated]);

  const styles = useStyles({
    isLightTheme
  });

  return (
    <div className={styles.root}>
      {/* {(isOrderCreated || !cartItems.length) && <Redirect to={routes.pathToThanks}/>} */}
      {loading && <Loader />}
      {!loading && (
        <div className={styles.checkoutContainer}>
          <CheckoutForm
            language={language}
            isLightTheme={isLightTheme}
            currency={currency}
            cartItems={cartItems}
            deliveryType={deliveryType}
            order={order}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
