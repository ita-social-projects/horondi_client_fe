import React from 'react';
import { useSelector } from 'react-redux';
import EmptyOrder from '../../order/empty-order';
import { CART_TITTLES } from '../../../../translations/cart.translations';

const EmptyCart = () => {
  const language = useSelector(({ Language }) => Language.language);

  return <EmptyOrder title={CART_TITTLES[language].empty} name='empty-cart' />;
};

export default EmptyCart;
