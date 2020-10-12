import React from 'react';
import { useSelector } from 'react-redux';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';

import { useStyles } from './filled-order.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';

const FilledOrder = ({ items, totalPrice, name, currency }) => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  return (
    <div className={styles.root} data-cy={name}>
      <Link to='/' className={styles.backButton}>
        <KeyboardBackspaceIcon />
      </Link>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>{CART_TABLE_FIELDS[language].item}</div>
          <div>{CART_TABLE_FIELDS[language].quantity}</div>
          <div>{CART_TABLE_FIELDS[language].price}</div>
        </div>
        {items}
      </div>
      <div className={styles.total}>
        {CART_TABLE_FIELDS[language].total}: {totalPrice} {currency}
      </div>
    </div>
  );
};

export default FilledOrder;
