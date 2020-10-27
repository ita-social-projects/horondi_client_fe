import React from 'react';
import { useSelector } from 'react-redux';
import EmptyOrder from '../../order/empty-order';
import {
  ORDER_BUTTON_TITLES,
  ORDER_HISTORY_TITLES
} from '../../../../translations/order.translations';

const EmptyOrderHistory = () => {
  const language = useSelector(({ Language }) => Language.language);

  return (
    <EmptyOrder
      title={ORDER_HISTORY_TITLES[language].empty}
      buttonTitle={ORDER_BUTTON_TITLES[language].empty}
      name='empty-order-history'
    />
  );
};

export default EmptyOrderHistory;
