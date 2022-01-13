import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import OrderHistoryItem from '../../containers/orders/order-history/order-history-item';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { LIMIT_HISTORY_ORDERS } from './constants';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getUserOrdersQuery } from './operations/order-history.queries';

const OrderHistory = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    loading: loadingOrders,
    error: errorOrders,
    data
  } = useQuery(getUserOrdersQuery, {
    variables: {
      pagination: {
        limit: LIMIT_HISTORY_ORDERS,
        skip: (currentPage - 1) * LIMIT_HISTORY_ORDERS
      }
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first'
  });

  if (loadingOrders || errorOrders) return errorOrLoadingHandler(errorOrders, loadingOrders);

  const { ordersCount, userOrders } = data.getUserOrders;
  const quantityPages = Math.ceil(ordersCount / LIMIT_HISTORY_ORDERS);

  const changeHandler = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.root}>
      {userOrders && userOrders.length ? (
        <>
          <div className={styles.mainTitle}>{t('orderHistory.title')}</div>
          <div>
            {userOrders.map((order) => (
              <OrderHistoryItem order={order} key={order.orderNumber} />
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
