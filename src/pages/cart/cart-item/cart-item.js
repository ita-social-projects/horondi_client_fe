import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

import Modal from '../../../components/modal';
import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import { MODAL_DELETE_MESSAGES } from '../../../translations/modal.translations';
import NumberInput from '../../../components/number-input';
import {
  removeItemFromCart,
  setCartItemQuantity
} from '../../../redux/cart/cart.actions';

const CartItem = ({ item }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const onChangeQuantity = (value, key) => {
    dispatch(setCartItemQuantity(item, +value, key));
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
        <td>
          <div className={styles.image}>
            <Link to={item.productUrl}>
              <img src={item.images} alt='product pictures' />
            </Link>
          </div>
          <div className={styles.description}>
            <Link to={item.productUrl}>
              <span className={styles.itemName}>
                {item.name[language].value}
              </span>
            </Link>
            <span>
              {CART_TABLE_FIELDS[language].size}: {item.selectedSize}
            </span>
            <span>
              {CART_TABLE_FIELDS[language].bagBottom}: {item.bagBottom}
            </span>
            {item.sidePocket.isSelected && (
              <span>
                {CART_TABLE_FIELDS[language].sidePocket}:{' '}
                <DoneIcon className={styles.doneIcon} />
              </span>
            )}
          </div>
        </td>
        <td>
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
