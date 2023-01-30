import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyOrder from '../../order/empty-order';

const EmptyCart = () => {
  const { t } = useTranslation();
  return (
    <EmptyOrder
      emptyTitle={t('cart.emptyCart')}
      buttonTitle={t('cart.empty')}
      currentPageText='cart.pathBack.yourCart'
      name='empty-cart'
    />
  );
};

export default EmptyCart;
