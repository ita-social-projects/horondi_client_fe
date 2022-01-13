import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { TEXT_FIELD_VARIANT } from '../../../../configs';

const FilledCart = ({ items, cartOperations }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { pathToCategory, pathToCheckout } = routes;
  const [price, setPrice] = useState();

  const { currency, cartLoading, user } = useSelector(({ Currency, User }) => ({
    currency: Currency.currency,
    user: User.userData
  }));

  const currencySign = getCurrencySign(currency);
  const { getTotalPrice } = cartOperations;

  useEffect(() => {
    setPrice(getTotalPrice(currency));
  }, [items, currency, getTotalPrice]);

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
              <div>
                <TextField
                  InputProps={{
                    className: styles.promoInput
                  }}
                  placeholder={t('cart.promoPlaceHolder')}
                  variant={TEXT_FIELD_VARIANT.OUTLINED}
                />
                <Button variant='contained' className={styles.promoButton}>
                  {t('cart.applyPromoCode')}
                </Button>
              </div>
              <Link to={pathToCategory}>
                <Button className={styles.shoppingButton}>{t('cart.continue')}</Button>
              </Link>
            </div>
            <div className={styles.totalWrapper}>
              <div className={styles.totalPrice}>
                <span>{t('cart.totalPrice')}</span>
                <div>
                  {currencySign}
                  {price}
                </div>
              </div>
              <Link to={pathToCheckout}>
                <Button variant='contained' className={styles.ordersButton}>
                  {t('cart.checkout')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <SimilarProducts cartList={items} />
      </div>
    </>
  );
};

export default FilledCart;
