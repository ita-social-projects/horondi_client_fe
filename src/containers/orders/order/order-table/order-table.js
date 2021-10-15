import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import { useStyles } from './order-table.styles';

import { CART_TABLE_FIELDS, CART_TITLES } from '../../../../translations/cart.translations';

import {
  MODAL_DELETE_ITEM_MESSAGE,
  MODAL_DELETE_ALL_MESSAGE
} from '../../../../translations/modal.translations';

import {
  resetCart,
  cleanUserCart,
  deleteProductFromUserCart,
  removeItemFromCart
} from '../../../../redux/cart/cart.actions';

import CartItem from '../../cart/cart-item';
import Modal from '../../../../components/modal';
import ThemeContext from '../../../../context/theme-context';

const OrderTable = ({ items, currency, calcPrice, user, cartLoading, cartQuantityLoading }) => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const styles = useStyles();
  const dispatch = useDispatch();
  const isLightTheme = useContext(ThemeContext);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [removeOneModalVisibility, setRemoveOneModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const cartItems = items.map((item) => (
    <CartItem
      key={item.product.product_id}
      item={item}
      initialPrice={item.price}
      calcPrice={calcPrice}
      language={language}
      currency={currency}
      user={user}
      cartLoading={cartLoading}
      cartQuantityLoading={cartQuantityLoading}
      setModalVisibility={setRemoveOneModalVisibility}
      setModalItem={setModalItem}
    />
  ));

  const onModalAction = (action) => {
    if (action) {
      if (user) {
        dispatch(cleanUserCart(user._id));
      } else {
        dispatch(resetCart());
      }
    }
    setModalVisibility(false);
  };

  const onRemoveOneModalAction = (action) => {
    if (action) {
      if (user) {
        dispatch(deleteProductFromUserCart({ userId: user._id, items: modalItem }));
      } else {
        dispatch(removeItemFromCart(modalItem));
      }
    }

    setRemoveOneModalVisibility(false);
  };

  return (
    <div className={styles.root}>
      {modalVisibility && (
        <>
          <Modal
            message={MODAL_DELETE_ALL_MESSAGE[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
            isCartModal
          />
        </>
      )}
      {removeOneModalVisibility && (
        <>
          <Modal
            message={MODAL_DELETE_ITEM_MESSAGE[language]}
            isOpen={removeOneModalVisibility}
            onAction={onRemoveOneModalAction}
            language={language}
            isCartModal
          />
        </>
      )}
      <h2 className={isLightTheme ? styles.lightThemeTitleWrapper : styles.darkThemeTitleWrapper}>
        {CART_TITLES[language].filled}{' '}
      </h2>
      <div className={styles.table}>
        <Table>
          <TableHead>
            <TableRow
              classes={
                isLightTheme
                  ? { root: styles.lightThemeTableHeader }
                  : { root: styles.darkThemeTableHeader }
              }
            >
              <TableCell>{CART_TABLE_FIELDS[language].product}</TableCell>
              <TableCell>{CART_TABLE_FIELDS[language].size}</TableCell>
              <TableCell>{CART_TABLE_FIELDS[language].price}</TableCell>
              <TableCell>{CART_TABLE_FIELDS[language].quantity}</TableCell>
              <TableCell>{CART_TABLE_FIELDS[language].toPay}</TableCell>
              <TableCell>{CART_TABLE_FIELDS[language].actions}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartItems}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
