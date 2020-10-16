import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './cart.styles';
import EmptyCart from '../../containers/orders/cart/empty-cart';
import FilledCart from '../../containers/orders/cart/filled-cart';

const Cart = () => {
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {cartItems.length ? <FilledCart items={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
