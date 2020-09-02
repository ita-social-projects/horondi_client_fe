import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './payment-shipping.style';
import { getBusinessPageByCode } from '../../redux/businessPages/businessPages.actions';

const PaymentsAndShipping = () => {
  const dispatch = useDispatch();
  const { paymentAndShippingPage, language } = useSelector(
    ({ BusinessPages, Language }) => ({
      paymentAndShippingPage: BusinessPages.pages.paymentAndShipping,
      language: Language.language
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('payment-and-shipping'));
  }, [dispatch]);

  const PaymentsAndShippingText = Object.keys(paymentAndShippingPage).length
    ? parse(paymentAndShippingPage.text[language].value)
    : 'No text provided';
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {paymentAndShippingPage.title && (
        <h1>{paymentAndShippingPage.title[language].value}</h1>
      )}
      {PaymentsAndShippingText}
    </div>
  );
};

export default PaymentsAndShipping;
