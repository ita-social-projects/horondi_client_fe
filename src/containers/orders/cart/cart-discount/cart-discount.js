import React, { useCallback, useContext, useRef, useState } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { useStyles } from '../filled-cart/filled-cart.styles';

import { useCurrency } from '../../../../hooks/use-currency';
import { TEXT_FIELD_VARIANT } from '../../../../configs';
import { getPromoCodeByCode } from '../../operations/getPromoCodeByCode.queries';
import { getCertificateByParams } from '../../operations/getCertificateByParams.queries';
import { CurrencyContext } from '../../../../context/currency-context';

const CartDiscount = ({ discount, cartOperations, setDiscount }) => {
  const certificateAndPromoInput = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const { currency } = useContext(CurrencyContext);

  const { currencySign, getCertificatePriceInUSD } = useCurrency();
  const { t } = useTranslation();
  const styles = useStyles();
  const { addPromocode, addCertificate } = cartOperations;

  const hasDiscount = Boolean(Object.keys(discount).length);

  const [getPromoCode, { error: promoCodeError }] = useLazyQuery(getPromoCodeByCode, {
    fetchPolicy: 'network-only',
    variables: {
      code: inputValue
    },
    onCompleted: (promoCodeData) => {
      addPromocode(promoCodeData);
    }
  });

  const [getCertificate, { error: certificateError }] = useLazyQuery(getCertificateByParams, {
    fetchPolicy: 'network-only',
    variables: {
      params: {
        name: inputValue
      }
    },
    onCompleted: (certificateData) => {
      addCertificate(certificateData);
    }
  });

  const resetDiscount = useCallback(() => {
    setDiscount({});
    addCertificate(null);
    addPromocode(null);
  }, [addCertificate, addPromocode, setDiscount]);

  const checkPromoOrCertificate = () => {
    const searchValue = new RegExp(/^HOR/, 'i');
    setInputValue(certificateAndPromoInput.current.value);

    if (searchValue.test(certificateAndPromoInput.current.value)) {
      getCertificate();
    } else {
      getPromoCode();
    }
    certificateAndPromoInput.current.value = '';
  };

  const errorHandler = () => {
    if (promoCodeError) return t('cart.promoCodeNotFound');
    if (certificateError) return t('cart.certificateNotFound');
  };

  const discountFormat =
    discount.type === 'certificate' ? (
      <span>
        {currencySign}
        {currency === 'UAH' ? discount.value : getCertificatePriceInUSD(discount.value)}
      </span>
    ) : (
      <span>{discount.value}%</span>
    );

  const discountInfo = (
    <>
      <Typography variant='h6' className={styles.discountHeading}>
        {t('cart.discountInformation')}
      </Typography>
      <Typography variant='body1' className={styles.discountInfo}>
        {t(`cart.discountType.${discount.type}`)}
        <span>{discount.name}</span>
      </Typography>
      <Typography variant='body1' className={styles.discountInfo}>
        {t('cart.discountSize')}
        <span>{discountFormat}</span>
      </Typography>
      <Typography className={styles.discountRemark}>{t('cart.discountRemark')}</Typography>
      <Button className={styles.resetDiscountButton} onClick={resetDiscount}>
        {t('cart.resetDiscount')}
      </Button>
    </>
  );

  const discountInput = (
    <>
      <TextField
        className={styles.textField}
        InputProps={{
          className: styles.promoInput
        }}
        placeholder={t('cart.promoPlaceHolder')}
        variant={TEXT_FIELD_VARIANT.OUTLINED}
        inputRef={certificateAndPromoInput}
        error={promoCodeError || certificateError}
        helperText={errorHandler() || ' '}
      />
      <Button
        data-testid='promoButton'
        variant='contained'
        className={`${styles.promoButton} ${styles.promoInput}`}
        onClick={checkPromoOrCertificate}
        disabled={hasDiscount}
      >
        {t('cart.applyPromoCode')}
      </Button>
    </>
  );

  return <div className={styles.promoWrapper}>{hasDiscount ? discountInfo : discountInput}</div>;
};

export default CartDiscount;
