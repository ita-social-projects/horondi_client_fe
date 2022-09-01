import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useStyles } from './new-password.styles';
import { formRegExp } from '../../configs/regexp';
import { endAdornment } from '../../utils/eyeToggle';
import { resetPassword, resetState } from '../../redux/user/user.actions';
import {
  handleNewPasswodLoaderOrWindow,
  handleErrorMessage
} from '../../utils/handle-new-password';
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

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(formRegExp.password, t('error.profile.pass'))
      .required(t('error.profile.pass')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('error.confirmPassword'))
      .when('password', {
        is: (val) => {
          if (val) return val;
        },
        then: Yup.string().required(t('error.confirmPassword'))
      })
  });

  return (
    <Formik
      onSubmit={handleRecovery}
      initialValues={{ password: '', confirmPassword: '' }}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
      validationSchema={validationSchema}
    >
      {({ errors }) => (
        <AuthWrapper>
          {passwordReset || loading ? (
            handleNewPasswodLoaderOrWindow(passwordReset, successWindow)
          ) : (
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
