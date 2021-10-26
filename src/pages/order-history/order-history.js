import React from 'react';
import { useTranslation } from 'react-i18next';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { limitHistoryOrders } from '../../const/user-order-history';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getUserOrdersQuery } from './operations/order-history.queries';
import usePaginationForOrders from './hooks/use-pagination-for-orders';

const OrderHistory = () => {
  const { loadingOrders, errorOrders, orders, currentPage, changeHandler, quantityPages } =
    usePaginationForOrders(limitHistoryOrders, getUserOrdersQuery);
  const { t } = useTranslation();
  const styles = useStyles();

  if (loadingOrders || errorOrders) return errorOrLoadingHandler(errorOrders, loadingOrders);

  return (
    <div className={styles.root}>
      {orders && orders.length ? (
        <>
          <div className={styles.mainTitle}>{t('orderHistory.title')}</div>
          <div>
            {orders.map((item) => (
              <OrderHistoryOrder order={item} key={item._id} />
            ))}
          </div>
          {quantityPages >= 2 && (
            <OrderHistoryPagination data={[currentPage, quantityPages, changeHandler]} />
          )}
        </>
      ) : (
        <EmptyOrderHistory />
      )}
    </div>
  );
};

export default OrderHistory;
