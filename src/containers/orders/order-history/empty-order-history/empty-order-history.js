import React from 'react';
import { useSelector } from 'react-redux';
import EmptyOrder from '../../order/empty-order';
import { ORDER_HISTORY_LABELS } from '../../../../translations/order.translations';

const EmptyOrderHistory = () => {
  const language = useSelector(({ Language }) => Language.language);

  return (
    <EmptyOrder
      title={ORDER_HISTORY_LABELS[language].empty}
      name='empty-order-history'
    />
  );
};

export default EmptyOrderHistory;
