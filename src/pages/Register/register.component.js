import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  placeholders,
  formRegExp,
  errorMessages,
  LANGUAGE,
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL
} from '../../configs';
import { useStyles, defaultTheme } from './styles';
import registerUser from '../../services/registerUser';

const USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const language = LANGUAGE;

function Register({ match, location, history }) {
  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  // VALUES
  const [user, setUser] = useState(USER_DATA);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(true);

  // ERROR
  const [registerError, setRegisterError] = useState('');

  // PLACEHOLDERS FOR LABELS
  const firstNamePlaceholder = placeholders.firstname[language].value;
  const lastNamePlaceholder = placeholders.lastname[language].value;
  const emailPlaceholder = placeholders.email[language].value;
  const passwordPlaceholder = placeholders.password[language].value;
  const confirmPasswordPlaceholder =
    placeholders.confirmPassword[language].value;

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
          history.push('/login');
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

  // EYE TOGGLE
  function toggleInputType(e, showPass) {
    const input = e.currentTarget.parentElement.previousSibling;
    if (input.type === 'password') {
      input.type = 'text';
      showPass(false);
    } else {
      input.type = 'password';
      showPass(true);
    }
  }

  // EYE TOGGLER

  function endAdornment(isVisible, setShowPass) {
    return {
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={(e) => toggleInputType(e, setShowPass)}
          >
            {isVisible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      )
    };
  }

  // HOOKS
  const classes = useStyles();

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
  }, [
    firstNameValidated,
    lastNameValidated,
    emailValidated,
    passwordValidated,
    isConfirmedPassword
  ]);

  // USERFIELD DATA
  const { firstName, lastName, confirmPassword, email, password } = user;

  const userFields = {
    firstNameField: {
      label: firstNamePlaceholder,
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
      label: lastNamePlaceholder,
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
      label: emailPlaceholder,
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
      label: passwordPlaceholder,
      inputName: 'password',
      errorMessage: errorMessages.password,
      value: password,
      onChange: handleChange,
      validation: {
        value: passwordValidated,
        setValid: setPasswordValidated
      },
      type: 'password',
      InputProps: endAdornment(showPassword, setShowPassword),
      regExp: formRegExp.password
    },
    confirmPasswordField: {
      label: confirmPasswordPlaceholder,
      inputName: 'confirmPassword',
      errorMessage: errorMessages.confirmPassword,
      value: confirmPassword,
      onChange: checkIfConfirmed,
      validation: {
        value: isConfirmedPassword,
        setValid: setIsConfirmedPassword
      },
      type: 'password',
      InputProps: endAdornment(showConfirmedPassword, setShowConfirmedPassword)
    }
  };

  const {
    register,
    registerForm,
    heading,
    dataInput,
    loginBtn,
    registerBtn,
    registerGroup,
    registerWrapper
  } = classes;

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={register}>
        <div className={registerWrapper}>
          <form className={registerForm}>
            <h2 className={heading}>{REGISTER_FORM_LABEL[language].value}</h2>
            {Object.values(userFields).map(
              ({
                label,
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
                  key={label}
                  label={label}
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
                  InputProps={InputProps}
                />
              )
            )}

            <div className={registerGroup}>
              <Button
                className={registerBtn}
                fullWidth
                onClick={handleRegister}
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
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(Register);
