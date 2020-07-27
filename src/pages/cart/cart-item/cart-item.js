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
import {
  setCartItems,
  removeItemFromCart
} from '../../../redux/cart/cart.actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  console.log(item);

  const onChangeQuantity = (itemId, key) => {
    const localStorageCartItems = getFromLocalStorage('cart').map((item) => {
      if (item._id === itemId) {
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

      dispatch(removeItemFromCart(item.id));
      setToLocalStorage('cart', localStorageCartItems);
    }
  };

  return (
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
        <NumberInput item={item} onChangeQuantity={onChangeQuantity} />
      </td>
      <td className={styles.price}>
        <span>{item.totalPrice} UAH</span>
        <DeleteIcon className={styles.trash} onClick={onRemoveItem} />
      </td>
    </tr>
  );
};

export default CartItem;
