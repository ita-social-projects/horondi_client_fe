import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { MATERIAL_UI_COLOR } from '../../const/material-ui';

import { useStyles } from './cart-header.styles';
import { getCart } from '../../redux/cart/cart.actions';
import { cartKey } from '../../configs';
import { PATHS } from '../../const/paths';

const CartHeader = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const { cartItems, user, cartLoading } = useSelector(({ Cart, User }) => ({
    cartItems: Cart.list,
    user: User.userData,
    cartLoading: Cart.loading
  }));

  const styles = useStyles({ fromSideBar });

  useEffect(() => {
    if (!user) {
      dispatch(getCart());
    }
  }, [dispatch]);

  const itemsCount = useMemo(
    () => cartItems.length && cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  return (
    <>
      {!cartLoading && (
        <span className={styles.cartIconWrapper}>
          <Link to={PATHS.pathToCart}>
            <IconButton className={styles.root} aria-label={cartKey} tabIndex={-1}>
              <Badge badgeContent={itemsCount} color='secondary'>
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Link>
        </span>
      )}
      {cartLoading && (
        <span className={styles.cartIconWrapper}>
          <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
        </span>
      )}
    </>
  );
};

export default CartHeader;
