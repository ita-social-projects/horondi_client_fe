import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';

import { useStyles } from './order-data.styles';
import OrderItemCard from './order-item-card';
import { defaultProps, ORDER_PAYMENT_STATUS, thanksPropTypes } from '../../../utils/thank-you';

const OrderData = ({ currency, order, isLightTheme }) => {
  const styles = useStyles({ isLightTheme });
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const currencySign = currency ? faDollarSign : faHryvnia;

  return (
    <div className={styles.orderDataContainer}>
      <h3 className={styles.thunksInfoTitle}>{t('thanksPage.thanksPageTitle.yourOrder')}</h3>
      <Table classes={{ root: styles.tableHeader }}>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>{t('cart.cartTableFields.photo')}</TableCell>
            <TableCell className={styles.tableCell}>{t('cart.cartTableFields.item')}</TableCell>
            <TableCell className={styles.tableCell}>{t('common.quantity')}</TableCell>
            <TableCell className={styles.tableCell}>{t('common.price')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
          {order?.items.map((item) => (
            <OrderItemCard key={item} item={item} language={language} currency={currency} />
          ))}
        </TableBody>
      </Table>
      <div className={styles.result}>
        <span className={styles.resultTitle}>{t('thanksPage.thanksPageTitle.result')}</span>
        <span className={styles.resultStatus}>
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.CREATED &&
            t('thanksPage.paymentStatus.created')}
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.PROCESSING &&
            t('thanksPage.paymentStatus.processing')}
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.PAID && t('thanksPage.paymentStatus.paid')}
        </span>
        <span className={styles.resultTotalSum}>
          {order?.totalPriceToPay[currency].value} <FontAwesomeIcon icon={currencySign} />
        </span>
      </div>
    </div>
  );
};

OrderData.defaultProps = defaultProps;
OrderData.propTypes = thanksPropTypes;

export default OrderData;
