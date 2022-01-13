import React from 'react';

import { useSelector } from 'react-redux';
import { useStyles } from './cart.styles';
import EmptyCart from '../../containers/orders/cart/empty-cart';
import FilledCart from '../../containers/orders/cart/filled-cart';
import { Loader } from '../../components/loader/loader';

const Cart = () => {
  const styles = useStyles();
  const { cartItems, cartLoading } = useSelector((state) => ({
    cartItems: state.Cart.list,
    cartLoading: state.Cart.loading
  }));

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      {cartItems.length ? <FilledCart items={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
