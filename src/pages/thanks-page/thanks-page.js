import React, { useLayoutEffect } from 'react';
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
  const { cart, cartOperations } = useCart();
  const { clearCart } = cartOperations;

  const language = i18n.language === 'ua' ? 0 : 1;

  useLayoutEffect(() => {
    if (cart.length) {
      clearCart();
    }
    dispatch(sendOrderToEmail({ language, paidOrderNumber: orderNumber }));
  }, []);

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksInfo}>
        <ThanksCard orderNumber={orderNumber} />
      </div>
    </div>
  );
};

export default ThanksPage;
