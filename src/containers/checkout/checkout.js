import React from 'react';
import { useSelector } from 'react-redux';
import OrderForm from './order-form';
import Cart from '../../pages/cart';

export const Checkout = () => {
  const { cartData } = useSelector(({ Cart }) => ({
    cartData: Cart.list
  }));
  return (
    <>
      <Cart />
      {cartData.length && <OrderForm />}
    </>
  );
};
