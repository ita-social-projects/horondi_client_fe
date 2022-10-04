import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
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
import routes from '../../../../configs/routes';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { TEXT_FIELD_VARIANT } from '../../../../configs';
import { getPromoCodeByCode } from '../../operations/getPromoCodeByCode.queries';
import { getCertificateByParams } from '../../operations/getCertificateByParams.queries';
import { addProductFromConstructor } from '../../../../pages/cart/operations/cart.mutations';
import { CurrencyContext } from '../../../../context/currency-context';
import { useCurrency } from '../../../../hooks/use-currency';

const FilledCart = ({ items, cartOperations }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const { getCurrencySign } = useCurrency();

  const [addConstructorProduct] = useMutation(addProductFromConstructor);

  const certificateAndPromoInput = useRef(null);
  const { pathToCategory, pathToCheckout } = routes;
  const [price, setPrice] = useState();
  const [inputValue, setInputValue] = useState('');
  const [productFromConstructorLoading, setProductFromConstructorLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const { currency } = useContext(CurrencyContext);

  const { cartLoading, user } = useSelector(({ User }) => ({
    user: User.userData
  }));

  const [getPromoCode, { data: promoCode, error: promoCodeError }] = useLazyQuery(
    getPromoCodeByCode,
    {
      variables: {
        code: inputValue
      }
    }
  );
  const [getCertificate, { data: certificateData, error: certificateError }] = useLazyQuery(
    getCertificateByParams,
    {
      variables: {
        params: {
          name: inputValue
        }
      }
    }
  );

  const errorHandler = () => {
    if (certificateData || promoCode) return null;
    if (promoCodeError) return t('cart.promoCodeNotFound');
    if (certificateError) return t('cart.certificateNotFound');
  };

  const currencySign = getCurrencySign();
  const { getTotalPrice, setCartItem, getTotalPricesWithPromoCode, getTotalPriceWithCertificate } =
    cartOperations;

  const checkPromoOrCertificate = () => {
    const searchValue = new RegExp(/^HOR/, 'i');
    if (searchValue.test(certificateAndPromoInput.current.value)) {
      setInputValue(certificateAndPromoInput.current.value);
      getCertificate();
      certificateAndPromoInput.current.value = '';
      return;
    }
    setInputValue(certificateAndPromoInput.current.value);
    getPromoCode();
    certificateAndPromoInput.current.value = '';
  };

  useLayoutEffect(() => {
    if (certificateData) {
      setDisable(true);
      return setPrice(getTotalPriceWithCertificate(certificateData));
    }
    if (promoCode) {
      setDisable(true);
      return setPrice(getTotalPricesWithPromoCode(promoCode));
    }
    setPrice(getTotalPrice());
  }, [
    items,
    currency,
    getTotalPrice,
    promoCode,
    certificateData,
    getTotalPricesWithPromoCode,
    getTotalPriceWithCertificate
  ]);

  if (cartLoading || productFromConstructorLoading) {
    return <Loader />;
  }

  const totalSavePrice = () => {
    if (promoCode || certificateData) {
      return (
        <div className={styles.totalPrice}>
          <span>{t('cart.saving')}</span>
          <div>
            {currencySign}
            {promoCode && getTotalPrice() - getTotalPricesWithPromoCode(promoCode)}
            {certificateData && getTotalPrice() - price}
          </div>
        </div>
      );
    }
  };

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
          basePrice: item.sizeAndPrice.price
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
    history.push(pathToCheckout, { promoCode, certificateData });
  };

  return (
    <>
      <PathBack
        categoryLink={pathToCategory}
        categoryText='cart.pathBack.toCatalog'
        currentPageText='cart.pathBack.yourCart'
      />
      <div className={styles.root} data-cy='filled-cart'>
        <div className={styles.orderWrapper}>
          <div className={styles.orderTable}>
            <OrderTable
              items={items}
              user={user}
              cartOperations={cartOperations}
              promoCode={promoCode}
              certificateData={certificateData}
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
                  inputRef={certificateAndPromoInput}
                  disabled={disable}
                  error={promoCodeError || certificateError}
                  helperText={errorHandler()}
                />
                <Button
                  data-testid='promoButton'
                  variant='contained'
                  className={`${styles.promoButton} ${styles.promoInput}`}
                  onClick={checkPromoOrCertificate}
                  disabled={disable}
                >
                  {t('cart.applyPromoCode')}
                </Button>
              </div>
              <Link to={pathToCategory}>
                <Button className={styles.shoppingButton}>{t('cart.continue')}</Button>
              </Link>
            </div>
            <div className={styles.totalWrapper}>
              {totalSavePrice()}
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
