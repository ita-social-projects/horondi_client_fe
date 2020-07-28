import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './filled-cart.styles';
import CartItem from '../cart-item';
import {
  CART_BUTTONS,
  CART_TABLE_FIELDS
} from '../../../translations/cart.translations';

const FilledCart = ({ items }) => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const totalCounter = () =>
    items.reduce((acc, item) => acc + item.totalPrice * item.quantity, 0);

  return (
    <div className={styles.root}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>{CART_TABLE_FIELDS[language].item}</th>
            <th>{CART_TABLE_FIELDS[language].quantity}</th>
            <th>{CART_TABLE_FIELDS[language].price}</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {items.map((item) => (
            <CartItem key={Math.random()} item={item} />
          ))}
        </tbody>
      </table>
      <div className={styles.total}>
        {CART_TABLE_FIELDS[language].total}: {totalCounter()} UAH
      </div>
      <div className={styles.controlButtons}>
        <Link to='/'>
          <Button variant='contained'>{CART_BUTTONS[language].shopMore}</Button>
        </Link>
        <Link to='/checkout'>
          <Button variant='contained'>{CART_BUTTONS[language].checkout}</Button>
        </Link>
      </div>
    </div>
  );
};

export default FilledCart;
