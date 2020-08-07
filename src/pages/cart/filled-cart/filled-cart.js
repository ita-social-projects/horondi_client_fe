import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './filled-cart.styles';
import CartItem from '../cart-item';
import {
  CART_BUTTONS,
  CART_TABLE_FIELDS
} from '../../../translations/cart.translations';
import { removeItemFromCart } from '../../../redux/cart/cart.actions';
import { MODAL_DELETE_MESSAGES } from '../../../translations/modal.translations';
import Modal from '../../../components/modal';

const FilledCart = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const totalCounter = () =>
    items.reduce((acc, item) => acc + item.totalPrice * item.quantity, 0);

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(modalItem));
    setModalVisibility(false);
  };

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
            <CartItem
              key={Math.random()}
              item={item}
              language={language}
              setModalVisibility={setModalVisibility}
              setModalItem={setModalItem}
            />
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
      {modalVisibility && (
        <div>
          <Modal
            itemName={modalItem.name[language].value}
            message={MODAL_DELETE_MESSAGES[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
          />
        </div>
      )}
    </div>
  );
};

export default FilledCart;
