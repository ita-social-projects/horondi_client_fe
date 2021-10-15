import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { useStyles } from './checkout.styles';
import CheckoutForm from './checkout-form';
import { getDeliveryType } from '../../redux/cart/cart.actions';
import { Loader } from '../../components/loader/loader';
import routes from '../../const/routes';
import { setIsOrderCreated } from '../../redux/order/order.actions';
import ThemeContext from '../../context/theme-context';

const { pathToThanks, pathToMain } = routes;

const Checkout = () => {
  const { language, currency, cartItems, deliveryType, loading, isOrderCreated, order } =
    useSelector(({ Language, Currency, Cart, Order }) => ({
      language: Language.language,
      currency: Currency.currency,
      cartItems: Cart.list,
      deliveryType: Cart.deliveryType,
      loading: Order.loading,
      isOrderCreated: Order.isOrderCreated,
      order: Order.order
    }));
  const isLightTheme = useContext(ThemeContext);
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
      {isOrderCreated && <Redirect to={`${pathToThanks}/${order?._id}`} />}
      {!cartItems.length && <Redirect to={pathToMain} />}
      {loading && <Loader />}
      {!loading && (
        <div className={styles.checkoutContainer}>
          <CheckoutForm
            language={language}
            isLightTheme={isLightTheme}
            currency={currency}
            cartItems={cartItems}
            deliveryType={deliveryType}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
