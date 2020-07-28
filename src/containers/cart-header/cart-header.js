import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { withStyles } from '@material-ui/core/styles';
import { useStyles } from './cart-header.styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

const CartHeader = () => {
  const styles = useStyles();

  return (
    <Link to='/cart'>
      <IconButton className={styles.root} aria-label='cart'>
        <StyledBadge badgeContent={1} color='secondary'>
          <ShoppingBasketIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default CartHeader;
