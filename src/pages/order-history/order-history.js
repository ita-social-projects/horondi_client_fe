import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { limitHistoryOrders } from '../../const/user-order-history';
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
        limit: limitHistoryOrders,
        skip: (currentPage - 1) * limitHistoryOrders
      }
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first'
  });

  if (loadingOrders || errorOrders) return errorOrLoadingHandler(errorOrders, loadingOrders);

  const orders = data.getUserOrders.userOrders;
  const { ordersCount } = data.getUserOrders;
  const quantityPages = Math.ceil(ordersCount / limitHistoryOrders);

  const changeHandler = (value) => {
    setCurrentPage(value);
  };

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
