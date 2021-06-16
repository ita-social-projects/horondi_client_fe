import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import OrderHistoryOrderItem from '../order-history-order-item/index';

import { ORDER_TABLE_FIELDS } from '../../../../translations/order.translations';
import { useStyles } from './order-history-table.style';

const OrderHistoryTable = ({ items, totalPrice }) => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const styles = useStyles();

  const orderHistoryItems = items.map((item, idx) => (
    <OrderHistoryOrderItem key={idx} item={item} language={language} currency={currency} />
  ));

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>{ORDER_TABLE_FIELDS[language].photo}</TableCell>
            <TableCell className={styles.tableCell}>{ORDER_TABLE_FIELDS[language].item}</TableCell>
            <TableCell className={styles.tableCell}>
              {ORDER_TABLE_FIELDS[language].quantity}
            </TableCell>
            <TableCell className={styles.tableCell}>{ORDER_TABLE_FIELDS[language].price}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{orderHistoryItems}</TableBody>
      </Table>
    </>
  );
};

export default OrderHistoryTable;
