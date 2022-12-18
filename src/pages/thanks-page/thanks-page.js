import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router';
import { useStyles } from './thanks-page.styles';
import { useCart } from '../../hooks/use-cart';
import ThanksCard from './thanks-card';

const ThanksPage = () => {
  const { orderNumber } = useParams();
  const styles = useStyles();
  const { cartItems, cartOperations } = useCart();
  const { clearCart } = cartOperations;

  useLayoutEffect(() => {
    if (cartItems.length) {
      clearCart();
    }
  }, [cartItems.length, clearCart]);

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksInfo}>
        <ThanksCard orderNumber={orderNumber} />
      </div>
    </div>
  );
};

export default ThanksPage;
