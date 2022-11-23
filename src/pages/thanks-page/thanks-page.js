import React, { useLayoutEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useStyles } from './thanks-page.styles';
import { useCart } from '../../hooks/use-cart';
import ThanksCard from './thanks-card';
import { sendOrderToEmail } from '../../redux/order/order.actions';

const ThanksPage = () => {
  const { orderNumber } = useParams();
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const { cartItems, cartOperations } = useCart();
  const { clearCart } = cartOperations;

  const language = useMemo(() => (i18n.language === 'ua' ? 0 : 1), [i18n]);

  useLayoutEffect(() => {
    if (cartItems.length) {
      clearCart();
      dispatch(sendOrderToEmail({ language, paidOrderNumber: orderNumber }));
    }
  }, [dispatch, cartItems.length, clearCart, language, orderNumber]);

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksInfo}>
        <ThanksCard orderNumber={orderNumber} />
      </div>
    </div>
  );
};

export default ThanksPage;
