import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './thanks-page.styles';
import {
  THANKS_PAGE_TITLE
} from '../../translations/thanks-page.translations';
import OrderData from './order-data';
import { Redirect } from 'react-router';
import { getOrder } from '../../redux/order/order.actions';

const ThanksPage = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { language, currency, order, loading } = useSelector(({ Language, Currency, Order }) => ({
    language: Language.language,
    currency: Currency.currency,
    order: Order.order,
    loading: Order.loading
  }));

  useEffect(() => {
    dispatch(getOrder())
  }, []);
  return (

    <div className={styles.thanksContainer}>
      {/*{!order && <Redirect to={'/'}/>}*/}

      {
        !loading &&
        <>
          <h2 className={styles.thunksTitle}>
            {THANKS_PAGE_TITLE[language].thanks}
          </h2>
          <div className={styles.thunksInfo}>
            <OrderData
              order={order}
              language={language}
              currency={currency}
            />
          </div>
        </>
      }
    </div>

  );
};

export default ThanksPage;
