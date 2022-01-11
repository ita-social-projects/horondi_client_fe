import React from 'react';

import { useSelector } from 'react-redux';
import { useStyles } from './cart.styles';
import EmptyCart from '../../containers/orders/cart/empty-cart';
import FilledCart from '../../containers/orders/cart/filled-cart';
import { useCart } from '../../hooks/use-cart';

const Cart = () => {
  const styles = useStyles();
  const { user } = useSelector(({ User }) => ({
    user: User.userData
  }));
  const { cart: cartItems, cartOperations } = useCart(user);
  return (
    <div className={styles.root}>
      {cartItems.length ? (
        <FilledCart items={cartItems} cartOperations={cartOperations} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
