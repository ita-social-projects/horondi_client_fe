import React, { useEffect, useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './login.styles';
import { LOGIN_USER_DATA } from '../../configs';
import {
  placeholders,
  OR_TEXT,
  LOGIN_FORM_LABEL,
  FORGOT_PASSWORD,
  REGISTER_PROPOSAL,
  STAY_SIGNED_IN,
  errorMessages
} from '../../translations/user.translations';
import { loginUser, resetState } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';
import GoogleBtn from '../../components/google-log-in-btn/index';
import { Loader } from '../../components/loader/loader';
import routes from '../../const/routes';
import { validationSchema } from '../../validators/login';
import Snackbar from '../../containers/snackbar';
import { MATERIAL_UI_COLOR } from '../../const/material-ui';

const Login = () => {
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(true);
  const { pathToRecovery, pathToRegister } = routes;
  const { loginError, userLoading, language } = useSelector(({ User, Language }) => ({
    loginError: User.error,
    userLoading: User.userLoading,
    language: Language.language
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const eventPreventHandler = (e) => {
    e.preventDefault();
  };

  const { handleSubmit, errors, values, handleChange, handleBlur, setFieldValue, touched } =
    useFormik({
      validationSchema: validationSchema(language),
      initialValues: LOGIN_USER_DATA,
      onSubmit: () => {
        dispatch(loginUser({ user: values }));
      }
    });

  return (
    <form onSubmit={(e) => eventPreventHandler(e)}>
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.wrapper}>
          <Grid container alignItems='center' className={styles.formWrapper} spacing={2}>
            <Grid item sm={12} md={6} lg={6} className={styles.fonWrapper} />
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={styles.loginForm}>
                {userLoading ? (
                  <Loader />
                ) : (
                  <>
                    <h2 className={styles.heading}>{LOGIN_FORM_LABEL[language].value}</h2>
                    <TextField
                      data-cy='email'
                      id='email'
                      label={placeholders.email[language].value}
                      className={`${styles.emailInput} ${
                        errors.email === errorMessages[language].value.email && styles.afterText
                      }`}
                      fullWidth
                      variant='outlined'
                      type='text'
                      name='email'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      color={MATERIAL_UI_COLOR.PRIMARY}
                      error={(touched.email && !!errors.email) || ''}
                      helperText={errors.email || ''}
                    />
                    <TextField
                      data-cy='password'
                      id='password'
                      label={placeholders.password[language].value}
                      className={styles.passwordInput}
                      fullWidth
                      variant='outlined'
                      color={MATERIAL_UI_COLOR.PRIMARY}
                      type='password'
                      InputProps={endAdornment(showPassword, setShowPassword)}
                      value={values.password}
                      name='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={(touched.password && !!errors.password) || ''}
                      helperText={errors.password || ''}
                    />
                    <div>
                      <FormControlLabel
                        data-cy='staySignedIn'
                        key={STAY_SIGNED_IN[language].value}
                        value={values.staySignedIn}
                        checked={values.staySignedIn}
                        control={<Checkbox color='primary' />}
                        label={STAY_SIGNED_IN[language].value}
                        labelPlacement='end'
                        onChange={() => setFieldValue('staySignedIn', !values.staySignedIn)}
                      />
                    </div>
                    <div className={styles.loginGroup}>
                      <Button
                        className={styles.loginBtn}
                        fullWidth
                        type='submit'
                        onClick={handleSubmit}
                      >
                        {LOGIN_FORM_LABEL[language].value}
                      </Button>
                      <p className={styles.loginError}>{loginError}</p>
                      <div className={styles.recoveryContainer}>
                        <Link to={pathToRecovery} className={styles.recoveryBtn}>
                          {FORGOT_PASSWORD[language].value}
                        </Link>
                      </div>
                    </div>
                    <div className={styles.orContainer}>
                      <span className={styles.orText}>{OR_TEXT[language].value}</span>
                    </div>
                    <GoogleBtn />
                    <div className={styles.registerContainer}>
                      <Link to={pathToRegister} className={styles.registerBtn}>
                        {REGISTER_PROPOSAL[language].value}
                      </Link>
                    </div>
                    <Snackbar />
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default Login;
