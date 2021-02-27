import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import { useStyles } from './order-data.styles';
import { THANKS_PAGE_TITLE } from '../../../translations/thanks-page.translations';
import CartItem from '../../../containers/orders/cart/cart-item';
import OrderItemCard from './order-item-card';

const OrderData = ({ language, currency, order }) => {
  const styles = useStyles();

  return (
    <div className={styles.orderDataContainer}>
      <h3 className={styles.thunksInfoTitle}>
        {THANKS_PAGE_TITLE[language].yourOrder}
      </h3>
      <Table classes={{ root: styles.tableHeader }}>
        <TableHead>
          <TableRow>
            <TableCell>{CART_TABLE_FIELDS[language].photo}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].item}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].quantity}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].price}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{
          order?.items.map((item) => (
            <OrderItemCard
              key={item._id}
              item={item}
              language={language}
              currency={currency}
            />
          ))
        }</TableBody>
      </Table>

    </div>
  );
};

export default OrderData;
