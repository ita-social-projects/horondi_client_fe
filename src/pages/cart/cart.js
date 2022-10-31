import React from 'react';
import { useAppStyles } from '../../components/app/app.styles';
import EmptyCart from '../../containers/orders/cart/empty-cart';
import FilledCart from '../../containers/orders/cart/filled-cart';
import { useCart } from '../../hooks/use-cart';

const Cart = () => {
  const styles = useAppStyles();
  const { cartItems, cartOperations } = useCart();

  return (
    <div className={styles.rootApp}>
      <div className={styles.containerApp}>
        {cartItems.length ? (
          <FilledCart items={cartItems} cartOperations={cartOperations} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
