import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { withStyles } from '@material-ui/core/styles';
import { useStyles } from './cart-header.styles';
import { setCartItems } from '../../redux/cart/cart.actions';
import { getFromLocalStorage } from '../../services/local-storage.service';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

const CartHeader = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles();

  useEffect(() => {
    const cartItems = getFromLocalStorage('cart');
    dispatch(setCartItems(cartItems || []));
  }, []);

  const cartItemsCounter = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to='/cart'>
      <IconButton className={styles.root} aria-label='cart'>
        <StyledBadge badgeContent={cartItemsCounter()} color='secondary'>
          <ShoppingBasketIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default CartHeader;
