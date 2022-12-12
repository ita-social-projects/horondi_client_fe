import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, Checkbox } from '@material-ui/core';
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
import routes from '../../configs/routes';
import { loginValidationSchema } from '../../validators/login';
import Snackbar from '../../containers/snackbar';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { AuthButton, AuthWrapper, AuthHeading } from '../../components/auth-form';
import AppTextField from '../../components/app-text-field';

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

  const themeColor = useMemo(
    () => (theme === LIGHT_THEME ? MATERIAL_UI_COLOR.PRIMARY : MATERIAL_UI_COLOR.DEFAULT),
    [theme]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const { handleSubmit, errors, values, handleChange, handleBlur, setFieldValue, touched } =
    useFormik({
      validationSchema: loginValidationSchema,
      initialValues: LOGIN_USER_DATA,
      onSubmit: () => {
        dispatch(loginUser({ user: values }));
      }
    });

  const wrongCredentials = <div className={styles.loginError}>{loginError && t(loginError)}</div>;
  const formFieldsInfo = [
    { name: 'email', type: 'text', label: t('login.placeholders.email') },
    {
      name: 'password',
      type: 'password',
      label: t('login.placeholders.password'),
      inputProps: endAdornment(showPassword, setShowPassword)
    }
  ];

  const formFields = formFieldsInfo.map(({ name, type, label, inputProps }) => (
    <AppTextField
      key={name}
      name={name}
      type={type}
      label={label}
      fullWidth
      variant='outlined'
      InputProps={inputProps || {}}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      errorMsg={!!touched[name] && t(errors[name])}
    />
  ));

  return (
    <AuthWrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <AuthHeading>{t('login.formLabel')}</AuthHeading>
        {formFields}
        <div>
          <FormControlLabel
            data-testid='staySignedIn'
            key={t('login.rememberMe')}
            value={values.rememberMe}
            className={styles.checkBox}
            checked={values.rememberMe}
            control={<Checkbox color={themeColor} />}
            label={t('login.rememberMe')}
            labelPlacement='end'
            onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
          />
        </div>

        <AuthButton loading={userLoading} onclick={handleSubmit}>
          {t('login.formLabel').toUpperCase()}
        </AuthButton>
        {wrongCredentials}
        <Link to={pathToRecovery} className={styles.linkBtn}>
          {t('login.forgotPassword')}
        </Link>
        <div className={styles.orText}>{t('login.orText')}</div>
        <GoogleBtn />
        <FacebookBtn />
        <Link to={pathToRegister} className={styles.linkBtn}>
          {t('login.registerProposal')}
        </Link>
        <Snackbar />
      </form>
    </AuthWrapper>
  );
};

export default Login;
