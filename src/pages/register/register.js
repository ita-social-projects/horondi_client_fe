import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formRegExp, REGISTER_USER_DATA } from '../../configs';
import {
  errorMessages,
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  placeholders,
  CONFIRM_EMAIL,
  REGISTER_USER_ERROR
} from '../../translations/user.translations';
import { useStyles } from './register.styles';
import infoImg from '../../images/information.png';
import infoLightImg from '../../images/info-light.png';
import { endAdornment } from '../../utils/eyeToggle';
import { Loader } from '../../components/loader/loader';
import { registerUser, resetState } from '../../redux/user/user.actions';
import { setToLocalStorage } from '../../services/local-storage.service';

function Register() {
  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  // USER VALUES
  const [user, setUser] = useState(REGISTER_USER_DATA);
  const { firstName, lastName, email, password } = user;

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);

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
      setToLocalStorage('accessToken', null);
      dispatch(registerUser({ user, language }));
    }
  };

  // HOOKS
  const {
    isLightTheme,
    language,
    hasRegistered,
    registerError,
    loading
  } = useSelector(({ Theme, Language, User }) => ({
    isLightTheme: Theme.lightMode,
    language: Language.language,
    loading: User.userLoading,
    registerError: User.error,
    hasRegistered: User.userRegistered
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    // VALID FIELDS
    if (
      firstNameValidated &&
      lastNameValidated &&
      emailValidated &&
      passwordValidated
    ) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [
    firstNameValidated,
    lastNameValidated,
    emailValidated,
    passwordValidated
  ]);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  // STYLES
  const styles = useStyles();

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      value: firstName,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    lastNameField: {
      inputName: 'lastName',
      value: lastName,
      validation: {
        value: lastNameValidated,
        setValid: setLastNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    email: {
      inputName: 'email',
      value: email,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: 'text',
      regExp: formRegExp.email
    },
    passwordField: {
      inputName: 'password',
      value: password,
      validation: {
        value: passwordValidated,
        setValid: setPasswordValidated
      },
      type: 'password',
      InputProps: endAdornment(showPassword, setShowPassword),
      regExp: formRegExp.password
    }
  };

  const successWindow = (
    <form className={styles.registerForm}>
      <div className={styles.successWrapper}>
        <img
          src={isLightTheme ? infoImg : infoLightImg}
          alt='info'
          className={styles.infoLogo}
        />
        <p className={styles.successText}>{CONFIRM_EMAIL[language].value}</p>
      </div>
    </form>
  );

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        {hasRegistered ? (
          successWindow
        ) : (
          <form className={styles.registerForm}>
            {loading ? (
              <Loader />
            ) : (
              <>
                <h2 className={styles.heading}>
                  {REGISTER_FORM_LABEL[language].value}
                </h2>
                {Object.values(userFields).map(
                  ({
                    inputName,
                    value,
                    validation,
                    type,
                    InputProps = null,
                    regExp = null
                  }) => (
                    <TextField
                      InputProps={{
                        endAdornment: InputProps && InputProps.endAdornment
                      }}
                      required
                      key={placeholders[inputName][language].value}
                      label={placeholders[inputName][language].value}
                      variant='outlined'
                      name={inputName}
                      fullWidth
                      error={!validation.value && shouldValidate}
                      helperText={
                        !validation.value && shouldValidate
                          ? `${errorMessages[language].value[inputName]}`
                          : ''
                      }
                      className={`${styles.dataInput} ${inputName === 'email' &&
                        styles.afterText}`}
                      onChange={e =>
                        handleChange(e, validation.setValid, regExp)
                      }
                      value={value}
                      type={type}
                    />
                  )
                )}
                <div className={styles.registerGroup}>
                  <Button
                    className={styles.registerBtn}
                    fullWidth
                    onClick={handleRegister}
                  >
                    {REGISTER_FORM_LABEL[language].value}
                  </Button>
                  <p className={styles.registerError}>
                    {registerError
                      ? REGISTER_USER_ERROR[registerError]
                        ? REGISTER_USER_ERROR[registerError][language].value
                        : REGISTER_USER_ERROR.DEFAULT_ERROR[language].value
                      : ''}
                  </p>
                </div>
                <div>
                  <Link to='/login' className={styles.loginBtn}>
                    {LOGIN_FORM_LABEL[language].value}
                  </Link>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
