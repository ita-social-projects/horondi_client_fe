import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  placeholders,
  formRegExp,
  errorMessages,
  LANGUAGE as language,
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  REGISTER_USER_DATA,
  CONFIRM_EMAIL,
  SHOW_AFTER
} from '../../configs';
import { lightTheme, createRegisterStyles, defaultTheme } from './styles';
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
  const [theme] = useState(lightTheme);

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

  // HOOKS
  const classes = createRegisterStyles(theme)();

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
  }, [
    firstNameValidated,
    lastNameValidated,
    emailValidated,
    passwordValidated,
    isConfirmedPassword,
    user,
    allFieldsSet
  ]);

  // CLASSES
  const {
    register,
    registerForm,
    heading,
    dataInput,
    loginBtn,
    registerBtn,
    registerGroup,
    registerWrapper,
    disabledRegister,
    infoLogo,
    successText,
    notchedOutline
  } = classes;

  // USERFIELD DATA
  const { firstName, lastName, confirmPassword, email, password } = user;

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages.firstname,
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
      errorMessage: errorMessages.lastname,
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
      errorMessage: errorMessages.email,
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
      errorMessage: errorMessages.password,
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
        notchedOutline
      ),
      regExp: formRegExp.password
    },
    confirmPasswordField: {
      inputName: 'confirmPassword',
      errorMessage: errorMessages.confirmPassword,
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
        notchedOutline
      )
    }
  };

  const successWindow = (
    <form className={registerForm}>
      <div>
        <img
          src={theme.inputTextColor.color === 'white' ? infoLight : info}
          alt='info'
          className={infoLogo}
        />
        <p className={successText}>{CONFIRM_EMAIL[language].value}</p>
      </div>
    </form>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={register}>
        <div className={registerWrapper}>
          {hasRegistered ? (
            successWindow
          ) : (
            <form className={registerForm}>
              <h2 className={heading}>{REGISTER_FORM_LABEL[language].value}</h2>
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
                        notchedOutline
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
                    className={dataInput}
                    onChange={(e) => onChange(e, validation.setValid, regExp)}
                    value={value}
                    type={type}
                    // InputProps={InputProps}
                  />
                )
              )}

              <div className={registerGroup}>
                <Button
                  className={allFieldsSet ? registerBtn : disabledRegister}
                  fullWidth
                  onClick={handleRegister}
                  disabled={!allFieldsSet}
                >
                  {REGISTER_FORM_LABEL[language].value}
                </Button>
                <p className={classes.registerError}>{registerError}</p>
              </div>
              <div>
                <Link to='/login' className={loginBtn}>
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
