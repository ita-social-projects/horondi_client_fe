import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './login.styles';
import { LIGHT_THEME, LOGIN_USER_DATA } from '../../configs';
import { loginUser, resetState } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';
import GoogleBtn from '../../components/google-log-in-btn/index';
import { Loader } from '../../components/loader/loader';
import routes from '../../const/routes';
import { validationSchema } from '../../validators/login';
import Snackbar from '../../containers/snackbar';
import { MATERIAL_UI_COLOR } from '../../const/material-ui';
import { getFromLocalStorage } from '../../services/local-storage.service';

const Login = () => {
  const theme = getFromLocalStorage('theme');
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(true);
  const { t, i18n } = useTranslation();
  const { pathToRecovery, pathToRegister } = routes;

  const { loginError, userLoading } = useSelector(({ User }) => ({
    loginError: User.error,
    userLoading: User.userLoading
  }));
  const checkTheme = () => {
    if (theme === LIGHT_THEME) {
      return MATERIAL_UI_COLOR.PRIMARY;
    }
    return MATERIAL_UI_COLOR.INHERIT;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const eventPreventHandler = (e) => {
    e.preventDefault();
  };

  const { handleSubmit, errors, values, handleChange, handleBlur, setFieldValue, touched } =
    useFormik({
      validationSchema: validationSchema(i18n.language === 'ua' ? 0 : 1),
      initialValues: LOGIN_USER_DATA,
      onSubmit: () => {
        dispatch(loginUser({ user: values }));
      }
    });

  const wrongCredentials = loginError ? (
    <p className={styles.loginError}>{t('error.wrongCredentials')}</p>
  ) : null;

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
                    <h2 className={styles.heading}>{t('login.formLabel')}</h2>
                    <TextField
                      data-cy='email'
                      id='email'
                      label={t('login.placeholders.email')}
                      className={`${styles.emailInput} ${
                        errors.email === t('error.wrongEmail') && styles.afterText
                      }`}
                      fullWidth
                      variant='outlined'
                      type='text'
                      name='email'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      color={MATERIAL_UI_COLOR.PRIMARY}
                      error={touched.email && errors.email}
                      helperText={touched.email && errors.email && t('error.wrongEmail')}
                    />
                    <TextField
                      data-cy='password'
                      id='password'
                      label={t('login.placeholders.password')}
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
                      error={touched.password && errors.password}
                      helperText={touched.password && errors.password && t('error.pass')}
                    />
                    <div className={styles.recoveryContainer}>
                      <div>
                        <FormControlLabel
                          data-cy='staySignedIn'
                          key={t('login.rememberMe')}
                          value={values.rememberMe}
                          checked={values.rememberMe}
                          control={<Checkbox color={checkTheme()} />}
                          label={t('login.rememberMe')}
                          labelPlacement='end'
                          onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
                        />
                      </div>
                      <Link to={pathToRecovery} className={styles.recoveryBtn}>
                        {t('login.forgotPassword')}
                      </Link>
                    </div>

                    <div className={styles.loginGroup}>
                      <Button
                        className={styles.loginBtn}
                        fullWidth
                        type='submit'
                        onClick={handleSubmit}
                      >
                        {t('login.formLabel')}
                      </Button>
                      {wrongCredentials}
                    </div>
                    <div className={styles.orContainer}>
                      <span className={styles.orText}>{t('login.orText')}</span>
                    </div>
                    <GoogleBtn />
                    <div className={styles.registerContainer}>
                      <Link to={pathToRegister} className={styles.registerBtn}>
                        {t('login.registerProposal')}
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
