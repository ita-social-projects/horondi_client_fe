import React from 'react';
import { useTranslation } from 'react-i18next';

import { getFormatDate } from '../../../../utils/date';
import { STATUS_COLORS } from '../../constants';
import OrderHistoryTable from '../order-history-table/index';
import OrderHistoryItemProduct from '../order-history-item-product';
import { useStyles } from './order-history-item.styles';
import { useCurrency } from '../../../../hooks/use-currency';

const OrderHistoryItem = ({ order }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { getCurrencySign, getPriceWithCurrency } = useCurrency();
  const {
    totalPriceToPay,
    dateOfCreation,
    items,
    orderNumber,
    fixedExchangeRate,
    status,
    itemsPriceWithDiscount
  } = order;

  const { color } = STATUS_COLORS.find((item) => item.label === status);

  const orderProducts = items.map((item, idx) => (
    <OrderHistoryItemProduct
      key={item.product._id + item.options.size.name}
      item={item}
      itemPriceWithDiscount={itemsPriceWithDiscount[idx]}
      fixedExchangeRate={fixedExchangeRate}
    />
  ));

  const totalPrice = getPriceWithCurrency(totalPriceToPay, fixedExchangeRate);
  const currencySign = getCurrencySign();
  const dateInFormat = getFormatDate(dateOfCreation);

  const columnTitles = [
    {
      text: t(`checkout.checkoutTitles.orderNumber`),
      value: orderNumber
    },
    {
      text: t(`orderHistory.tableField.date`),
      value: dateInFormat
    },
    {
      text: t(`orderHistory.tableField.status`),
      value: t(`orderHistory.statuses.${status}`),
      styles: { color }
    }
  ];

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        {columnTitles.map((title) => (
          <div className={styles.headingStatus} key={title.text}>
            <div>{title.text}</div>
            <div style={title.styles}>{title.value}</div>
          </div>
        ))}
      </div>
      <div>
        <OrderHistoryTable items={orderProducts} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.totalText}>{t('common.total')}:</div>
        <div className={styles.totalText}>
          {currencySign}
          {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
