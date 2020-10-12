import React from 'react';
import { useSelector } from 'react-redux';

import FilledOrder from '../../order/filled-order';
import OrderHistoryOrderItem from '../order-history-order-item';

const OrderHistoryOrder = ({ order }) => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const orderList = order.items.map((item, index) => (
    <OrderHistoryOrderItem key={index} item={item} language={language} />
  ));

  const totalPrice = order.totalItemsPrice.find(
    (item) => item.currency === currency
  ).value;

  return (
    <div>
      <FilledOrder
        name='order-history-filled-order'
        items={orderList}
        totalPrice={totalPrice}
        currency={currency}
      />
    </div>
  );
};

export default OrderHistoryOrder;
