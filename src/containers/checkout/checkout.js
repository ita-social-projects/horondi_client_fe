import React from 'react';
import { useSelector } from 'react-redux';
import OrderForm from './order-form';
import Cart from '../../pages/cart';

export const Checkout = () => {
  const cartItems = useSelector(({ Cart: cartData }) => cartData.list);
  const categories = useSelector(
    ({ Categories: categoriesData }) => categoriesData.list
  );

  return (
    <>
      <Cart cartItems={cartItems} categories={categories} />
      {/* {cartItems.length && <OrderForm />} */}
    </>
  );
};
