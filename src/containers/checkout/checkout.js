import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { useStyles } from './checkout.styles';
import CheckoutForm from './checkout-form';
import { Loader } from '../../components/loader/loader';
import routes from '../../configs/routes';
import { setIsOrderCreated } from '../../redux/order/order.actions';
import { useCart } from '../../hooks/use-cart';

const { pathToThanks, pathToMain } = routes;

const Checkout = ({ location }) => {
  const { currency, loading, isOrderCreated, order, user } = useSelector(
    ({ Currency, Order, User }) => ({
      currency: Currency.currency,
      loading: Order.loading,
      isOrderCreated: Order.isOrderCreated,
      order: Order.order,
      user: User.userData
    })
  );
  const dispatch = useDispatch();

  const { cart: cartItems, cartOperations } = useCart(user);

  useEffect(() => () => dispatch(setIsOrderCreated(false)), [dispatch, isOrderCreated]);

  const styles = useStyles();

  return (
    <div className={styles.root}>
      {isOrderCreated && <Redirect to={`${pathToThanks}/${order?._id}`} />}
      {!cartItems.length && <Redirect to={pathToMain} />}
      {loading && <Loader />}
      {!loading && (
        <div className={styles.checkoutContainer}>
          <CheckoutForm
            currency={currency}
            cartItems={cartItems}
            cartOperations={cartOperations}
            promoCode={location?.props}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
