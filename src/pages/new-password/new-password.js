import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { useStyles } from './new-password.styles';
import { endAdornment } from '../../utils/eyeToggle';
import { resetPassword, resetState } from '../../redux/user/user.actions';
import { handleErrorMessage } from '../../utils/handle-new-password';
import { newPasswordSchema } from '../../validators/new-password';
import { AuthWrapper, AuthHeading, AuthButton } from '../../components/auth-form';

const NewPassword = ({ token }) => {
  const styles = useStyles();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { t } = useTranslation();
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const dispatch = useDispatch();

  const { passwordReset, userError, loading } = useSelector(({ User }) => ({
    passwordReset: User.passwordReset,
    loading: User.userLoading,
    userError: User.error
  }));

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const handleRecovery = async ({ password }) => {
    dispatch(resetPassword({ password, token }));
  };

  const successWindow = (
    <div>
      <h2 className={styles.heading}>{t('newPassword.success')}</h2>
      <p className={styles.recoveryText}>{t('newPassword.redirect')}</p>
    </div>
  );

  return (
    <Formik
      onSubmit={handleRecovery}
      initialValues={{ password: '', confirmPassword: '' }}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
      validationSchema={newPasswordSchema}
    >
      {({ errors }) => (
        <AuthWrapper>
          {(passwordReset && successWindow) || (
            <Form className='newPasswordForm'>
              <AuthHeading>{t('common.enterNew')}</AuthHeading>
              <Field
                name='password'
                as={TextField}
                type='password'
                label={t('common.newPass')}
                className={styles.passwordInput}
                variant='outlined'
                fullWidth
                InputProps={endAdornment(showPassword, setShowPassword)}
                error={!!errors.password}
                helperText={errors.password || ''}
              />
              <Field
                name='confirmPassword'
                as={TextField}
                type='password'
                label={t('common.newPass')}
                className={styles.passwordInput}
                variant='outlined'
                fullWidth
                InputProps={endAdornment(showConfirmPassword, setShowConfirmPassword)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword || ''}
              />
              <AuthButton
                loading={loading}
                onclick={() => {
                  setShouldValidate(true);
                }}
              >
                {t('common.change')}
              </AuthButton>
              {handleErrorMessage(t(userError), styles.serverError)}
            </Form>
          )}
        </AuthWrapper>
      )}
    </Formik>
  );
};

export default NewPassword;
