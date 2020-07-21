import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import NumberInput from '../../../components/number-input';
import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../../services/local-storage.service';
import { setCartItems } from '../../../redux/cart/cart.actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const onChangeQuantity = (itemId, key) => {
    const localStorageCartItems = getFromLocalStorage('cart').map((item) => {
      if (item.id === itemId) {
        item.quantity = key ? ++item.quantity : --item.quantity || 1;
      }
      return item;
    });

    setToLocalStorage('cart', localStorageCartItems);
    dispatch(setCartItems(localStorageCartItems));
  };

  const onRemoveItem = () => {
    if (window.confirm('Delete?')) {
      const localStorageCartItems = getFromLocalStorage('cart').filter(
        (val) => val.id !== item.id
      );

      setToLocalStorage('cart', localStorageCartItems);
      dispatch(setCartItems(localStorageCartItems));
    }
  };

  return (
    <tr className={styles.root}>
      <td className={styles.product}>
        <div className={styles.image}>
          <img src={item.image} alt='product pictures' />
        </div>
        <div className={styles.description}>
          <span className={styles.itemName}>{item.name}</span>
          <span className={styles.size}>
            {CART_TABLE_FIELDS[language].size}: {item.size}
          </span>
        </div>
      </td>
      <td className={styles.quantity}>
        <NumberInput item={item} onChangeQuantity={onChangeQuantity} />
      </td>
      <td className={styles.price}>
        <span>{item.price}</span>
        <DeleteIcon className={styles.trash} onClick={onRemoveItem} />
      </td>
    </tr>
  );
};

export default CartItem;
