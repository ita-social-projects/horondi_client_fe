import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from './CartIcon';
import { useCart } from '../../hooks/use-cart';
import { useStyles } from './cart-header.styles';
import { CART_KEY } from '../../configs';
import routes from '../../configs/routes';

const { pathToCart } = routes;

const CartHeader = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const { cart } = useCart();
  const itemsCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

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
