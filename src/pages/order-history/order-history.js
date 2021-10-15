import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserOrders, setCurrentPage } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { limitHistoryOrders } from '../../const/user-order-history';

const OrderHistory = () => {
  const { orders, loading, currentPage, countPerPage } = useSelector(({ User }) => ({
    orders: User.userOrders,
    loading: User.userLoading,
    currentPage: User.currentPage,
    countPerPage: User.countPerPage
  }));
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();

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
    dispatch(setCurrentPage(value));
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader className={styles.loader} />
      </div>
    );
  }

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
