import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from './CartIcon';

import { useStyles } from './cart-header.styles';
import { getCart } from '../../redux/cart/cart.actions';
import routes from '../../configs/routes';
import { cartKey } from '../../configs';

const { pathToCart } = routes;

const CartHeader = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const { cartItems, user } = useSelector(({ Cart, User }) => ({
    cartItems: Cart.list,
    user: User.userData,
    cartLoading: Cart.loading
  }));

  const styles = useStyles({ fromSideBar });

  useEffect(() => {
    if (!user) {
      dispatch(getCart());
    }
  }, [dispatch, user]);

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
