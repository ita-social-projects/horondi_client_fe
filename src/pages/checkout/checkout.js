import React from 'react';
import OrderForm from './order-form';
import Cart from '../cart';

export const Checkout = () => {
  return (
    <div>
      <Cart />
      <OrderForm />
    </div>
  );
};
