import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import { useStyles } from './order-table.styles';
import {
  CART_TABLE_FIELDS,
  CART_TITLES,
  CART_BUTTON_TITLES
} from '../../../../translations/cart.translations';
import { MODAL_DELETE_MESSAGES } from '../../../../translations/modal.translations';
import { resetCart, cleanUserCart } from '../../../../redux/cart/cart.actions';
import CartItem from '../../cart/cart-item';
import Modal from '../../../../components/modal';

const OrderTable = ({ items, currency, calcPrice, user, cartLoading, cartQuantityLoading }) => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();
  const dispatch = useDispatch();

  const [modalVisibility, setModalVisibility] = useState(false);

  const cartItems = items.map((item) => (
    <CartItem
      key={item.product.product_id}
      item={item}
      calcPrice={calcPrice}
      language={language}
      currency={currency}
      user={user}
      cartLoading={cartLoading}
      cartQuantityLoading={cartQuantityLoading}
    />
  ));


  const onModalAction = (action) => {
    if (action) {
      if (user) {
        dispatch(cleanUserCart(user._id));
      } else {
        dispatch(resetCart());
      }
      setModalVisibility(false);
    }
  };


  return (
    <>
      {modalVisibility && (
        <>
          <Modal
            message={MODAL_DELETE_MESSAGES[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
            isCartModal
          />
        </>
      )}
      <div className={styles.titleWrapper}>
        <h2>
          {CART_TITLES[language].filled}{' '}
          <span className={styles.quantity}>
            ({items.length} {CART_TITLES[language].quantity})
          </span>
        </h2>
        <span className={styles.cartButton} onClick={() => setModalVisibility(true)}>
          {CART_BUTTON_TITLES[language].deleteAllCart}
        </span>
      </div>
      <Table>
        <TableHead>
          <TableRow classes={{ root: styles.tableHeader }}>
            <TableCell>{CART_TABLE_FIELDS[language].photo}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].item}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].quantity}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].price}</TableCell>
            <TableCell>{CART_TABLE_FIELDS[language].actions}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{cartItems}</TableBody>
      </Table>
    </>
  );
};

export default OrderTable;
