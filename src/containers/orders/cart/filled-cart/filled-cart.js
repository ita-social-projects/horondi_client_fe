import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import { clearCart as clearNewCart } from '../../../../redux/newCart/cart.actions';
import { resetCart } from '../../../../redux/cart/cart.actions';
import { useCart } from '../../../../hooks/use-cart';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pathToCategory, pathToCheckout } = routes;

  const { currency, cartLoading, user } = useSelector(({ Currency, Cart, User, NewCart }) => ({
    currency: Currency.currency,
    cartList: Cart.list,
    cartLoading: Cart.loading,
    newCartList: NewCart.list,
    cartQuantityLoading: Cart.quantityLoading,
    user: User.userData
  }));

  const { getTotalPrice, cart } = useCart(user);
  const totalPrice = useMemo(() => getTotalPrice(currency), [cart]);
  const currencySign = getCurrencySign(currency);

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <>
      <PathBack />
      <div className={styles.root} data-cy='filled-cart'>
        <div className={styles.orderWrapper}>
          <div className={styles.orderTable}>
            <OrderTable items={items} user={user} />
          </div>
        </div>
        <div>
          <div className={styles.promoAndTotalWrapper}>
            <div className={styles.promoWrapper}>
              <TextField
                InputProps={{
                  className: styles.promoInput
                }}
                placeholder={t('cart.promoPlaceHolder')}
              />
              <Button variant='contained' className={styles.promoButton}>
                {t('cart.applyPromoCode')}
              </Button>
              <Link to={pathToCategory}>
                <Button variant='contained' className={styles.shoppingButton}>
                  {t('cart.continue')}
                </Button>
              </Link>
            </div>
            <div className={styles.totalWrapper}>
              <div className={styles.totalPrice}>
                <span>{t('cart.totalPrice')}</span>
              </div>
              <div className={styles.totalPrice}>
                <FontAwesomeIcon icon={currencySign} /> {totalPrice}
              </div>
              <Button
                variant='contained'
                onClick={() => {
                  dispatch(clearNewCart());
                  dispatch(resetCart());
                }}
              >
                Clear cart
              </Button>
              <Link to={pathToCheckout}>
                <Button variant='contained' className={styles.ordersButton}>
                  {t('cart.checkout')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* <SimilarProducts cartList={cartList} /> */}
      </div>
    </>
  );
};

export default FilledCart;
