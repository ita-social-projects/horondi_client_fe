import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import Modal from '../../../components/modal';
import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import { MODAL_DELETE_MESSAGES } from '../../../translations/modal.translations';
import NumberInput from '../../../components/number-input';
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItemFromCart
} from '../../../redux/cart/cart.actions';

const CartItem = ({ item }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const onChangeQuantity = (key) => {
    key
      ? dispatch(incrementCartItemQuantity(item))
      : dispatch(decrementCartItemQuantity(item));
  };

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(item));
    setModalVisibility(false);
  };

  const onRemoveItem = () => {
    setModalVisibility(true);
  };

  return (
    <>
      <tr className={styles.root}>
        <td className={styles.product}>
          <div className={styles.image}>
            <img src={item.image} alt='product pictures' />
          </div>
          <div className={styles.description}>
            <span className={styles.itemName}>{item.name[language].value}</span>
            <span className={styles.size}>
              {CART_TABLE_FIELDS[language].size}: {item.selectedSize}
            </span>
          </div>
        </td>
        <td className={styles.quantity}>
          <NumberInput
            quantity={item.quantity}
            onChangeQuantity={onChangeQuantity}
          />
        </td>
        <td className={styles.price}>
          <span>{item.totalPrice} UAH</span>
          <DeleteIcon className={styles.trash} onClick={onRemoveItem} />
        </td>
      </tr>
      {modalVisibility && (
        <tr>
          <Modal
            itemName={item.name[language].value}
            message={MODAL_DELETE_MESSAGES[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
          />
        </tr>
      )}
    </>
  );
};

export default CartItem;
