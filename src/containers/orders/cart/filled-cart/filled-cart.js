import React, { useContext, useEffect, useRef, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';

import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../configs/routes';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { TEXT_FIELD_VARIANT } from '../../../../configs';
import { getPromoCodeByCode } from '../../operations/getPromoCodeByCode.queries';
import { addProductFromConstructor } from '../../../../pages/cart/operations/cart.mutations';
import { CurrencyContext } from '../../../../context/currency-context';

const FilledCart = ({ items, cartOperations }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const [addConstructorProduct] = useMutation(addProductFromConstructor);

  const promoCodeInput = useRef(null);
  const { pathToCategory, pathToCheckout } = routes;
  const [price, setPrice] = useState();
  const [promoCodeValue, setPromoCodeValue] = useState('');
  const [productFromConstructorLoading, setProductFromConstructorLoading] = useState(false);

  const { currency } = useContext(CurrencyContext);

  const { cartLoading, user } = useSelector(({ User }) => ({
    user: User.userData
  }));

  const [getPromoCode, { data: promoCode, error }] = useLazyQuery(getPromoCodeByCode, {
    variables: {
      code: promoCodeValue
    }
  });

  const currencySign = getCurrencySign[currency.name];
  const { getTotalPrice, setCartItem, getTotalPricesWithPromoCode } = cartOperations;

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

  if (cartLoading || productFromConstructorLoading) {
    return <Loader />;
  }

  const onGoToCheckout = async () => {
    const itemsFromConstructor = items.filter((item) => item.isFromConstructor);

    for (const item of itemsFromConstructor) {
      const input = {
        product: {
          name: item.name,
          model: item.model?._id,
          pattern: item.pattern?._id,
          mainMaterial: {
            material: item.basic?.features.material._id,
            color: item.basic?.features.color._id
          },
          bottomMaterial: {
            material: item.bottom?.features.material._id,
            color: item.bottom?.features.color._id
          },
          sizes: [item.sizeAndPrice.size._id],
          basePrice: item.sizeAndPrice.price.find((p) => p.currency === 'USD').value
        },
        upload: []
      };

      setProductFromConstructorLoading(true);

      const { data } = await addConstructorProduct({
        variables: {
          product: input.product,
          upload: input.upload
        }
      });

      setCartItem(item.id, {
        ...item,
        productId: data.addProductFromConstructor._id
      });
    }

    history.push(pathToCheckout, { promoCode });
  };

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
              <Button variant='contained' className={styles.ordersButton} onClick={onGoToCheckout}>
                {t('cart.checkout')}
              </Button>
            </div>
          </div>
        </div>
        <SimilarProducts cartList={items} />
      </div>
    </>
  );
};

export default FilledCart;
