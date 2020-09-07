import React from 'react';
// import { useStyles} from 'checkout.styles'
import OrderForm from './order-form';
import Cart from '../cart';

export const Checkout = () => (
  // const style = useStyles()
  <div>
    <Cart />
    <OrderForm />
  </div>
);
