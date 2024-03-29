import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useLazyQuery, useMutation } from '@apollo/client';
import { INITIAL_CERTIFICATE_COUNT, MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../configs';
import { useStyles } from './gift-certificate.styles';
import { validationSchema } from '../../validators/email';
import { certificateRules } from '../../locales/en/certificate.json';
import CertificateCheckbox from './certificate-checkbox';
import PageTitle from '../../components/page-title';
import { useAppStyles } from '../../components/app/app.styles';
import { generateCertificate } from './operations/gift-certificate.mutations';
import { getPaymentCheckoutForCertificates } from './operations/gift-certificate.queries';
import { getCurrentCurrency } from '../../utils/checkout';

const GiftCertificate = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const appStyles = useAppStyles();
  const language = i18n.language === 'ua' ? 0 : 1;

  const [getPaymentCheckoutForCertificate] = useLazyQuery(getPaymentCheckoutForCertificates, {
    onCompleted: (data) => {
      const { paymentUrl } = data.getPaymentCheckoutForCertificates;
      window.open(paymentUrl);
    }
  });

  const [generateCertificates] = useMutation(generateCertificate, {
    onCompleted: (data) => {
      const { certificates, certificatesPrice } = data.generateCertificate;
      certificates[0].email = values.email;
      getPaymentCheckoutForCertificate({
        variables: {
          data: {
            currency: getCurrentCurrency(currency),
            amount: String(certificatesPrice),
            certificates,
            language
          }
        }
      });
    }
  });

  const initialValues = {
    email: ''
  };

  const { userData, currency } = useSelector(({ User, Currency }) => ({
    userData: User.userData,
    currency: Currency.currency
  }));

  const CHECKBOXES_STATE = [
    { value: 500, checked: false, count: INITIAL_CERTIFICATE_COUNT },
    { value: 1000, checked: true, count: INITIAL_CERTIFICATE_COUNT },
    { value: 1500, checked: false, count: INITIAL_CERTIFICATE_COUNT }
  ];

  const [checkboxesArr, setCheckboxesArr] = useState(CHECKBOXES_STATE);

  const { errors, values, touched, handleChange, handleSubmit, handleBlur, resetForm } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: () => {
      const newCertificates = findCheckedCertificates(checkboxesArr);
      generateCertificates({
        variables: {
          newCertificates,
          email: values.email
        }
      });
    }
  });

  useEffect(() => {
    if (userData) {
      resetForm({
        values: {
          email: userData.email
        }
      });
    }
  }, [userData, resetForm]);

  const handleCheckboxChange = (value, checkboxIndex) => {
    setCheckboxesArr(
      checkboxesArr.map((checkbox, index) =>
        index === checkboxIndex ? { ...checkbox, checked: value } : checkbox
      )
    );
  };

  const handleCountChange = (count, index) => {
    setCheckboxesArr(
      checkboxesArr.map((checkbox, key) => (key === index ? { ...checkbox, count } : checkbox))
    );
  };

  const findCheckedCertificates = (certificates) =>
    certificates
      .filter((certificate) => certificate.checked === true)
      .map(({ checked, ...keepAtrs }) => keepAtrs);

  const checkboxContent = checkboxesArr.map((checkbox, index) => (
    <CertificateCheckbox
      handleAllCheckboxesChange={handleCheckboxChange}
      handleAllCountChange={handleCountChange}
      checked={checkbox.checked}
      index={index}
      key={checkbox.value}
      value={checkbox.value}
    />
  ));

  const certificateText = (index) => t(`certificate.certificateRules.${index}`);
  const disableSubmit = findCheckedCertificates(checkboxesArr);

  const certificateRulesContent = certificateRules.map((_, index) => (
    <React.Fragment key={index}>
      {`${index + 1}. ${certificateText(index)}`}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={appStyles.rootApp}>
      <div className={appStyles.containerApp}>
        <PageTitle title={t('certificate.giftCertificate')} titleLine />
        <h2 className={styles.chooseCertificate}>{t('certificate.chooseCertificate')}</h2>
        <div className={styles.checkboxWrapper}>{checkboxContent}</div>
        <div className={styles.lowerWrapper}>
          <div>{certificateRulesContent}</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
              <TextField
                id='email'
                data-testid='email'
                fullWidth
                type='email'
                label={t('checkout.checkoutTextFields.email')}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                className={styles.textField}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                color={MATERIAL_UI_COLOR.PRIMARY}
                name='email'
                error={touched.email && Boolean(t(errors.email))}
                helperText={touched.email && t(errors.email)}
              />
              <Button
                data-testid='button'
                className={styles.purchaseButton}
                fullWidth
                type='submit'
                disabled={!disableSubmit.length}
              >
                {t('buttons.buyButton')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiftCertificate;
