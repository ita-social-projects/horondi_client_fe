import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { useStyles } from './thanks-page.styles';
import { THANKS_PAGE_TITLE } from '../../translations/thanks-page.translations';
import OrderData from './order-data';
import { getOrder, resetOrder } from '../../redux/order/order.actions';
import routes from '../../configs/routes';
import { resetCart } from '../../redux/cart/cart.actions';

const ThanksPage = () => {
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
    dispatch(resetCart());
    dispatch(getOrder());
    return () => {
      dispatch(resetOrder());
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
