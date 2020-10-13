import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStyles } from './cart-header.styles';
import { getCart } from '../../redux/cart/cart.actions';

const CartHeader = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Link to='/cart'>
      <IconButton className={styles.root} aria-label='cart'>
        <Badge
          badgeContent={
            cartItems
              ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
              : 0
          }
          color='secondary'
        >
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartHeader;
