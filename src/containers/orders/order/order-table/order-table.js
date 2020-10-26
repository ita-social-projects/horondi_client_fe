import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './order-table.styles';
import { ORDER_TABLE_FIELDS } from '../../../../translations/order.translations';

const OrderTable = ({ items, totalPrice, currency }) => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>{ORDER_TABLE_FIELDS[language].item}</div>
          <div>{ORDER_TABLE_FIELDS[language].quantity}</div>
          <div>{ORDER_TABLE_FIELDS[language].price}</div>
        </div>
        {items}
      </div>
      <div className={styles.total}>
        {ORDER_TABLE_FIELDS[language].total}: {totalPrice} {currency}
      </div>
    </>
  );
};

export default OrderTable;
