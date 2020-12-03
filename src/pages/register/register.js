import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { formRegExp, REGISTER_USER_DATA } from '../../configs';
import {
  errorMessages,
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  placeholders,
  CONFIRM_EMAIL,
  REGISTER_USER_ERROR
} from '../../translations/user.translations';
import { useStyles } from './register.styles';
import infoImg from '../../images/information.png';
import infoLightImg from '../../images/info-light.png';
import { endAdornment } from '../../utils/eyeToggle';
import { Loader } from '../../components/loader/loader';
import { registerUser, resetState } from '../../redux/user/user.actions';
import { setToLocalStorage } from '../../services/local-storage.service';

export default function Register() {
  const styles = useStyles();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (user) => {
    setToLocalStorage('accessToken', null);
    dispatch(registerUser({ user, language }));
  };

  const {
    isLightTheme,
    language,
    hasRegistered,
    registerError,
    loading
  } = useSelector(({ Theme, Language, User }) => ({
    isLightTheme: Theme.lightMode,
    language: Language.language,
    loading: User.userLoading,
    registerError: User.error,
    hasRegistered: User.userRegistered
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const successWindow = (
    <form className={styles.registerForm}>
      <div className={styles.successWrapper}>
        <img
          src={isLightTheme ? infoImg : infoLightImg}
          alt='info'
          className={styles.infoLogo}
        />
        <p className={styles.successText}>{CONFIRM_EMAIL[language].value}</p>
      </div>
    </form>
  );

  const validationSchema = Yup.object(
    Object.fromEntries(
      Object.keys(REGISTER_USER_DATA).map((item) => [
        item,
        Yup.string()
          .required(errorMessages[language].value[item])
          .matches(formRegExp[item], errorMessages[language].value[item])
      ])
    )
  );

  return (
    <Formik
      initialValues={REGISTER_USER_DATA}
      onSubmit={handleRegister}
      validationSchema={validationSchema}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
    >
      {({ errors, values }) =>
        hasRegistered ? (
          successWindow
        ) : (
          <div className={styles.registerContainer}>
            <div className={styles.registerBackground}></div>
            <div className={styles.formContainer}>
              <Grid
                container
                alignItems='center'
                className={styles.formWrapper}
                spacing={2}>
                <Grid item sm={12} md={6} lg={6}  className={styles.formBackground}>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Form className={styles.registerForm}>
                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        <h2 className={styles.heading}>
                          {REGISTER_FORM_LABEL[language].value}
                        </h2>
                        {Object.keys(values).map((name) => (
                          <Field
                            key={name}
                            type={name === 'password' ? name : 'text'}
                            name={name}
                            as={TextField}
                            label={placeholders[name][language].value}
                            variant='outlined'
                            fullWidth
                            error={!!errors[name]}
                            helperText={errors[name] || ''}
                            className={`${styles.dataInput} ${
                              name === 'email' && styles.afterText
                            }`}
                            InputProps={
                              name === 'password'
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
                          <p className={styles.registerError}>
                            {registerError
                              ? REGISTER_USER_ERROR[registerError]
                                ? REGISTER_USER_ERROR[registerError][language].value
                                : REGISTER_USER_ERROR.DEFAULT_ERROR[language].value
                              : null}
                          </p>
                        </div>
                        <div>
                          <Link to='/login' className={styles.loginBtn}>
                            {LOGIN_FORM_LABEL[language].value}
                          </Link>
                        </div>
                      </>
                    )}
                  </Form>
                </Grid>
              </Grid>
            </div>
          </div>

        )
      }
    </Formik>
  );
}
