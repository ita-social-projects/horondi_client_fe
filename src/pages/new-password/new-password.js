import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useStyles } from './new-password.styles';
import { endAdornment } from '../../utils/eyeToggle';
import { resetPassword, resetState } from '../../redux/user/user.actions';
import { handleErrorMessage } from '../../utils/handle-new-password';
import { newPasswordSchema } from '../../validators/new-password';
import { AuthWrapper, AuthHeading, AuthButton } from '../../components/auth-form';
import AppTextField from '../../components/app-text-field';

const NewPassword = ({ token }) => {
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { passwordReset, userError, loading } = useSelector(({ User }) => ({
    passwordReset: User.passwordReset,
    loading: User.userLoading,
    userError: User.error
  }));

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const { handleSubmit, errors, values, handleChange, handleBlur, touched } = useFormik({
    validationSchema: newPasswordSchema,
    initialValues: { password: '', confirmPassword: '' },
    onSubmit: ({ password }) => {
      dispatch(resetPassword({ password, token }));
    }
  });

  const successWindow = (
    <div>
      <h2>{t('newPassword.success')}</h2>
      <p>{t('newPassword.redirect')}</p>
    </div>
  );

  const formFieldsInfo = [
    {
      name: 'password',
      label: t('common.newPass'),
      inputProps: endAdornment(showPassword, setShowPassword)
    },
    {
      name: 'confirmPassword',
      label: t('common.confirmPass'),
      inputProps: endAdornment(showConfirmPassword, setShowConfirmPassword)
    }
  ];

  const formFields = formFieldsInfo.map(({ name, label, inputProps }) => (
    <AppTextField
      key={name}
      name={name}
      type='password'
      label={label}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      variant='outlined'
      fullWidth
      InputProps={inputProps}
      errorMsg={!!touched[name] && t(errors[name])}
    />
  ));

  return (
    <AuthWrapper>
      {passwordReset ? (
        successWindow
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <AuthHeading>{t('common.enterNew')}</AuthHeading>
          {formFields}
          <AuthButton loading={loading} onclick={handleSubmit} className={styles.button}>
            {t('common.change')}
          </AuthButton>
          {handleErrorMessage(t(userError), styles.serverError)}
        </form>
      )}
    </AuthWrapper>
  );
};

export default NewPassword;
