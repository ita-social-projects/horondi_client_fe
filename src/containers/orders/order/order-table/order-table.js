import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './order-table.styles';
import {
  CART_TABLE_FIELDS,
  CART_TITLES,
  CART_BUTTON_TITLES
} from '../../../../translations/cart.translations';
import { TOAST_MESSAGE } from '../../../../translations/toast.translations';
import { MODAL_DELETE_MESSAGES } from '../../../../translations/modal.translations';
import { setToastMessage } from '../../../../redux/toast/toast.actions';
import { addCartItemsToWishlist } from '../../../../redux/wishlist/wishlist.actions';
import { removeItemFromCart } from '../../../../redux/cart/cart.actions';
import CartItem from '../../cart/cart-item';
import Modal from '../../../../components/modal';

const OrderTable = ({ items, currency, calcPrice }) => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState([]);
  const [isCartEditing, setCartEditing] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

  const cartItems = items.map((item) => (
    <CartItem
      key={item._id}
      item={item}
      calcPrice={calcPrice}
      language={language}
      currency={currency}
      isCartEditing={isCartEditing}
    />
  ));

  const selectedItems = items.filter((item) => item?.isChecked === true);

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(checkedItems));
    setModalVisibility(false);
  };

  const removeItemsHandler = () => {
    selectedItems.length && setModalVisibility(true);
    setCheckedItems(selectedItems);
  };

  const addCartItemsToWishlistHandler = () => {
    selectedItems.length &&
      dispatch(addCartItemsToWishlist(selectedItems)) &&
      dispatch(setToastMessage(TOAST_MESSAGE[language].addedToWishList));
  };

  return (
    <>
      {modalVisibility && (
        <>
          <Modal
            itemName={selectedItems.map((item) => item.name[language].value)}
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
        <span
          className={styles.cartButton}
          onClick={() => setCartEditing(!isCartEditing)}
        >
          {isCartEditing
            ? CART_BUTTON_TITLES[language].editCancel
            : CART_BUTTON_TITLES[language].edit}
        </span>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>{CART_TABLE_FIELDS[language].photo}</div>
          <div>{CART_TABLE_FIELDS[language].item}</div>
          <div>{CART_TABLE_FIELDS[language].quantity}</div>
          <div>{CART_TABLE_FIELDS[language].price}</div>
        </div>
        {cartItems}
      </div>
      <div className={styles.cartActionButtons}>
        {isCartEditing && (
          <>
            <div
              className={styles.cartButton}
              type='button'
              onClick={addCartItemsToWishlistHandler}
            >
              {CART_BUTTON_TITLES[language].toWishlist}
            </div>
            <div
              className={styles.cartButton}
              type='button'
              onClick={removeItemsHandler}
            >
              {CART_BUTTON_TITLES[language].remove}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderTable;
