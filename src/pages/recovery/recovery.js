import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './recovery.styles';
import { recoverUser, resetState, userHasRecovered } from '../../redux/user/user.actions';
import {
  handleHelperText,
  handleRecoveryLoaderOrWindow,
  handleClass
} from '../../utils/handle-recovery-page';

const Recovery = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [shouldValidate, setShouldValidate] = useState(false);

  const { language, error, userRecovered, recoveryLoading } = useSelector(({ Language, User }) => ({
    language: Language.language,
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
    email: Yup.string().email(t('error.wrongEmail'))
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
        <div className={styles.recoveryBackground}>
          <div className={styles.recoveryForm}>
            {userRecovered || recoveryLoading ? (
              handleRecoveryLoaderOrWindow(userRecovered, successWindow)
            ) : (
              <Form>
                <h2 className={styles.heading}>{t('recovery.recoveryTitle')}</h2>
                <Field
                  name='email'
                  as={TextField}
                  type='text'
                  label={t('recovery.recoveryEmail')}
                  className={`${styles.emailInput} ${handleClass(
                    errors.email,
                    styles.helperEmail
                  )}`}
                  variant='outlined'
                  fullWidth
                  error={!!errors.email || !!error}
                  onChange={(e) => handleChange(e) || (error && dispatch(resetState()))}
                  helperText={handleHelperText(errors.email, error, language)}
                />
                <p className={styles.recoveryText}>{t('recovery.recoveryText')}</p>
                <Button
                  className={styles.recoverBtn}
                  fullWidth
                  type='submit'
                  onClick={() => setShouldValidate(true)}
                >
                  {t('recovery.recoveryButtonText')}
                </Button>
              </Form>
            )}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Recovery;
