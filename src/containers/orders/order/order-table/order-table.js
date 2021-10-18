import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import { useStyles } from './order-table.styles';

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
  const { t } = useTranslation();
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
            message={t('cart.deleteAllItems')}
            isOpen={modalVisibility}
            onAction={onModalAction}
            isCartModal
          />
        </>
      )}
      {removeOneModalVisibility && (
        <>
          <Modal
            message={t('cart.deleteItem')}
            isOpen={removeOneModalVisibility}
            onAction={onRemoveOneModalAction}
            isCartModal
          />
        </>
      )}
      <h2 className={isLightTheme ? styles.lightThemeTitleWrapper : styles.darkThemeTitleWrapper}>
        {t('cart.titleFilled')}{' '}
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
              <TableCell>{t('cart.product')}</TableCell>
              <TableCell>{t('cart.size')}</TableCell>
              <TableCell>{t('cart.price')}</TableCell>
              <TableCell>{t('cart.quantity')}</TableCell>
              <TableCell>{t('cart.toPay')}</TableCell>
              <TableCell>{t('cart.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartItems}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
