import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useStyles } from './login.styles';
import { LIGHT_THEME, MATERIAL_UI_COLOR } from '../../configs';
import { LOGIN_USER_DATA } from './constants';
import { loginUser, resetState } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';
import GoogleBtn from '../../components/google-log-in-btn/index';
import FacebookBtn from '../../components/facebook-log-in-btn';
import { Loader } from '../../components/loader/loader';
import routes from '../../configs/routes';
import { loginValidationSchema } from '../../validators/login';
import Snackbar from '../../containers/snackbar';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { AuthButton, AuthWrapper, AuthHeading } from '../../components/auth-form';

const Login = () => {
  const theme = getFromLocalStorage('theme');
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(true);
  const { t } = useTranslation();
  const { pathToRecovery, pathToRegister } = routes;

  const { loginError, userLoading } = useSelector(({ User }) => ({
    loginError: User.error,
    userLoading: User.userLoading
  }));
  const checkTheme = () => {
    if (theme === LIGHT_THEME) {
      return MATERIAL_UI_COLOR.PRIMARY;
    }
    return MATERIAL_UI_COLOR.DEFAULT;
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
      validationSchema: loginValidationSchema,
      initialValues: LOGIN_USER_DATA,
      onSubmit: () => {
        dispatch(loginUser({ user: values }));
      }
    });

  const wrongCredentials = loginError ? <p className={styles.loginError}>{t(loginError)}</p> : null;

  const emailStyles = useMemo(
    () => (errors.email === 'error.profile.email' ? styles.afterText : ''),
    [errors.email, styles.afterText]
  );

  return (
    <AuthWrapper>
      {userLoading ? (
        <Loader />
      ) : (
        <form onSubmit={(e) => eventPreventHandler(e)}>
          <AuthHeading>{t('login.formLabel')}</AuthHeading>
          <TextField
            data-cy='email'
            id='email'
            label={t('login.placeholders.email')}
            className={`${styles.emailInput} ${emailStyles}`}
            fullWidth
            variant='outlined'
            type='text'
            name='email'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            color={MATERIAL_UI_COLOR.PRIMARY}
            error={Boolean(touched.email && t(errors.email))}
            helperText={touched.email && t(errors.email)}
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
            error={Boolean(touched.password && t(errors.password))}
            helperText={touched.password && t(errors.password)}
          />
          <div className={styles.recoveryContainer}>
            <div>
              <FormControlLabel
                data-testid='staySignedIn'
                key={t('login.rememberMe')}
                value={values.rememberMe}
                checked={values.rememberMe}
                control={<Checkbox color={checkTheme()} />}
                label={t('login.rememberMe')}
                labelPlacement='end'
                onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
              />
            </div>
          </div>

          <div className={styles.loginGroup}>
            <AuthButton onclick={handleSubmit}>{t('login.formLabel').toUpperCase()}</AuthButton>
            {wrongCredentials}
          </div>
          <Link to={pathToRecovery} className={styles.recoveryBtn}>
            {t('login.forgotPassword')}
          </Link>
          <div className={styles.orContainer}>
            <span className={styles.orText}>{t('login.orText')}</span>
          </div>
          <GoogleBtn />
          <FacebookBtn />
          <div className={styles.registerContainer}>
            <Link to={pathToRegister} className={styles.registerBtn}>
              {t('login.registerProposal')}
            </Link>
          </div>
          <Snackbar />
        </form>
      )}
    </AuthWrapper>
  );
};

export default Login;
