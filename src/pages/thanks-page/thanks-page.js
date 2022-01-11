import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { parse } from 'query-string';
import { orderDataToLS } from '../../utils/order';
import { useStyles } from './thanks-page.styles';
import { THANKS_PAGE_TITLE } from '../../translations/thanks-page.translations';
import OrderData from './order-data';
import { getOrder, getPaidOrder } from '../../redux/order/order.actions';
import routes from '../../const/routes';
import { resetCart, cleanUserCart } from '../../redux/cart/cart.actions';
import { CHECKOUT_PAYMENT } from '../../translations/checkout.translations';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { ORDER_PAYMENT_STATUS } from '../../utils/thank-you';
import { Loader } from '../../components/loader/loader';

const { pathToMain } = routes;

const ThanksPage = () => {
  const router = useLocation();

  const dispatch = useDispatch();
  const { language, currency, order, loading, isLightTheme, paidOrderLoading, user } = useSelector(
    ({ Language, Currency, Order, Theme, User }) => ({
      language: Language.language,
      currency: Currency.currency,
      order: Order.order,
      loading: Order.loading,
      isLightTheme: Theme.lightMode,
      paidOrderLoading: Order.paidOrderLoading,
      user: User.userData
    })
  );
  const styles = useStyles({
    isLightTheme
  });
  const paymentMethod = getFromLocalStorage(orderDataToLS.paymentMethod);

  useEffect(() => {
    if (user) {
      dispatch(cleanUserCart(user._id));
    } else {
      dispatch(resetCart());
    }

    const { order_id: paidOrderNumber } = parse(router.search);

    if (paidOrderNumber) {
      dispatch(getPaidOrder(paidOrderNumber));
    } else {
      dispatch(getOrder());
    }
  }, []);

  if (loading || paidOrderLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.thanksContainer}>
      {!order && <Redirect to={pathToMain} /> && paymentMethod !== CHECKOUT_PAYMENT[language].card}
      {(!loading || !paidOrderLoading) && (
        <>
          <h2 className={styles.thunksTitle}>{THANKS_PAGE_TITLE[language].thanks}</h2>
          <div className={styles.thunksInfo}>
            <OrderData
              order={order}
              language={language}
              currency={currency}
              isLightTheme={isLightTheme}
            />
          </div>
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.PROCESSING && (
            <a
              target='_blank'
              rel='noreferrer'
              className={styles.linkToPayment}
              href={order?.paymentUrl}
            >
              {THANKS_PAGE_TITLE[language].linkToPayment}
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default ThanksPage;
