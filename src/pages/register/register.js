import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Grid from '@material-ui/core/Grid';

import { REGISTER_USER_DATA, USER_REGISTER_LABELS, USER_TOKENS, RETURN_PAGE } from '../../configs';
import {
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  CONTINUE_SHOPPING_LABEL,
  placeholders,
  CONFIRM_EMAIL,
  GOOGLE_SIGN_IN_TEXT
} from '../../translations/user.translations';
import { useStyles } from './register.styles';
import { endAdornment } from '../../utils/eyeToggle';
import GoogleBtn from '../../components/google-log-in-btn/index';
import { Loader } from '../../components/loader/loader';
import { registerUser, resetState } from '../../redux/user/user.actions';
import { setToLocalStorage } from '../../services/local-storage.service';
import { setInfoImgByTheme } from '../../utils/user-helpers';
import routes from '../../configs/routes';
import { TEXT_FIELD_VARIANT } from '../../const/material-ui';
import { IMG_ALT } from '../../const/images-alts';
import { validationSchema } from '../../validators/register';

export default function Register() {
  const styles = useStyles();
  const history = useHistory();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { pathToLogin } = routes;
  const handleRegister = (user) => {
    setToLocalStorage(USER_TOKENS.ACCESS_TOKEN, null);
    dispatch(registerUser({ user, language }));
  };

  const { isLightTheme, language, hasRegistered, registerError, loading } = useSelector(
    ({ Theme, Language, User }) => ({
      isLightTheme: Theme.lightMode,
      language: Language.language,
      loading: User.userLoading,
      registerError: User.error,
      hasRegistered: User.userRegistered
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <Formik
      initialValues={REGISTER_USER_DATA}
      onSubmit={handleRegister}
      validationSchema={validationSchema(language)}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
    >
      {({ errors, values }) => (
        <div className={styles.registerContainer}>
          <div className={styles.registerBackground} />
          <div className={styles.formContainer}>
            <Grid container className={styles.formWrapper} spacing={2}>
              <Grid
                item
                sm={12}
                md={6}
                lg={6}
                className={
                  hasRegistered ? styles.formBackgroundRegisteredUser : styles.formBackground
                }
              />
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {hasRegistered ? (
                  <div className={styles.registerSucces}>
                    <div className={styles.registerSuccesInfo}>
                      <img
                        src={setInfoImgByTheme(isLightTheme)}
                        alt={IMG_ALT.REGISTER_IMG_INFO}
                        className={styles.infoLogo}
                      />
                      <p>{CONFIRM_EMAIL[language].value}</p>
                    </div>
                    <Button
                      className={styles.registerBtn}
                      onClick={() => {
                        history.push(sessionStorage.getItem(RETURN_PAGE));
                      }}
                    >
                      {CONTINUE_SHOPPING_LABEL[language].value}
                    </Button>
                  </div>
                ) : (
                  <Form className={styles.registerForm}>
                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        <h2 className={styles.heading}>{REGISTER_FORM_LABEL[language].value}</h2>
                        {Object.keys(values).map((name) => (
                          <Field
                            key={name}
                            type={
                              name === USER_REGISTER_LABELS.pass ? name : USER_REGISTER_LABELS.text
                            }
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
                            onClick={() => {
                              setShouldValidate(true);
                            }}
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
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </Formik>
  );
}
