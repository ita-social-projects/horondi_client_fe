import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStyles } from './cart-header.styles';

const CartHeader = ({ fromSideBar }) => {
  const cartItems = useSelector(({ Cart }) => Cart.list);
  const styles = useStyles({ fromSideBar });

  const itemsCount = useMemo(
    () => cartItems.length && cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  return (
    <Link to='/cart'>
      <IconButton className={styles.root} aria-label='cart' tabIndex={-1}>
        <Badge badgeContent={itemsCount} color='secondary'>
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartHeader;
