import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import OrderHistoryOrderItem from '../order-history-order-item/index';
import { useStyles } from './order-history-table.style';

const OrderHistoryTable = ({ items }) => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const styles = useStyles();
  const { t } = useTranslation();
  const orderHistoryItems = items.map((item) => (
    <OrderHistoryOrderItem
      key={item._owner.key}
      item={item}
      language={language}
      currency={currency}
    />
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
