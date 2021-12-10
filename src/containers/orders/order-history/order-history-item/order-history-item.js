import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getFormatDate } from '../../../../utils/date';
import { getCurrencySign } from '../../../../utils/currency';
import { STATUS_COLORS } from '../../constants';
import OrderHistoryTable from '../order-history-table/index';
import OrderHistoryItemProduct from '../order-history-item-product';
import { useStyles } from './order-history-item.styles';

const OrderHistoryItem = ({ order }) => {
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const styles = useStyles();
  const { t } = useTranslation();

  const { color } = STATUS_COLORS.find((item) => item.label === order.status);

  const orderProducts = order.items.map((item) => (
    <OrderHistoryItemProduct
      key={order.dateOfCreation + item.options.size.name}
      item={item}
      currency={currency}
    />
  ));

  const totalPrice = order.totalItemsPrice[currency].value;
  const currencySign = getCurrencySign(currency);
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
          <div style={{ color: { color } }}>{order.status}</div>
        </div>
      </div>
      <div>
        <OrderHistoryTable items={orderProducts} totalPrice={totalPrice} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.totalText}>{t('common.total')}:</div>
        <div className={styles.totalText}>
          <FontAwesomeIcon icon={currencySign} />
          {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
