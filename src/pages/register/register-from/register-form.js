import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { TEXT_FIELD_VARIANT } from '../../../configs';
import { USER_REGISTER_LABELS } from '../constants';
import { useStyles } from './register-form.styles';
import { endAdornment } from '../../../utils/eyeToggle';
import GoogleBtn from '../../../components/google-log-in-btn/index';
import FacebookBtn from '../../../components/facebook-log-in-btn';
import routes from '../../../configs/routes';
import { AuthButton, AuthHeading } from '../../../components/auth-form';
import AppTextField from '../../../components/app-text-field';

const { pathToLogin, pathToTerms } = routes;

export default function RegisterForm({
  formOperations,
  touched,
  loading,
  values,
  errors,
  showPassword,
  setShowPassword,
  showPasswordConfirm,
  setShowPasswordConfirm,
  registerError
}) {
  const styles = useStyles();
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  const { handleSubmit, handleChange, handleBlur } = formOperations;
  const { pass, passConfirm } = USER_REGISTER_LABELS;
  const consentLink = (
    <div className={styles.consentMessage}>
      {t('register.formConsent.text')}
      <Link className={styles.consentLink} to={pathToTerms} target='_blank' rel='noreferrer'>
        {t('register.formConsent.link')}
      </Link>
    </div>
  );

  const inputProps = (name) => {
    if (name === pass) return endAdornment(showPassword, setShowPassword);
    if (name === passConfirm) return endAdornment(showPasswordConfirm, setShowPasswordConfirm);
    return {};
  };
  const formFields = Object.keys(values).map((name) => (
    <AppTextField
      key={name}
      type={name === passConfirm ? pass : name}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      label={t(`register.placeholders.${name}`)}
      variant={TEXT_FIELD_VARIANT.OUTLINED}
      fullWidth
      errorMsg={!!touched[name] && t(errors[name])}
      InputProps={inputProps(name)}
    />
  ));

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.registerForm}>
      <AuthHeading>{t('register.formLabel')}</AuthHeading>
      {formFields}
      <FormControlLabel
        className={styles.checkBox}
        checked={checked}
        onChange={handleChecked}
        control={<Checkbox className={styles.checkbox} />}
        label={consentLink}
      />
      <AuthButton
        onClick={handleSubmit}
        disabled={!checked}
        loading={loading}
        className={styles.button}
      >
        {t('register.formLabel')}
      </AuthButton>
      <div className={styles.registerError}>{registerError}</div>
      <div className={styles.googleText}>{t('register.googleSignIn')}</div>
      <GoogleBtn />
      <FacebookBtn />
      <Link to={pathToLogin} className={styles.loginBtn}>
        {t('register.loginFormLabel')}
      </Link>
    </form>
  );
}
