import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStyles } from './cart-header.styles';
import { getCart } from '../../redux/cart/cart.actions';

const CartHeader = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles({ fromSideBar });

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Link to='/checkout'>
      <IconButton className={styles.root} aria-label='cart' tabIndex={-1}>
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
