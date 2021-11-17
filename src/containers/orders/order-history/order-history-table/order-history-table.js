import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import OrderHistoryOrderItem from '../order-history-order-item/index';
import { useStyles } from './order-history-table.style';

const OrderHistoryTable = ({ items }) => {
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));

  const styles = useStyles();

  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const orderHistoryItems = items.map((item, idx) => (
    <OrderHistoryOrderItem key={idx} item={item} language={language} currency={currency} />
  ));

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>{t('orderHistory.photo')}</TableCell>
            <TableCell className={styles.tableCell}>{t('orderHistory.item')}</TableCell>
            <TableCell className={styles.tableCell}>{t('orderHistory.quantity')}</TableCell>
            <TableCell className={styles.tableCell}>
              <div>{t('orderHistory.price')}</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{orderHistoryItems}</TableBody>
      </Table>
    </>
  );
};

export default OrderHistoryTable;
