import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { INITIAL_CERTIFICATE_COUNT, MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../configs';
import { useStyles } from './gift-certificate.styles';
import { validationSchema } from '../../validators/email';
import { certificateRules } from '../../locales/en/certificates.json';
import CertificateCheckbox from './certificate-checkbox';

const GiftCertificate = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const email = useSelector(({ User }) => User?.userData?.email);
  const [initialValues, setInitialValues] = useState('');

  const [checkboxesArr, setCheckboxesArr] = useState([
    { value: 500, checked: false, count: INITIAL_CERTIFICATE_COUNT },
    { value: 1000, checked: true, count: INITIAL_CERTIFICATE_COUNT },
    { value: 1500, checked: false, count: INITIAL_CERTIFICATE_COUNT }
  ]);

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

  const handleCheckboxChange = (value, index) => {
    checkboxesArr.forEach((e) => {
      e.checked = false;
    });
    setCheckboxesArr(checkboxesArr.map((e, key) => (key === index ? { ...e, checked: value } : e)));
  };

  const handleCountChange = (count, index) => {
    setCheckboxesArr(checkboxesArr.map((e, key) => (key === index ? { ...e, count } : e)));
  };

  const checkboxContent = checkboxesArr.map((e, key) => (
    <CertificateCheckbox
      handleAllCheckboxesChange={handleCheckboxChange}
      handleAllCountChange={handleCountChange}
      checked={e.checked}
      index={key}
      key={e.value}
      value={e.value}
    />
  ));

  const CertificateRule = ({ index }) => {
    const certificate = t(`certificates.certificateRules.${index}`);
    return (
      <>
        {`${index + 1}. ${certificate}`}
        <br />
      </>
    );
  };

  const certificateRulesContent = certificateRules.map((e, key) => (
    <CertificateRule key={e} index={key} />
  ));

  return (
    <div className={styles.root}>
      <h1 className={styles.pageTitle}>{t('certificates.giftCertificate')}</h1>
      <h2 className={styles.chooseCertificate}>{t('certificates.chooseCertificate')}</h2>
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
