import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../components/loader/loader';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { limitHistoryOrders } from '../../const/user-order-history';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getUserOrdersQuery } from './operations/order-history.queries';

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersCount, setOrdersCount] = useState(null);
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();
  const styles = useStyles();

  const { loading: loadingOrders, error: errorOrders } = useQuery(getUserOrdersQuery, {
    variables: {
      pagination: {
        limit: limitHistoryOrders,
        skip: (currentPage - 1) * limitHistoryOrders
      }
    },
    onCompleted: (data) => {
      setOrders(data.getUserOrders.userOrders);
      setOrdersCount(data.getUserOrders.ordersCount);
    }
  });

  const quantityPages = Math.ceil(ordersCount / limitHistoryOrders);

  const changeHandler = (value) => {
    setCurrentPage(value);
  };

  if (loadingOrders) {
    return (
      <div className={styles.loader}>
        <Loader className={styles.loader} />
      </div>
    );
  }

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
