import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

import { USER_REGISTER_LABELS } from '../../../configs';
import {
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  placeholders,
  GOOGLE_SIGN_IN_TEXT
} from '../../../translations/user.translations';
import { useStyles } from './register-form.styles';
import { endAdornment } from '../../../utils/eyeToggle';
import GoogleBtn from '../../../components/google-log-in-btn/index';
import { Loader } from '../../../components/loader/loader';
import { TEXT_FIELD_VARIANT } from '../../../const/material-ui';

export default function RegisterForm({
  loading,
  values,
  language,
  errors,
  showPassword,
  setShowPassword,
  registerError,
  pathToLogin,
  setShouldValidate
}) {
  const styles = useStyles();

  return (
    <Form className={styles.registerForm}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className={styles.heading}>{REGISTER_FORM_LABEL[language].value}</h2>
          {Object.keys(values).map((name) => (
            <Field
              key={name}
              type={name === USER_REGISTER_LABELS.pass ? name : USER_REGISTER_LABELS.text}
              name={name}
              as={TextField}
              label={placeholders[name][language].value}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              fullWidth
              error={!!errors[name]}
              helperText={errors[name] || ''}
              className={`${styles.dataInput} ${
                name === USER_REGISTER_LABELS.email && styles.afterText
              }`}
              InputProps={
                name === USER_REGISTER_LABELS.pass
                  ? endAdornment(showPassword, setShowPassword)
                  : {}
              }
            />
          ))}
          <div className={styles.registerGroup}>
            <Button
              className={styles.registerBtn}
              fullWidth
              type='submit'
              onClick={setShouldValidate}
            >
              {REGISTER_FORM_LABEL[language].value}
            </Button>
            <p className={styles.registerError}>{registerError}</p>
            <p className={styles.googleText}>{GOOGLE_SIGN_IN_TEXT[language].value}</p>
            <GoogleBtn />
          </div>
          <div>
            <Link to={pathToLogin} className={styles.loginBtn}>
              {LOGIN_FORM_LABEL[language].value}
            </Link>
          </div>
        </>
      )}
    </Form>
  );
}
