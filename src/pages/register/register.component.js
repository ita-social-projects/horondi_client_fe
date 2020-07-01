import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import {
  placeholders,
  formRegExp,
  errorMessages,
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  REGISTER_USER_DATA,
  CONFIRM_EMAIL,
  SHOW_AFTER
} from '../../configs';
import {
  lightTheme,
  createRegisterStyles,
  defaultTheme,
  darkTheme
} from './register.styles';
import registerUser from '../../services/registerUser';
import info from '../../images/information.png';
import infoLight from '../../images/info-light.png';
import { endAdornment } from '../../utils/eyeToggle';

function Register({ history }) {
  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [allFieldsSet, setAllFieldsSet] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  // VALUES
  const [user, setUser] = useState(REGISTER_USER_DATA);
  const [theme, setTheme] = useState(lightTheme);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(true);

  // ERROR
  const [registerError, setRegisterError] = useState('');

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

  const handleRegister = async () => {
    setShouldValidate(true);
    if (allFieldsValidated) {
      try {
        const response = await registerUser(user);
        if (response.data.errors) {
          setRegisterError(response.data.errors[0].message);
        } else {
          setHasRegistered(true);
          setTimeout(() => {
            history.push('/login');
          }, SHOW_AFTER);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const checkIfConfirmed = (e, setConfirm) => {
    const confirmedInput = e.target.value;
    const inputName = e.target.name;
    setUser({ ...user, [inputName]: confirmedInput });
    if (confirmedInput === password) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  };

  // USERFIELD DATA
  const { firstName, lastName, confirmPassword, email, password } = user;

  // HOOKS
  const { isLightTheme, language } = useSelector((state) => ({
    isLightTheme: state.Theme.lightMode,
    language: state.Language.language
  }));

  useEffect(() => {
    if (
      firstNameValidated &&
      lastNameValidated &&
      emailValidated &&
      passwordValidated &&
      isConfirmedPassword
    ) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
    if (Object.values(user).every((val) => val !== '')) {
      setAllFieldsSet(true);
    } else {
      setAllFieldsSet(false);
    }
    if (isLightTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
    // PASSWORD CHECK
    if (passwordValidated && password === confirmPassword) {
      setIsConfirmedPassword(true);
    } else {
      setIsConfirmedPassword(false);
    }
  }, [
    firstNameValidated,
    lastNameValidated,
    emailValidated,
    passwordValidated,
    isConfirmedPassword,
    user,
    allFieldsSet,
    isLightTheme,
    password,
    confirmPassword
  ]);

  // STYLES
  const styles = createRegisterStyles(theme)();

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages.firstname[language].value,
      value: firstName,
      onChange: handleChange,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    lastNameField: {
      inputName: 'lastName',
      errorMessage: errorMessages.lastname[language].value,
      value: lastName,
      onChange: handleChange,
      validation: {
        value: lastNameValidated,
        setValid: setLastNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    email: {
      inputName: 'email',
      errorMessage: errorMessages.email[language].value,
      value: email,
      onChange: handleChange,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: 'text',
      regExp: formRegExp.email
    },
    passwordField: {
      inputName: 'password',
      errorMessage: errorMessages.password[language].value,
      value: password,
      onChange: handleChange,
      validation: {
        value: passwordValidated,
        setValid: setPasswordValidated
      },
      type: 'password',
      InputProps: endAdornment(
        showPassword,
        setShowPassword,
        theme.inputTextColor.color,
        styles.notchedOutline
      ),
      regExp: formRegExp.password
    },
    confirmPasswordField: {
      inputName: 'confirmPassword',
      errorMessage: errorMessages.confirmPassword[language].value,
      value: confirmPassword,
      onChange: checkIfConfirmed,
      validation: {
        value: isConfirmedPassword,
        setValid: setIsConfirmedPassword
      },
      type: 'password',
      InputProps: endAdornment(
        showConfirmedPassword,
        setShowConfirmedPassword,
        theme.inputTextColor.color,
        styles.notchedOutline
      )
    }
  };

  const successWindow = (
    <form className={styles.registerForm}>
      <div>
        <img
          src={theme.inputTextColor.color === 'white' ? infoLight : info}
          alt='info'
          className={styles.infoLogo}
        />
        <p className={styles.successText}>{CONFIRM_EMAIL[language].value}</p>
      </div>
    </form>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.register}>
        <div className={styles.registerWrapper}>
          {hasRegistered ? (
            successWindow
          ) : (
            <form className={styles.registerForm}>
              <h2 className={styles.heading}>
                {REGISTER_FORM_LABEL[language].value}
              </h2>
              {Object.values(userFields).map(
                ({
                  inputName,
                  errorMessage,
                  value,
                  onChange,
                  validation,
                  type,
                  InputProps = null,
                  regExp = null
                }) => (
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: theme.inputLabelColor.color
                      }
                    }}
                    InputProps={{
                      style: { color: theme.inputTextColor.color },
                      classes: {
                        notchedOutline: styles.notchedOutline
                      },
                      endAdornment: InputProps && InputProps.endAdornment
                    }}
                    required
                    key={placeholders[inputName][language].value}
                    label={placeholders[inputName][language].value}
                    variant='outlined'
                    name={inputName}
                    fullWidth
                    error={!validation.value && !!value && shouldValidate}
                    helperText={
                      !validation.value && !!value && shouldValidate
                        ? `${errorMessage}`
                        : ''
                    }
                    className={styles.dataInput}
                    onChange={(e) => onChange(e, validation.setValid, regExp)}
                    value={value}
                    type={type}
                    // InputProps={InputProps}
                  />
                )
              )}

              <div className={styles.registerGroup}>
                <Button
                  className={
                    allFieldsSet ? styles.registerBtn : styles.disabledRegister
                  }
                  fullWidth
                  onClick={handleRegister}
                  disabled={!allFieldsSet}
                >
                  {REGISTER_FORM_LABEL[language].value}
                </Button>
                <p className={styles.registerError}>{registerError}</p>
              </div>
              <div>
                <Link to='/login' className={styles.loginBtn}>
                  {LOGIN_FORM_LABEL[language].value}
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(Register);
