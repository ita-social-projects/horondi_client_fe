import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import SimilarProducts from '../../../../pages/product-details/similar-products';

const FilledCart = ({ items, cartOperations }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { pathToCategory, pathToCheckout } = routes;
  const [price, setPrice] = useState();

  const { currency, cartLoading, user, cartList } = useSelector(
    ({ Currency, Cart, User, NewCart }) => ({
      currency: Currency.currency,
      cartList: Cart.list,
      cartLoading: Cart.loading,
      newCartList: NewCart.list,
      cartQuantityLoading: Cart.quantityLoading,
      user: User.userData
    })
  );

  const currencySign = getCurrencySign(currency);
  const { getTotalPrice } = cartOperations;

  useEffect(() => {
    setPrice(getTotalPrice(currency));
  }, [items, currency]);

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <>
      <PathBack />
      <div className={styles.root} data-cy='filled-cart'>
        <div className={styles.orderWrapper}>
          <div className={styles.orderTable}>
            <OrderTable items={items} user={user} cartOperations={cartOperations} />
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
                <FontAwesomeIcon icon={currencySign} /> {price}
              </div>
              <Link to={pathToCheckout}>
                <Button variant='contained' className={styles.ordersButton}>
                  {t('cart.checkout')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <SimilarProducts cartList={cartList} />
      </div>
    </>
  );
};

export default FilledCart;
