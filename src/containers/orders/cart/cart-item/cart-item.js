import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DoneIcon from '@material-ui/icons/Done';
import { Checkbox, TableCell, TableRow } from '@material-ui/core';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import NumberInput from '../../../../components/number-input';
import { setCartItemChecked, setCartItemQuantity } from '../../../../redux/cart/cart.actions';
import { IMG_URL } from '../../../../configs';

const CartItem = ({ item, language, currency, calcPrice, isCartEditing }) => {
  const dispatch = useDispatch();
  const styles = useStyles({ image: `${IMG_URL}${item.image}` });
  const [checkedItem, setCheckedItem] = useState(false);

  const onChangeQuantity = (value) => {
    dispatch(setCartItemQuantity(item, +value));
  };
  const onCartItemCheck = () => {
    setCheckedItem(!checkedItem);
    dispatch(setCartItemChecked(item, checkedItem));
  };

  useEffect(() => {
    dispatch(setCartItemChecked(item, true));
  }, []);

  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell classes={{ root: styles.image }} data-cy='cart-item-img'>
        <Link to={`/product/${item._id}`}>
          <b />
        </Link>
      </TableCell>
      <TableCell classes={{ root: styles.description }} data-cy='cart-item-description'>
        <Link to={`/product/${item._id}`}>
          <span className={styles.itemName}>{item.name[language].value}</span>
        </Link>
        {item.selectedSize && (
          <div>
            {CART_TABLE_FIELDS[language].size}: {item.selectedSize.name}
          </div>
        )}
        {item.bottomMaterial && (
          <div>
            {CART_TABLE_FIELDS[language].bottomMaterial}:
            <br />
            {item.bottomMaterial.material.name[language].value}
          </div>
        )}
        {item.sidePocket && (
          <div>
            {CART_TABLE_FIELDS[language].sidePocket}: <DoneIcon className={styles.doneIcon} />
          </div>
        )}
      </TableCell>
      <TableCell>
        <NumberInput quantity={item.quantity} onChangeQuantity={onChangeQuantity} />
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        <span>
          {calcPrice(item, currency, item.quantity) / 100} {item.totalPrice[currency].currency}
        </span>
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
