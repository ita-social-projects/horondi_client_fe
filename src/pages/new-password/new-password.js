import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useStyles } from './new-password.styles';
import { formRegExp } from '../../configs';
import { endAdornment } from '../../utils/eyeToggle';
import { resetPassword, resetState } from '../../redux/user/user.actions';
import {
  handleNewPasswodLoaderOrWindow,
  handleErrorMessage
} from '../../utils/handle-new-password';

const NewPassword = ({ token }) => {
  const styles = useStyles();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { t } = useTranslation();
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const dispatch = useDispatch();

  const { language, passwordReset, userError, loading } = useSelector(({ Language, User }) => ({
    language: Language.language,
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
      <h2 className={styles.heading}>{t('newPassword.newMessage.success')}</h2>
      <p className={styles.recoveryText}>{t('newPassword.newMessage.redirect')}</p>
    </div>
  );

  const validationSchema = Yup.object({
    password: Yup.string().matches(formRegExp.password, t('error.pass')).required(t('error.pass')),
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
        <div className={styles.newPassBackground}>
          <div className={styles.newPassForm}>
            {passwordReset || loading ? (
              handleNewPasswodLoaderOrWindow(passwordReset, successWindow)
            ) : (
              <Form className='newPasswordForm'>
                <h2 className={styles.heading}>{t('newPassword.change.new')}</h2>
                <Field
                  name='password'
                  as={TextField}
                  type='password'
                  label={t('newPassword.change.passLabel')}
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
                  label={t('newPassword.change.confirmLabel')}
                  className={styles.passwordInput}
                  variant='outlined'
                  fullWidth
                  InputProps={endAdornment(showConfirmPassword, setShowConfirmPassword)}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword || ''}
                />
                <Button
                  className={styles.changeBtn}
                  fullWidth
                  type='submit'
                  onClick={() => {
                    setShouldValidate(true);
                  }}
                >
                  {t('newPassword.change.button')}
                </Button>
                {handleErrorMessage(userError, styles.serverError, language)}
              </Form>
            )}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default NewPassword;
