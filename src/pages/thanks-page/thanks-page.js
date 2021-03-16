import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { parse } from 'query-string';
import { orderDataToLS } from '../../utils/order';

import { useStyles } from './thanks-page.styles';
import { THANKS_PAGE_TITLE } from '../../translations/thanks-page.translations';
import OrderData from './order-data';
import {
  addPaymentMethod,
  getOrder,
  getPaidOrder,
  resetOrder
} from '../../redux/order/order.actions';
import routes from '../../configs/routes';
import { resetCart } from '../../redux/cart/cart.actions';
import { CHECKOUT_PAYMENT } from '../../translations/checkout.translations';
import { getFromLocalStorage } from '../../services/local-storage.service';

const ThanksPage = () => {
  const router = useLocation();

  const dispatch = useDispatch();
  const { language, currency, order, loading, isLightTheme } = useSelector(
    ({ Language, Currency, Order, Theme }) => ({
      language: Language.language,
      currency: Currency.currency,
      order: Order.order,
      loading: Order.loading,
      isLightTheme: Theme.lightMode
    })
  );
  const styles = useStyles({
    isLightTheme
  });

  useEffect(() => {
    // dispatch(resetCart());
    const paymentMethod = getFromLocalStorage(orderDataToLS.paymentMethod);
    if (paymentMethod === CHECKOUT_PAYMENT[language].card) {
      const { order_id: paidOrderNumber } = parse(router.search);
      dispatch(getPaidOrder(paidOrderNumber));
      // dispatch(getOrder());
    }

    if (paymentMethod === CHECKOUT_PAYMENT[language].cash) {
      // dispatch(getOrder());
    }

    return () => {
      dispatch(resetOrder());
      dispatch(addPaymentMethod(''));
    };
  }, []);

  return (
    <div className={styles.thanksContainer}>
      {!order && <Redirect to={routes.pathToMain} />}
      {!loading && (
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
        </>
      )}
    </div>
  );
};

export default ThanksPage;
