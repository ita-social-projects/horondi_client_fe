import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../translations/cart.translations';
import NumberInput from '../../../components/number-input';
import { setCartItemQuantity } from '../../../redux/cart/cart.actions';

const CartItem = ({ item, setModalVisibility, setModalItem, language }) => {
  const dispatch = useDispatch();
  const styles = useStyles({ image: item.images });

  const onChangeQuantity = (value, key) => {
    dispatch(setCartItemQuantity(item, +value, key));
  };

  const onRemoveItem = () => {
    setModalVisibility(true);
    setModalItem(item);
  };

  return (
    <div className={styles.root} data-cy='cart-item'>
      <div className={styles.itemData}>
        <div className={styles.image} data-cy='cart-item-img'>
          <Link to={item.productUrl}>
            <b />
          </Link>
        </div>
        <div className={styles.description}>
          <Link to={item.productUrl} data-cy='cart-item-description'>
            <span className={styles.itemName}>{item.name[language].value}</span>
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
      </div>
      <div>
        <NumberInput
          quantity={item.quantity}
          onChangeQuantity={onChangeQuantity}
        />
      </div>
      <div className={styles.price}>
        <span>{item.totalPrice} UAH</span>
        <DeleteIcon
          className={styles.trash}
          onClick={onRemoveItem}
          data-cy='cart-item-remove'
        />
      </div>
    </div>
  );
};

export default CartItem;
