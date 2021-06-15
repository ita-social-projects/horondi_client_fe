import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';

import { getUserOrders , setCurrentPage } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import { useStyles } from './order-history.styles';

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
  // const history = useHistory();
  // const { search } = useLocation();
  // const searchParams = new URLSearchParams(search);
  // const url = searchParams.toString();

  const curPage = Math.ceil(countPerPage / 2);
  useEffect(() => {
    dispatch(
      getUserOrders({
        pagination: {
          limit: 2,
          skip: 0
        }
      })
    );
  }, [dispatch]);

  const changeHandler = (e, value) => {
    console.log(value);

    setCurrentPage(3);

    // console.log('changeHandler');
    // searchParams.set('page', value);
    // history.push(`?${searchParams.toString()}`);
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
          <div className={styles.paginationDiv}>
            <Pagination
              count={curPage}
              variant='outlined'
              shape='rounded'
              page={currentPage + 1}
              onChange={changeHandler}
            />
          </div>
        </>
      ) : (
        <EmptyOrderHistory />
      )}
    </div>
  );
};

export default OrderHistory;
