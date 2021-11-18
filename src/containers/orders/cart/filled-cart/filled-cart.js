import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { pathToCategory, pathToCheckout } = routes;

  const { language, currency, cartList, cartLoading, cartQuantityLoading, user } = useSelector(
    ({ Language, Currency, Cart, User }) => ({
      language: Language.language,
      currency: Currency.currency,
      cartList: Cart.list,
      cartLoading: Cart.loading,
      cartQuantityLoading: Cart.quantityLoading,
      cartUserTotalPrice: Cart.totalPrice,
      user: User.userData
    })
  );

  const currencySign = getCurrencySign(currency);
  const totalPrice = items.reduce((acc, item) => acc + calcPriceForCart(item, currency), 0);

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <>
      <PathBack />
      <div className={styles.root} data-cy='filled-cart'>
        <div className={styles.orderWrapper}>
          <div className={styles.orderTable}>
            <OrderTable
              calcPrice={calcPriceForCart}
              currency={currency}
              items={items}
              language={language}
              user={user}
              cartLoading={cartLoading}
              cartQuantityLoading={cartQuantityLoading}
            />
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
