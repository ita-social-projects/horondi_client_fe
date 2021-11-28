import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { REGISTER_USER_DATA, USER_TOKENS, RETURN_PAGE, IMG_ALT } from '../../configs';
import { useStyles } from './register.styles';
import { registerUser, resetState } from '../../redux/user/user.actions';
import { setToLocalStorage } from '../../services/local-storage.service';
import { setInfoImgByTheme } from '../../utils/user-helpers';
import { regValidationSchema } from '../../validators/register';
import RegisterForm from './register-from/index';

export default function Register() {
  const styles = useStyles();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { palette } = useTheme();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const handleRegister = (user) => {
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    };
    setToLocalStorage(USER_TOKENS.ACCESS_TOKEN, null);

    dispatch(registerUser({ user: userData, language }));
  };

  const language = i18n.language === 'ua' ? 0 : 1;

  const { hasRegistered, registerError, loading } = useSelector(({ User }) => ({
    loading: User.userLoading,
    registerError: User.error,
    hasRegistered: User.userRegistered
  }));

  const isLightTheme = palette.type === 'light';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <Formik
      initialValues={REGISTER_USER_DATA}
      onSubmit={handleRegister}
      validationSchema={regValidationSchema}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
    >
      {({ errors, values }) => (
        <div className={styles.registerContainer}>
          <div className={styles.registerBackground} />
          <div className={styles.formContainer}>
            <Typography component='div' className={styles.formWrapper}>
              {hasRegistered ? (
                <div className={styles.registerSuccess}>
                  <div className={styles.registerSuccessInfo}>
                    <img
                      src={setInfoImgByTheme(isLightTheme)}
                      alt={IMG_ALT.REGISTER_IMG_INFO}
                      className={styles.infoLogo}
                    />
                    <p>{t('register.confirmEmail')}</p>
                    <Button
                      className={styles.registerBtn}
                      onClick={() => {
                        history.push(sessionStorage.getItem(RETURN_PAGE));
                      }}
                    >
                      {t('register.continueShopping')}
                    </Button>
                  </div>
                </div>
              ) : (
                <RegisterForm
                  loading={loading}
                  values={values}
                  errors={errors}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  registerError={registerError}
                  setShouldValidate={() => {
                    setShouldValidate(true);
                  }}
                />
              )}
            </Typography>
          </div>
        </div>
      )}
    </Formik>
  );
}
