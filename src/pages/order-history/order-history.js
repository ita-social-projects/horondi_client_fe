import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';

import { getUserOrders, setCurrentPage } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import OrderHistoryPagination from '../../containers/orders/order-history/order-history-pagination/index';
import { useStyles } from './order-history.styles';
import { limitHistoryOrders } from '../../const/user-order-history';
import { ORDER_HISTORY_TITLES } from '../../translations/order.translations';

const OrderHistory = () => {
  const { orders, loading, language, currentPage, countPerPage } = useSelector(
    ({ User, Language }) => ({
      orders: User.userOrders,
      loading: User.userLoading,
      language: Language.language,
      currentPage: User.currentPage,
      countPerPage: User.countPerPage
    })
  );
  const dispatch = useDispatch();
  const styles = useStyles();

  const quantityPages = Math.ceil(countPerPage / limitHistoryOrders);

  useEffect(() => {
    dispatch(
      getUserOrders({
        pagination: {
          limit: limitHistoryOrders,
          skip: currentPage * limitHistoryOrders
        }
      })
    );
  }, [currentPage, countPerPage]);

  const changeHandler = (value) => {
    dispatch(setCurrentPage(value - 1));
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
          <div className={styles.mainTitle}>{ORDER_HISTORY_TITLES[language].title}</div>
          <div>
            {orders.map((item, index) => (
              <OrderHistoryOrder order={item} key={index} />
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
