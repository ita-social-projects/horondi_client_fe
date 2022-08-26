import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './recovery.styles';
import { MATERIAL_UI_COLOR } from '../../configs';
import { recoverUser, resetState, userHasRecovered } from '../../redux/user/user.actions';
import { AuthWrapper, AuthButton, AuthHeading } from '../../components/auth-form';
import {
  handleHelperText,
  handleRecoveryLoaderOrWindow,
  handleClass
} from '../../utils/handle-recovery-page';

const Recovery = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const [shouldValidate, setShouldValidate] = useState(false);

  const { error, userRecovered, recoveryLoading } = useSelector(({ User }) => ({
    recoveryLoading: User.recoveryLoading,
    error: User.error,
    userRecovered: User.userRecovered
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userHasRecovered(false));
    dispatch(resetState());
  }, [dispatch]);

  const handleRecovery = async ({ email }) => {
    email && dispatch(recoverUser({ email, language, redirect: true }));
  };

  const successWindow = (
    <div>
      <h2 className={styles.heading}>{t('recovery.successTitle')}</h2>
      <p className={styles.recoveryText}>{t('recovery.successText')}</p>
    </div>
  );

  const validationSchema = Yup.object({
    email: Yup.string().email(t('error.profile.email'))
  });

  return (
    <Formik
      onSubmit={handleRecovery}
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
    >
      {({ errors, handleChange }) => (
        <AuthWrapper>
          {userRecovered || recoveryLoading ? (
            handleRecoveryLoaderOrWindow(userRecovered, successWindow)
          ) : (
            <Form className={styles.background}>
              <AuthHeading>{t('recovery.recoveryTitle')}</AuthHeading>
              <Field
                name='email'
                as={TextField}
                type='text'
                label={t('recovery.recoveryEmail')}
                className={`${styles.emailInput} ${handleClass(errors.email, styles.helperEmail)}`}
                variant='outlined'
                fullWidth
                onChange={(e) => handleChange(e) || (error && dispatch(resetState()))}
                helperText={handleHelperText(errors.email, t(error))}
                error={!!errors.email || !!error}
                color={MATERIAL_UI_COLOR.PRIMARY}
              />

              <p className={styles.recoveryText}>{t('recovery.recoveryText')}</p>
              <AuthButton onclick={() => setShouldValidate(true)}>
                {t('recovery.recoveryButtonText')}
              </AuthButton>
            </Form>
          )}
        </AuthWrapper>
      )}
    </Formik>
  );
};

export default Recovery;
