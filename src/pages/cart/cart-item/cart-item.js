import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import NumberInput from '../../../components/number-input';
import { setToLocalStorage } from '../../../services/local-storage.service';
import {
  setCartItems,
  removeItemFromCart
} from '../../../redux/cart/cart.actions';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { language, cartItems } = useSelector(({ Language, Cart }) => ({
    language: Language.language,
    cartItems: Cart.list
  }));
  const styles = useStyles();

  const onChangeQuantity = (itemId, itemSize, key) => {
    const newCart = cartItems.map((item) => {
      if (item._id === itemId && item.selectedSize === itemSize) {
        item.quantity = key ? ++item.quantity : --item.quantity || 1;
      }
      return item;
    });

    dispatch(setCartItems(newCart));
    setToLocalStorage('cart', newCart);
  };

  const onRemoveItem = () => {
    if (window.confirm('Delete?')) {
      const newCart = cartItems.filter(
        (item) =>
          item._id !== product._id && item.selectedSize !== product.selectedSize
      );

      dispatch(setCartItems(newCart));
      setToLocalStorage('cart', newCart);
    }
  };

  return (
    <tr className={styles.root}>
      <td className={styles.product}>
        <div className={styles.image}>
          <img src={product.image} alt='product pictures' />
        </div>
        <div className={styles.description}>
          <span className={styles.itemName}>
            {product.name[language].value}
          </span>
          <span className={styles.size}>
            {CART_TABLE_FIELDS[language].size}: {product.selectedSize}
          </span>
        </div>
      </td>
      <td className={styles.quantity}>
        <NumberInput item={product} onChangeQuantity={onChangeQuantity} />
      </td>
      <td className={styles.price}>
        <span>{product.totalPrice} UAH</span>
        <DeleteIcon className={styles.trash} onClick={onRemoveItem} />
      </td>
    </tr>
  );
};

export default CartItem;
