import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

import { TEXT_FIELD_VARIANT } from '../../../configs';
import { USER_REGISTER_LABELS } from '../constants';
import { useStyles } from './register-form.styles';
import { endAdornment } from '../../../utils/eyeToggle';
import GoogleBtn from '../../../components/google-log-in-btn/index';
import FacebookBtn from '../../../components/facebook-log-in-btn';
import { Loader } from '../../../components/loader/loader';
import routes from '../../../configs/routes';

const { pathToLogin, pathToTerms } = routes;

export default function RegisterForm({
  loading,
  values,
  errors,
  showPassword,
  setShowPassword,
  showPasswordConfirm,
  setShowPasswordConfirm,
  registerError,
  setShouldValidate
}) {
  const styles = useStyles();
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const consentLink = (
    <div className={styles.consentMessage}>
      {t('register.formConsent.text')}
      <Link className={styles.consentLink} to={pathToTerms} target='_blank' rel='noreferrer'>
        {t('register.formConsent.link')}
      </Link>
    </div>
  );
  const type = (name) => {
    if (name === USER_REGISTER_LABELS.pass || name === USER_REGISTER_LABELS.passConfirm) {
      return USER_REGISTER_LABELS.pass;
    }
    return name;
  };

  const inputProps = (name) => {
    if (name === USER_REGISTER_LABELS.pass) {
      return endAdornment(showPassword, setShowPassword);
    }
    if (name === USER_REGISTER_LABELS.passConfirm) {
      return endAdornment(showPasswordConfirm, setShowPasswordConfirm);
    }
    return {};
  };

  return (
    <Form className={styles.registerForm}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className={styles.heading}>{t('register.formLabel')}</h2>
          {Object.keys(values).map((name) => (
            <Field
              key={name}
              type={type(name)}
              name={name}
              as={TextField}
              label={t(`register.placeholders.${name}`)}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              fullWidth
              error={!!errors[name]}
              helperText={t(errors[name])}
              className={`${styles.dataInput} ${
                name === USER_REGISTER_LABELS.email && styles.afterText
              }`}
              InputProps={inputProps(name)}
            />
          ))}
          <FormControlLabel
            checked={checked}
            onChange={handleChange}
            control={<Checkbox className={styles.checkbox} />}
            label={consentLink}
          />
          <div className={styles.registerGroup}>
            <Button
              className={styles.registerBtn}
              fullWidth
              type='submit'
              onClick={setShouldValidate}
              disabled={!checked}
            >
              {t('register.formLabel')}
            </Button>
            <p className={styles.registerError}>{registerError}</p>
            <p className={styles.googleText}>{t('register.googleSignIn')}</p>
            <GoogleBtn />
            <FacebookBtn />
          </div>
          <div>
            <Link to={pathToLogin} className={styles.loginBtn}>
              {t('register.loginFormLabel')}
            </Link>
          </div>
        </>
      )}
    </Form>
  );
}
