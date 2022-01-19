import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from './CartIcon';

import { useStyles } from './cart-header.styles';
import routes from '../../configs/routes';
import { cartKey } from '../../configs';

const { pathToCart } = routes;

const CartHeader = ({ fromSideBar }) => {
  const { cartItems } = useSelector(({ CommonStore }) => ({
    cartItems: CommonStore.cart
  }));
  const styles = useStyles({ fromSideBar });
  const itemsCount = useMemo(
    () => cartItems.length && cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  return (
    <>
      <span className={styles.cartIconWrapper}>
        <Link to={pathToCart}>
          <IconButton className={styles.root} aria-label={cartKey} tabIndex={-1} disableRipple>
            <Badge badgeContent={itemsCount} color='secondary'>
              <CartIcon />
            </Badge>
          </IconButton>
        </Link>
      </span>
    </>
  );
};

export default CartHeader;
