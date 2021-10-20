import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { getUserOrders } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { limitHistoryOrders } from '../../const/user-order-history';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getUserOrdersCountQuery } from './operations/order-history.queries';

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(null);
  const { orders, loading } = useSelector(({ User }) => ({
    orders: User.userOrders,
    loading: User.userLoading
  }));
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();

  const { loadingCount, error } = useQuery(getUserOrdersCountQuery, {
    variables: {
      id: '617036ea0f1341197c925321'
    },
    onCompleted: (data) => {
      setCountPerPage(data.getCountUserOrders.countOrder);
    }
  });

  const quantityPages = Math.ceil(countPerPage / limitHistoryOrders);

  useEffect(() => {
    dispatch(
      getUserOrders({
        pagination: {
          limit: limitHistoryOrders,
          skip: (currentPage - 1) * limitHistoryOrders
        }
      })
    );
  }, [currentPage, countPerPage]);

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

  if (loadingCount || error) return errorOrLoadingHandler(error, loadingCount);

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
