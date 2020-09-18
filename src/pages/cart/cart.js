import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './cart.styles';
import EmptyCart from './empty-cart';
import FilledCart from './filled-cart';

const Cart = () => {
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles();
  console.log(cartItems);
  return (
    <div className={styles.root}>
      {/* {cartItems.length ? <FilledCart items={cartItems} /> : <EmptyCart />} */}
    </div>
  );
};

export default Cart;
