import React, { useState, useEffect } from 'react';
import './register.styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { formRegExp } from '../../configs';
import { useStyles, defaultTheme } from './styles';

const { name, email, password } = formRegExp;

const userRegexps = {
  firstName: name,
  lastName: name,
  email,
  password
};

const USER_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

function Register() {
  // VALIDATED && CONFIRMED
  /* eslint-disable */
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);
  /* eslint-enable */

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
    allFieldsValidated
  ]);

  const checkIfValidated = (e) => {
    const input = e.target.value;
    const inputName = e.target.name;
    setUser({ ...user, [inputName]: input });
    if (input.match(userRegexps[inputName])) {
      /* eslint-disable */
      eval(
        `set${inputName[0].toUpperCase()}${inputName.slice(1)}Validated(true)`
      );
    } else {
      eval(
        `set${inputName[0].toUpperCase()}${inputName.slice(1)}Validated(false)`
      );
      /* eslint-enable */
    }
  };

  const checkIfConfirmed = (e) => {
    const confirmedInput = e.target.value;
    const inputName = e.target.name;
    setUser({ ...user, [inputName]: confirmedInput });
    if (confirmedInput === password) {
      setIsConfirmedPassword(true);
    } else {
      setIsConfirmedPassword(false);
    }
  };

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
            {isVisible ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )
    };
  }
  const classes = useStyles();
  const { firstName, lastName, confirmPassword, email, password } = user;
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={classes.register}>
        <form className={classes.registerForm}>
          <h2 className={classes.heading}>Реєстрація</h2>
          <TextField
            label="Ім'я*"
            variant='outlined'
            name='firstName'
            fullWidth
            error={!firstNameValidated && !!firstName}
            helperText={
              !firstNameValidated && !!firstName ? 'Мінімум 2 символи' : ''
            }
            className={classes.dataInput}
            onChange={checkIfValidated}
            value={firstName}
          />
          <TextField
            label='Прізвище*'
            variant='outlined'
            name='lastName'
            fullWidth
            error={!lastNameValidated && !!lastName}
            helperText={
              !lastNameValidated && !!lastName ? 'Мінімум 2 символи' : ''
            }
            className={classes.dataInput}
            onChange={checkIfValidated}
            value={lastName}
          />
          <TextField
            label='Електронна адреса*'
            variant='outlined'
            name='email'
            fullWidth
            error={!emailValidated && !!email}
            helperText={
              !emailValidated && !!email
                ? 'Некоректний формат, example@mail.com'
                : ''
            }
            className={classes.dataInput}
            onChange={checkIfValidated}
            value={email}
          />
          <TextField
            label='Пароль*'
            variant='outlined'
            name='password'
            fullWidth
            error={!passwordValidated && !!password}
            helperText={
              !passwordValidated && !!password
                ? 'Мінімум  6 символів з однією літерою та цифрою'
                : ''
            }
            className={classes.dataInput}
            InputProps={endAdornment(showPassword, setShowPassword)}
            onChange={checkIfValidated}
            type='password'
            value={password}
          />
          <TextField
            label='Підтвердіть пароль*'
            variant='outlined'
            name='confirmPassword'
            fullWidth
            error={!isConfirmedPassword && !!confirmPassword}
            helperText={
              !isConfirmedPassword && !!confirmPassword
                ? 'Паролі не співпадають'
                : ''
            }
            className={classes.dataInput}
            InputProps={endAdornment(
              showConfirmedPassword,
              setShowConfirmedPassword
            )}
            type='password'
            value={confirmPassword}
            onChange={checkIfConfirmed}
          />
          <Button
            className={
              allFieldsValidated
                ? classes.registerBtn
                : classes.disabledRegisterBtn
            }
            disabled={!allFieldsValidated}
            fullWidth
          >
            Реєстрація
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
