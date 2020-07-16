import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { useStyles } from './login.styles';
import {
  placeholders,
  OR_TEXT,
  LANGUAGE as language,
  LOGIN_FORM_LABEL,
  LOGIN_USER_DATA,
  formRegExp,
  LOGIN_USER_ERROR,
  FORGOT_PASSWORD,
  REGISTER_PROPOSAL
} from '../../configs';
import { loginUser } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';
import { Loader } from '../../components/Loader/loader';

const Login = ({ history }) => {
  // VALUES
  const [user, setUser] = useState(LOGIN_USER_DATA);

  // VALIDATE
  const [shouldValidate, setShouldValidate] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);

  // ERROR
  const [showError, setShowError] = useState(false);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);

  // LABELS
  const label = LOGIN_FORM_LABEL[language].value;
  const emailLabel = placeholders.email[language].value;
  const passwordLabel = placeholders.password[language].value;

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
      try {
        dispatch(loginUser(user));
      } catch (e) {
        console.error(e);
      }
    } else {
      setShowError(true);
    }
  };

  // HOOKS
  const { loginError, userLoading } = useSelector((state) => ({
    loginError: state.User.error,
    userLoading: state.User.userLoading
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginError && loginError !== null) {
      history.push('/');
    } else {
      setShowError(true);
    }
    if (emailValidated && passwordValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [user, loginError, history, emailValidated, passwordValidated]);

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
                onChange={(e) =>
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
                onChange={(e) =>
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
                <p className={styles.loginError}>
                  {showError && shouldValidate && loginError === true
                    ? LOGIN_USER_ERROR[language].value
                    : ''}
                </p>
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

export default withRouter(Login);
