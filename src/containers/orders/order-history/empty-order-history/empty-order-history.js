import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyOrder from '../../order/empty-order';

const EmptyOrderHistory = () => {
  const { t } = useTranslation();
  return (
    <EmptyOrder
      title={t('orderHistory.title')}
      buttonTitle={t('orderHistory.buttonEmpty')}
      name='empty-order-history'
    />
  );
};

export default EmptyOrderHistory;
