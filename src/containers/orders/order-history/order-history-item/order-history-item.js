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
  const { getCurrencySign } = useCurrency();

  const { color } = STATUS_COLORS.find((item) => item.label === order.status);

  const orderProducts = order.items.map((item) => (
    <OrderHistoryItemProduct key={item.product._id + item.options.size.name} item={item} />
  ));

  const totalPrice = order.totalItemsPrice;
  const currencySign = getCurrencySign();
  const dateInFormat = getFormatDate(order.dateOfCreation);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <div>
          {t(`checkout.checkoutTitles.orderNumber`)}
          {order.orderNumber}{' '}
        </div>
        <div>
          {t(`orderHistory.tableField.date`)}: {dateInFormat}
        </div>
        <div className={styles.headingStatus}>
          <div>{t(`orderHistory.tableField.status`)}:&nbsp;</div>
          <div style={{ color: { color } }}>{t(`orderHistory.statuses.${order.status}`)}</div>
        </div>
      </div>
      <div>
        <OrderHistoryTable items={orderProducts} totalPrice={totalPrice} />
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
