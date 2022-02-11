import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { INITIAL_CERTIFICATE_COUNT, MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../configs';
import { useStyles } from './gift-certificate.styles';
import { validationSchema } from '../../validators/email';
import { certificateRules } from '../../locales/en/certificate.json';
import CertificateCheckbox from './certificate-checkbox';

const GiftCertificate = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const email = useSelector(({ User }) => User?.userData?.email);
  const [initialValues, setInitialValues] = useState('');

  const CHECKBOXES_STATE = [
    { value: 500, checked: false, count: INITIAL_CERTIFICATE_COUNT },
    { value: 1000, checked: true, count: INITIAL_CERTIFICATE_COUNT },
    { value: 1500, checked: false, count: INITIAL_CERTIFICATE_COUNT }
  ];

  const [checkboxesArr, setCheckboxesArr] = useState(CHECKBOXES_STATE);

  useEffect(() => {
    if (email) {
      setInitialValues({ email });
    }
  }, [email]);

  const { errors, values, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: () => {}
  });

  const handleCheckboxChange = (value, checkboxIndex) => {
    checkboxesArr.forEach((checkbox) => {
      checkbox.checked = false;
    });
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

  const certificateRulesContent = certificateRules.map((_, index) => (
    <>
      {`${index + 1}. ${certificateText(index)}`}
      <br />
    </>
  ));

  return (
    <div className={styles.root}>
      <h1 className={styles.pageTitle}>{t('certificate.giftCertificate')}</h1>
      <h2 className={styles.chooseCertificate}>{t('certificate.chooseCertificate')}</h2>
      <div className={styles.checkboxWrapper}>{checkboxContent}</div>
      <div className={styles.lowerWrapper}>
        <div>{certificateRulesContent}</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formWrapper}>
            <TextField
              id='email'
              fullWidth
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
            <Button className={styles.purchaseButton} fullWidth type='submit'>
              {t('buttons.buyButton')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiftCertificate;
