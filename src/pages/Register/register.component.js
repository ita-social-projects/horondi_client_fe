import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { placeholders, formRegExp, errorMessages } from '../../configs';
import { useStyles, defaultTheme } from './styles';

const USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const language = 0;
const FORM_LABEL = [
  {
    lang: 'uk',
    value: 'Реєстрація'
  },
  {
    lang: 'eng',
    value: 'Register'
  }
];

function Register() {
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
    isConfirmedPassword,
    allFieldsValidated,
    shouldValidate,
    user
  ]);

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

  const handleClickCheck = () => {
    setShouldValidate(true);
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

  const classes = useStyles();

  // userField Data
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={classes.register}>
        <form className={classes.registerForm}>
          <h2 className={classes.heading}>Реєстрація</h2>
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
                // error={shouldValidate && !!value && !validation.value}
                error={!validation.value && !!value && shouldValidate}
                helperText={
                  // shouldValidate && !!value && !validation.value ? `${errorMessage}` : ''
                  !validation.value && !!value && shouldValidate
                    ? `${errorMessage}`
                    : ''
                }
                className={classes.dataInput}
                onChange={(e) => onChange(e, validation.setValid, regExp)}
                value={value}
                type={type}
                InputProps={InputProps}
              />
            )
          )}
          {/* <Validator */}
          {/*  label={firstNamePlaceholder} */}
          {/*  name='firstName' */}
          {/*  helperText={ */}
          {/*    !firstNameValidated && !!firstName ? `${errorMessages.firstname}` : '' */}
          {/*  } */}
          {/*  validate={shouldValidate} */}
          {/*  className={classes.dataInput} */}
          {/*  setIsValidated={setFirstNameValidated} */}
          {/*  value={firstName} */}
          {/*  regex={formRegExp.name} */}
          {/*  handler={handleChange} */}
          {/* /> */}
          {/* <Validator */}
          {/*  label={lastNamePlaceholder} */}
          {/*  name='lastName' */}
          {/*  helperText={ */}
          {/*    !lastNameValidated && !!lastName ? `${errorMessages.lastname}` : '' */}
          {/*  } */}
          {/*  className={classes.dataInput} */}
          {/*  setIsValidated={setLastNameValidated} */}
          {/*  value={lastName} */}
          {/*  validate={shouldValidate} */}
          {/*  regex={formRegExp.name} */}
          {/*  handler={handleChange} */}
          {/* /> */}
          {/* <Validator */}
          {/*  name='email' */}
          {/*  label={emailPlaceholder} */}
          {/*  regex={formRegExp.email} */}
          {/*  validate={shouldValidate} */}
          {/*  className={classes.dataInput} */}
          {/*  handler={handleChange} */}
          {/*  value={email} */}
          {/*  setIsValidated={setEmailValidated} */}
          {/*  helperText={ */}
          {/*    !emailValidated && !!email ? `${errorMessages.email}` : '' */}
          {/*  } */}
          {/* /> */}
          {/* <Validator */}
          {/*  type='password' */}
          {/*  name='password' */}
          {/*  label={passwordPlaceholder} */}
          {/*  regex={formRegExp.password} */}
          {/*  validate={shouldValidate} */}
          {/*  className={classes.dataInput} */}
          {/*  handler={handleChange} */}
          {/*  value={password} */}
          {/*  setIsValidated={setPasswordValidated} */}
          {/*  helperText={ */}
          {/*    !passwordValidated && !!password ? `${errorMessages.password}` : '' */}
          {/*  } */}
          {/*  inputProps={endAdornment(showPassword, setShowPassword)} */}
          {/* /> */}
          {/* <Validator */}
          {/*  type='password' */}
          {/*  name='confirmPassword' */}
          {/*  label={passwordPlaceholder} */}
          {/*  regex={`^${password}$`} */}
          {/*  validate={shouldValidate} */}
          {/*  className={classes.dataInput} */}
          {/*  handler={handleChange} */}
          {/*  value={confirmPassword} */}
          {/*  setIsValidated={setIsConfirmedPassword} */}
          {/*  helperText={ */}
          {/*    !isConfirmedPassword && !!confirmPassword ? `${errorMessages.confirmPassword}` : '' */}
          {/*  } */}
          {/*  inputProps={endAdornment(showConfirmedPassword, setShowConfirmedPassword)} */}
          {/* /> */}
          <Button
            className={classes.registerBtn}
            fullWidth
            onClick={handleClickCheck}
          >
            {FORM_LABEL[language].value}
          </Button>
          <div>
            <Link to='/login' className={classes.loginBtn}>
              Увійти
            </Link>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default Register;
