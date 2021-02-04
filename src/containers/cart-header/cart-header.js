import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStyles } from './cart-header.styles';
import { getCart } from '../../redux/cart/cart.actions';
import { getProduct } from '../../redux/products/products.actions';

const CartHeader = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles({ fromSideBar });

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const itemsCount = useMemo(
    () =>
      cartItems.length &&
      cartItems.reduce((curr, prev) => curr.quantity + prev.quantity),
    [cartItems]
  );

  return (
    <Link to='/checkout'>
      <IconButton className={styles.root} aria-label='cart' tabIndex={-1}>
        <Badge badgeContent={itemsCount} color='secondary'>
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartHeader;
