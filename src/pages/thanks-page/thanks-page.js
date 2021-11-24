import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { parse } from 'query-string';
import { orderDataToLS } from '../../utils/order';
import { useStyles } from './thanks-page.styles';
import ThanksCard from './thanks-card';
import { getOrder, getPaidOrder } from '../../redux/order/order.actions';
import routes from '../../configs/routes';
import { resetCart, cleanUserCart } from '../../redux/cart/cart.actions';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { Loader } from '../../components/loader/loader';

const { pathToMain } = routes;

const ThanksPage = () => {
  const router = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { order, loading, paidOrderLoading, user } = useSelector(({ Currency, Order, User }) => ({
    order: Order.order,
    loading: Order.loading,
    paidOrderLoading: Order.paidOrderLoading,
    user: User.userData
  }));

  const styles = useStyles();
  const paymentMethod = getFromLocalStorage(orderDataToLS.paymentMethod);

  useEffect(() => {
    if (user) {
      dispatch(cleanUserCart(user._id));
    } else {
      dispatch(resetCart());
    }

    const { order_id: paidOrderNumber } = parse(router.search);

    if (paidOrderNumber) {
      dispatch(getPaidOrder(paidOrderNumber));
    } else {
      dispatch(getOrder());
    }
  }, []);

  if (loading || paidOrderLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksContainer}>
        {!order && <Redirect to={pathToMain} /> &&
          paymentMethod !== t('checkout.checkoutPayment.card')}
        {(!loading || !paidOrderLoading) && (
          <>
            <div className={styles.thunksInfo}>
              <ThanksCard
                orderNumber={order?.orderNumber}
                customerName='Some Name'
                phoneNumber='0933895428'
                deliveryType='Nova Poshta'
                address='Some str.'
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThanksPage;
