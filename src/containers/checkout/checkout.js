import React from 'react';
import { useSelector } from 'react-redux';
import OrderForm from './order-form';
import Cart from '../../pages/cart';

export const Checkout = () => {
  const { cart } = useSelector(({ Cart }) => ({
    cart: Cart.list
  }));
  return (
    <>
      <Cart />
      {cart.length && <OrderForm />}
    </>
  );
};
