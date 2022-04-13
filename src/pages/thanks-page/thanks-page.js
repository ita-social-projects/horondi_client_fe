import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { orderDataToLS } from '../../utils/order';
import { useStyles } from './thanks-page.styles';
import ThanksCard from './thanks-card';
import { getOrder, setOrder } from '../../redux/order/order.actions';
import routes from '../../configs/routes';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import { Loader } from '../../components/loader/loader';
import { deliveryTypes, ORDER_NUMBER_LENGTH } from '../../configs';
import { orderPaidSubscription, sendOrderToEmail } from '../../redux/order/order.operations';
import { checkoutPayMethod } from '../../containers/checkout/checkout-form/const';

const { pathToMain } = routes;

const ThanksPage = () => {
  const router = useLocation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const language = i18n.language === 'ua' ? 0 : 1;

  const [paidOrderLoading, setLoading] = useState(true);

  const { order, loading, user } = useSelector(({ Order, User }) => ({
    order: Order.order,
    loading: Order.loading,
    user: User.userData
  }));

  const styles = useStyles();
  const paymentMethod = getFromLocalStorage(orderDataToLS.paymentMethod);

  const [sendPaidOrderToEmail] = useLazyQuery(sendOrderToEmail);

  const paidOrderNumber = router.pathname.slice(router.pathname.length - ORDER_NUMBER_LENGTH);

  useSubscription(orderPaidSubscription, {
    variables: { orderId: paidOrderNumber },
    onSubscriptionData: ({
      subscriptionData: {
        data: { paidOrder }
      }
    }) => {
      dispatch(setOrder(paidOrder));
      setToLocalStorage(orderDataToLS.order, paidOrder);
      sendPaidOrderToEmail({
        variables: {
          language,
          paidOrderNumber
        }
      });
      setLoading(false);
    }
  });

  useEffect(() => {
    if (paymentMethod === checkoutPayMethod.cash) {
      dispatch(getOrder());
    }
  }, [dispatch, language, user]);

  if ((paymentMethod === checkoutPayMethod.card && paidOrderLoading) || loading) {
    return <Loader data-testid='loader' />;
  }

  const getDeliveryAddress = (orderPayload) => {
    const deliveryType = orderPayload?.delivery.sentBy;
    const courierOffice = orderPayload?.delivery.courierOffice;
    const customerAddress = `${orderPayload?.delivery.city}, ${orderPayload?.delivery.street}, ${orderPayload?.delivery.house}`;
    if (deliveryType === deliveryTypes.NOVAPOST || deliveryType === deliveryTypes.UKRPOST) {
      return courierOffice;
    }
    if (deliveryType === deliveryTypes.SELFPICKUP) {
      return t('thanksPage.thanksCard.selfDelivery');
    }
    return customerAddress;
  };

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
                customerName={`${order?.recipient.firstName} ${order?.recipient.lastName}`}
                phoneNumber={order?.recipient.phoneNumber}
                deliveryType={order?.delivery.sentBy}
                address={getDeliveryAddress(order)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThanksPage;
