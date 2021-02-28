import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import { useStyles } from './order-data.styles';
import { THANKS_PAGE_TITLE } from '../../../translations/thanks-page.translations';
import OrderItemCard from './order-item-card';
import { DEFAULT_CURRENCY, IMG_URL } from '../../../configs';
import { CHECKOUT_TITLES } from '../../../translations/checkout.translations';

const OrderData = ({ language, currency, order, isLightTheme }) => {
  const styles = useStyles({ isLightTheme });

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
            <OrderItemCard key={item._id} item={item} language={language} currency={currency} />
          ))}
          <TableRow classes={{ root: styles.result }}>
            <TableCell classes={{ root: styles.resultTitle }}>
              {THANKS_PAGE_TITLE[language].result}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderData;
