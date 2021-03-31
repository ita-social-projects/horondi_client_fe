import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Divider, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import NumberInput from '../../../../components/number-input';
import {
  setCartItemQuantity,
  changeCartItemUserQuantity,
  deleteProductFromUserCart,
  removeItemFromCart
} from '../../../../redux/cart/cart.actions';
import { IMG_URL } from '../../../../configs';
import { MATERIAL_UI_COLOR } from '../../../../const/material-ui';

const CartItem = ({ item, language, currency, calcPrice, user, cartQuantityLoading }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const onChangeQuantity = (value) => {
    if (user) {
      dispatch(changeCartItemUserQuantity({ item, value, userId: user._id }));
    } else {
      dispatch(setCartItemQuantity(item, +value));
    }
  };

  const onDeleteItem = () => {
    if (user) {
      dispatch(deleteProductFromUserCart({ userId: user._id, items: [item] }));
    } else {
      dispatch(removeItemFromCart([item]));
    }
  };

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
        {!cartQuantityLoading ? (
          <NumberInput quantity={item.quantity} onChangeQuantity={onChangeQuantity} />
        ) : (
          <CircularProgress
            className={styles.loadingBar}
            color={MATERIAL_UI_COLOR.INHERIT}
            size={30}
          />
        )}
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        {user && (
          <span>
            {Math.round(item.price[currency].value / 100)} {item.price[currency].currency}
          </span>
        )}
        {!user && (
          <span>
            {Math.round(calcPrice(item, currency) / 100)} {item.price[currency].currency}
          </span>
        )}
        <span className={styles.deleteIcon}>
          <DeleteIcon onClick={onDeleteItem} fontSize='50' />
        </span>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
