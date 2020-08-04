import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStyles } from './cart-header.styles';

const CartHeader = () => {
  const styles = useStyles();

  return (
    <Link to='/cart'>
      <IconButton className={styles.root} aria-label='cart'>
        <Badge badgeContent={1} color='secondary'>
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartHeader;
