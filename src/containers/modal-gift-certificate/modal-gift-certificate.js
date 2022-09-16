import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { TextField, Typography, Button } from '@material-ui/core';

import { validationSchema } from '../../validators/email';
import { Loader } from '../../components/loader/loader';
import { giftCertificateToEmail } from '../../pages/gift-certificate/operations/gift-certificate.mutations';
import { useStyles } from './modal-gift-certificate.styles';

const ModalGiftCertificate = ({ item, setModalVisibility }) => {
  const { t, i18n } = useTranslation();

  const language = i18n.language === 'ua' ? 0 : 1;

  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));

  const styles = useStyles();

  const initialValues = {
    email: ''
  };

  const { errors, values, touched, handleChange, handleSubmit, handleBlur, setTouched } = useFormik(
    {
      validationSchema,
      initialValues,
      onSubmit: () => {
        gitftCertificate({
          variables: {
            id: item._id,
            email: values.email,
            oldEmail: userData.email,
            language
          }
        });
      }
    }
  );

  const [gitftCertificate, { loading: gitftCertificateLoading }] = useMutation(
    giftCertificateToEmail,
    {
      onCompleted: () => setModalVisibility(false)
    }
  );

  const handleFocus = () => {
    setTouched({}, false);
  };

  const handleDismis = () => {
    setModalVisibility(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <Typography variant='h4' className={styles.title}>
          {t('modal.giftCertificate.title')}
        </Typography>
        <TextField
          id='email'
          className={styles.input}
          label={t('login.placeholders.email')}
          variant='outlined'
          type='email'
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          value={values.email}
          error={touched.email && Boolean(t(errors.email))}
          helperText={touched.email && Boolean(t(errors.email)) && t('error.profile.email')}
        />
        <div className={styles.buttonGroup}>
          <Button
            variant='contained'
            disabled={gitftCertificateLoading}
            type='submit'
            data-testid='confirm'
          >
            {gitftCertificateLoading ? (
              <Loader heightWrap='25px' height='20px' width='20px' />
            ) : (
              t('modal.giftCertificate.confirmButton')
            )}
          </Button>
          <Button variant='contained' onClick={handleDismis} data-testid='dismiss'>
            {t('modal.giftCertificate.dismisButton')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ModalGiftCertificate;
