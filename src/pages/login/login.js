import React, { useEffect, useState } from 'react';
import { Button, ThemeProvider, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import {
  darkTheme,
  createLoginStyles,
  defaultTheme,
  lightTheme
} from './login.styles';
import {
  placeholders,
  OR_TEXT,
  LANGUAGE as language,
  LOGIN_FORM_LABEL,
  LOGIN_USER_DATA,
  EMPTY_FIELD
} from '../../configs';
import { loginUser } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';

const Login = ({ history }) => {
  // VALUES
  const [user, setUser] = useState(LOGIN_USER_DATA);
  const [allFieldsSet, setAllFieldsSet] = useState(false);
  const [theme, setTheme] = useState(darkTheme);

  // VALIDATE
  const [shouldValidate, setShouldValidate] = useState(false);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);

  // LABELS
  const label = LOGIN_FORM_LABEL[language].value;
  const emailLabel = placeholders.email[language].value;
  const passwordLabel = placeholders.password[language].value;

  // HANDLERS
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    setShouldValidate(true);
    if (allFieldsSet) {
      try {
        dispatch(loginUser(user));
      } catch (e) {
        console.error(e);
      }
    }
  };

  // HOOKS
  const { loginError, isLightTheme } = useSelector((state) => ({
    loginError: state.User.error,
    isLightTheme: state.Theme.lightMode
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.values(user).every((val) => val !== '')) {
      setAllFieldsSet(true);
    } else {
      setAllFieldsSet(false);
    }
    if (!loginError && loginError !== null) {
      history.push('/');
    }
    if (isLightTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [user, loginError, history, isLightTheme]);

  // CLASSES
  const styles = createLoginStyles(theme)();

  const { email, password } = user;

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <form className={styles.loginForm}>
            <h2 className={styles.heading}>
              {LOGIN_FORM_LABEL[language].value}
            </h2>
            <TextField
              InputLabelProps={{
                style: {
                  color: theme.inputLabelColor.color
                }
              }}
              InputProps={{
                style: {
                  color: theme.inputTextColor.color
                },
                classes: {
                  notchedOutline: styles.notchedOutline
                }
              }}
              color='secondary'
              label={emailLabel}
              className={styles.emailInput}
              fullWidth
              variant='outlined'
              type='text'
              name='email'
              value={email}
              error={!email && shouldValidate}
              required
              onChange={handleChange}
              helperText={
                !email && shouldValidate ? EMPTY_FIELD[language].value : ''
              }
            />
            <TextField
              InputLabelProps={{
                style: {
                  color: theme.inputLabelColor.color
                }
              }}
              label={passwordLabel}
              className={styles.passwordInput}
              fullWidth
              variant='outlined'
              type='password'
              InputProps={endAdornment(
                showPassword,
                setShowPassword,
                theme.inputTextColor.color,
                styles.notchedOutline
              )}
              name='password'
              value={password}
              error={!password && shouldValidate}
              required
              onChange={handleChange}
              helperText={
                !password && shouldValidate ? EMPTY_FIELD[language].value : ''
              }
            />
            <div className={styles.recoveryContainer}>
              <Link to='/recovery' className={styles.recoveryBtn}>
                Forgot password?
              </Link>
            </div>
            <div className={styles.loginGroup}>
              <Button
                className={
                  allFieldsSet ? styles.loginBtn : styles.disabledLogin
                }
                fullWidth
                onClick={handleLogin}
                disabled={!allFieldsSet}
              >
                {label}
              </Button>
              <p className={styles.loginError}>
                {loginError ? 'Wrong e-mail address or password' : ''}
              </p>
            </div>
            <div className={styles.orContainer}>
              <span className={styles.orText}>{OR_TEXT[language].value}</span>
            </div>
            <Button className={styles.googleBtn} fullWidth>
              <span className={styles.googleLogo} />
              Google
            </Button>
            <div className={styles.registrContainer}>
              <Link to='/register' className={styles.registrBtn}>
                Registration
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default withRouter(Login);
