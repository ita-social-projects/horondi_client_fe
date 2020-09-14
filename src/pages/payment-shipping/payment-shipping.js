import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './payment-shipping.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';

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

  const paymentsAndShippingText =
    paymentAndShippingPage.text &&
    parse(paymentAndShippingPage.text[language].value);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {paymentAndShippingPage.title && (
        <h1>{paymentAndShippingPage.title[language].value}</h1>
      )}
      {paymentsAndShippingText}
    </div>
  );
};

export default PaymentsAndShipping;
