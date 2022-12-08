import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { USER_TOKENS, RETURN_PAGE } from '../../configs';
import { REGISTER_USER_DATA, REGISTER_IMG_INFO } from './constants';
import { useStyles } from './register.styles';
import { registerUser, resetState } from '../../redux/user/user.actions';
import { setToLocalStorage } from '../../services/local-storage.service';
import { setInfoImgByTheme } from '../../utils/user-helpers';
import { regValidationSchema } from '../../validators/register';
import RegisterForm from './register-from/index';
import { AuthWrapper } from '../../components/auth-form';

const Register = () => {
  const styles = useStyles();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { palette } = useTheme();
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const { handleSubmit, errors, values, handleChange, handleBlur, touched } = useFormik({
    validationSchema: regValidationSchema,
    initialValues: REGISTER_USER_DATA,
    onSubmit: (user) => {
      const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      };
      setToLocalStorage(USER_TOKENS.ACCESS_TOKEN, null);

      dispatch(registerUser({ user: userData, language }));
    }
  });

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
    <AuthWrapper>
      {hasRegistered ? (
        <div className={styles.registerSuccess}>
          <img
            src={setInfoImgByTheme(isLightTheme)}
            alt={REGISTER_IMG_INFO}
            className={styles.infoLogo}
          />
          <p>{t('register.confirmEmail')}</p>
          <Button
            variant='outlined'
            className={styles.registerBtn}
            onClick={() => {
              history.push(sessionStorage.getItem(RETURN_PAGE));
            }}
          >
            {t('register.continueShopping')}
          </Button>
        </div>
      ) : (
        <RegisterForm
          formOperations={{ handleSubmit, handleChange, handleBlur }}
          touched={touched}
          loading={loading}
          values={values}
          errors={errors}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showPasswordConfirm={showPasswordConfirm}
          setShowPasswordConfirm={setShowPasswordConfirm}
          registerError={t(registerError)}
        />
      )}
    </AuthWrapper>
  );
};

export default Register;
