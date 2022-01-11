import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';

import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import { useStyles } from './order-data.styles';
import { PAYMENT_STATUS, THANKS_PAGE_TITLE } from '../../../translations/thanks-page.translations';
import OrderItemCard from './order-item-card';
import { defaultProps, ORDER_PAYMENT_STATUS, thanksPropTypes } from '../../../utils/thank-you';

const OrderData = ({ language, currency, order, isLightTheme }) => {
  const styles = useStyles({ isLightTheme });
  const currencySign = currency ? faDollarSign : faHryvnia;

  return (
    <div className={styles.orderDataContainer}>
      <h3 className={styles.thunksInfoTitle}>{THANKS_PAGE_TITLE[language].yourOrder}</h3>
      <Table classes={{ root: styles.tableHeader }}>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>{CART_TABLE_FIELDS[language].photo}</TableCell>
            <TableCell className={styles.tableCell}>{CART_TABLE_FIELDS[language].item}</TableCell>
            <TableCell className={styles.tableCell}>
              {CART_TABLE_FIELDS[language].quantity}
            </TableCell>
            <TableCell className={styles.tableCell}>{CART_TABLE_FIELDS[language].price}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
          {order?.items.map((item) => (
            <OrderItemCard key={item} item={item} language={language} currency={currency} />
          ))}
        </TableBody>
      </Table>
      <div className={styles.result}>
        <span className={styles.resultTitle}>{THANKS_PAGE_TITLE[language].result}</span>
        <span className={styles.resultStatus}>
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.CREATED &&
            PAYMENT_STATUS[language].created}
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.PROCESSING &&
            PAYMENT_STATUS[language].processing}
          {order?.paymentStatus === ORDER_PAYMENT_STATUS.PAID && PAYMENT_STATUS[language].paid}
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
