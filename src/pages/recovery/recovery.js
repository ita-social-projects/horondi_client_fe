import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useStyles } from './recovery.styles';
import { recoverUser, setUserError, userHasRecovered } from '../../redux/user/user.actions';
import { AuthWrapper, AuthButton, AuthHeading } from '../../components/auth-form';
import { handleHelperText } from '../../utils/handle-recovery-page';
import { validationSchema } from '../../validators/email';

const Recovery = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const dispatch = useDispatch();

  const { error, userRecovered, recoveryLoading } = useSelector(({ User }) => ({
    recoveryLoading: User.recoveryLoading,
    error: User.error,
    userRecovered: User.userRecovered
  }));

  useEffect(() => {
    dispatch(userHasRecovered(false));
  }, [dispatch]);

  const { errors, values, touched, handleChange, handleSubmit, handleBlur, setTouched } = useFormik(
    {
      validationSchema,
      initialValues: { email: '' },
      onSubmit: () => {
        dispatch(recoverUser({ email: values.email, language, redirect: true }));
      }
    }
  );

  const handleFocus = () => {
    setTouched({}, false);
    dispatch(setUserError(null));
  };

  const successWindow = (
    <div>
      <h2 className={styles.heading}>{t('recovery.successTitle')}</h2>
      <p className={styles.successText}>{t('recovery.successText')}</p>
    </div>
  );

  const inputError = touched.email && errors.email;
  const errorMsg = handleHelperText(t(inputError || error));

  return (
    <AuthWrapper>
      {(userRecovered && successWindow) || (
        <form onSubmit={handleSubmit}>
          <AuthHeading>{t('recovery.recoveryTitle')}</AuthHeading>
          <TextField
            name='email'
            type='text'
            label={t('recovery.recoveryEmail')}
            className={`${styles.emailInput}`}
            variant='outlined'
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            value={values.email}
            error={!!errorMsg}
            helperText={errorMsg || ' '}
          />
          <p className={styles.recoveryText}>{t('recovery.recoveryText')}</p>
          <AuthButton loading={recoveryLoading}>{t('recovery.recoveryButtonText')}</AuthButton>
        </form>
      )}
    </AuthWrapper>
  );
};

export default Recovery;
