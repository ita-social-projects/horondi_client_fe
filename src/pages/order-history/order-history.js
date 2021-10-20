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
import { getUserOrdersCountQuery, getUserOrdersQuery } from './operations/order-history.queries';

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(null);
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();
  const styles = useStyles();

  const { loading, errorOrders } = useQuery(getUserOrdersQuery, {
    variables: {
      pagination: {
        limit: limitHistoryOrders,
        skip: (currentPage - 1) * limitHistoryOrders
      }
    },
    onCompleted: (data) => {
      setOrders(data.getUserOrders);
    }
  });

  const { loadingCount, errorCount } = useQuery(getUserOrdersCountQuery, {
    variables: {
      id: '617036ea0f1341197c925321'
    },
    onCompleted: (data) => {
      setCountPerPage(data.getCountUserOrders.countOrder);
    }
  });

  const quantityPages = Math.ceil(countPerPage / limitHistoryOrders);

  const changeHandler = (value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader className={styles.loader} />
      </div>
    );
  }

  if (loadingCount || errorCount || errorOrders)
    return errorOrLoadingHandler(loadingCount, errorCount, errorOrders);

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
