import React from 'react';

import { useStyles } from './cart.styles';
import EmptyCart from '../../containers/orders/cart/empty-cart';
import FilledCart from '../../containers/orders/cart/filled-cart';

const Cart = ({ cartItems }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {cartItems.length ? <FilledCart items={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
