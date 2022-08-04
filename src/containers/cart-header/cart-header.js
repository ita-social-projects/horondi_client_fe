import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from './CartIcon';
import { useStyles } from './cart-header.styles';
import { setCart } from '../../redux/common-store/common.actions';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { CART_KEY } from '../../configs';
import routes from '../../configs/routes';

const { pathToCart } = routes;

const CartHeader = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const dispatch = useDispatch();
  const cartItems = useSelector(({ CommonStore }) => CommonStore.cart);
  const itemsCount = useMemo(
    () => cartItems.length && cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );
  useEffect(() => {
    dispatch(setCart(getFromLocalStorage(CART_KEY)));
  }, []);

  return (
    <>
      <span className={styles.cartIconWrapper}>
        <Link to={pathToCart}>
          <IconButton className={styles.root} aria-label={CART_KEY} tabIndex={-1} disableRipple>
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
