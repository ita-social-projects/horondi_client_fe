import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { TEXT_FIELD_VARIANT } from '../../../../configs';
import { getPromoCodeByCode } from '../../operations/getPromoCodeByCode.queries';

const FilledCart = ({ items, cartOperations }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const promoCodeInput = useRef(null);
  const { pathToCategory, pathToCheckout } = routes;
  const [price, setPrice] = useState();
  const [promoCodeValue, setPromoCodeValue] = useState('');

  const { currency, cartLoading, user } = useSelector(({ Currency, User }) => ({
    currency: Currency.currency,
    user: User.userData
  }));

  const [getPromoCode, { data: promoCode, error }] = useLazyQuery(getPromoCodeByCode, {
    variables: {
      code: promoCodeValue
    }
  });

  const currencySign = getCurrencySign(currency);
  const { getTotalPrice, getTotalPricesWithPromoCode } = cartOperations;

  const checkPromoCode = () => {
    setPromoCodeValue(promoCodeInput.current.value);
    getPromoCode();
    promoCodeInput.current.value = '';
  };

  useEffect(() => {
    promoCode
      ? setPrice(getTotalPricesWithPromoCode(currency, promoCode))
      : setPrice(getTotalPrice(currency));
  }, [items, currency, getTotalPrice, promoCode, getTotalPricesWithPromoCode]);

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
              items={items}
              user={user}
              cartOperations={cartOperations}
              promoCode={promoCode}
            />
          </div>
        </div>
        <div>
          <div className={styles.promoAndTotalWrapper}>
            <div className={styles.promoWrapper}>
              <div>
                <TextField
                  className={styles.textField}
                  InputProps={{
                    className: styles.promoInput
                  }}
                  placeholder={t('cart.promoPlaceHolder')}
                  variant={TEXT_FIELD_VARIANT.OUTLINED}
                  inputRef={promoCodeInput}
                  error={!!error}
                  helperText={error && t('cart.notFound')}
                />
                <Button
                  data-testid='promoButton'
                  variant='contained'
                  className={`${styles.promoButton} ${styles.promoInput}`}
                  onClick={checkPromoCode}
                >
                  {t('cart.applyPromoCode')}
                </Button>
              </div>
              <Link to={pathToCategory}>
                <Button className={styles.shoppingButton}>{t('cart.continue')}</Button>
              </Link>
            </div>
            <div className={styles.totalWrapper}>
              {promoCode && (
                <div className={styles.totalPrice}>
                  <span>{t('cart.saving')}</span>
                  <div>
                    {currencySign}
                    {getTotalPrice(currency) - getTotalPricesWithPromoCode(currency, promoCode)}
                  </div>
                </div>
              )}
              <div className={styles.totalPrice}>
                <span>{t('cart.totalPrice')}</span>
                <div>
                  {currencySign}
                  {price}
                </div>
              </div>
              <Link
                to={{
                  pathname: pathToCheckout,
                  props: promoCode
                }}
              >
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
