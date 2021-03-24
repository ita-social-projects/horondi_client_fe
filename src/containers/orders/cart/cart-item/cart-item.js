import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DoneIcon from '@material-ui/icons/Done';
import { Checkbox, TableCell, TableRow } from '@material-ui/core';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import NumberInput from '../../../../components/number-input';
import {
  setCartItemChecked,
  setCartItemQuantity,
  changeCartItemUserQuantity
} from '../../../../redux/cart/cart.actions';
import { IMG_URL } from '../../../../configs';

const CartItem = ({ item, language, currency, calcPrice, isCartEditing, user }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const checkedItem = item.isChecked;

  const onChangeQuantity = (value) => {
    if (user) {
      dispatch(changeCartItemUserQuantity({ item, value, userId: user._id }));
    } else {
      dispatch(setCartItemQuantity(item, +value));
    }
  };
  const onCartItemCheck = () => {
    dispatch(setCartItemChecked(item, checkedItem));
  };

  useEffect(() => {
    dispatch(setCartItemChecked(item, true));
  }, []);

  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell data-cy='cart-item-img'>
        <Link to={`/product/${item.product._id}`}>
          <img src={`${IMG_URL}${item.product.images.primary.thumbnail} `} alt='product-img' />
        </Link>
      </TableCell>
      <TableCell classes={{ root: styles.description }} data-cy='cart-item-description'>
        <Link to={`/product/${item.product._id}`}>
          <span className={styles.itemName}>{item.product.name[language].value}</span>
        </Link>
        {item.options.size && (
          <div>
            {CART_TABLE_FIELDS[language].size}: {item.options.size.name}
          </div>
        )}
        {item.product.bottomMaterial && (
          <div>
            {CART_TABLE_FIELDS[language].bottomMaterial}:
            <br />
            {item.product.bottomMaterial.material.name[language].value}
          </div>
        )}
      </TableCell>
      <TableCell>
        <NumberInput quantity={item.quantity} onChangeQuantity={onChangeQuantity} />
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        {user && (
          <span>
            {item.price[currency].value / 100} {item.price[currency].currency}
          </span>
        )}
        {!user && (
          <span>
            {calcPrice(item, currency) / 100} {item.price[currency].currency}
          </span>
        )}
        {isCartEditing && (
          <Checkbox
            className={styles.checkbox}
            color='default'
            checked={checkedItem}
            onChange={onCartItemCheck}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
