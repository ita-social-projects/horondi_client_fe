import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyOrder from '../../order/empty-order';

const EmptyCart = () => {
  const { t } = useTranslation();
  return <EmptyOrder title={t('cart.emptyCart')} buttonTitle={t('cart.empty')} name='empty-cart' />;
};

export default EmptyCart;
