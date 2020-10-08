import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './login.styles';
import { LOGIN_USER_DATA, formRegExp } from '../../configs';
import {
  placeholders,
  OR_TEXT,
  LOGIN_FORM_LABEL,
  FORGOT_PASSWORD,
  REGISTER_PROPOSAL,
  LOGIN_USER_ERROR
} from '../../translations/user.translations';
import { loginUser, resetState } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';
import { Loader } from '../../components/loader/loader';

const Login = () => {
  // VALUES
  const [user, setUser] = useState(LOGIN_USER_DATA);

  // VALIDATE
  const [shouldValidate, setShouldValidate] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);

  // HOOKS
  const { loginError, userLoading, language } = useSelector(
    ({ User, Language }) => ({
      loginError: User.error,
      userLoading: User.userLoading,
      language: Language.language
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (emailValidated && passwordValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [emailValidated, passwordValidated]);

  // HANDLERS
  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    const inputName = event.target.name;
    setUser({ ...user, [inputName]: input });
    if (input.match(regExp)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleLogin = async () => {
    setShouldValidate(true);
    if (allFieldsValidated) {
      dispatch(loginUser({ user }));
    }
  };

  // LABELS
  const label = LOGIN_FORM_LABEL[language].value;
  const emailLabel = placeholders.email[language].value;
  const passwordLabel = placeholders.password[language].value;

  // CLASSES
  const styles = useStyles();

  const { email, password } = user;

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <form className={styles.loginForm}>
          {userLoading ? (
            <Loader />
          ) : (
            <>
              <h2 className={styles.heading}>
                {LOGIN_FORM_LABEL[language].value}
              </h2>
              <TextField
                label={emailLabel}
                className={styles.emailInput}
                fullWidth
                variant='outlined'
                type='text'
                name='email'
                value={email}
                error={!email && shouldValidate}
                required
                onChange={e =>
                  handleChange(e, setEmailValidated, formRegExp.email)
                }
              />
              <TextField
                label={passwordLabel}
                className={styles.passwordInput}
                fullWidth
                variant='outlined'
                type='password'
                InputProps={endAdornment(showPassword, setShowPassword)}
                name='password'
                value={password}
                error={!password && shouldValidate}
                required
                onChange={e =>
                  handleChange(e, setPasswordValidated, formRegExp.password)
                }
              />
              <div className={styles.recoveryContainer}>
                <Link to='/recovery' className={styles.recoveryBtn}>
                  {FORGOT_PASSWORD[language].value}
                </Link>
              </div>
              <div className={styles.loginGroup}>
                <Button
                  className={styles.loginBtn}
                  fullWidth
                  onClick={handleLogin}
                >
                  {label}
                </Button>
                {loginError ? (
                  <p className={styles.loginError}>
                    {LOGIN_USER_ERROR[loginError] && loginError
                      ? LOGIN_USER_ERROR[loginError][language].value
                      : LOGIN_USER_ERROR.DEFAULT_ERROR[language].value}
                  </p>
                ) : null}
              </div>
              <div className={styles.orContainer}>
                <span className={styles.orText}>{OR_TEXT[language].value}</span>
              </div>
              <Button className={styles.googleBtn} fullWidth>
                <span className={styles.googleLogo} />
                Google
              </Button>
              <div className={styles.registerContainer}>
                <Link to='/register' className={styles.registerBtn}>
                  {REGISTER_PROPOSAL[language].value}
                </Link>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
