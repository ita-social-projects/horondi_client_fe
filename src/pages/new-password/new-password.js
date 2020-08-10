import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useStyles } from './new-password.styles';
import {
  formRegExp,
  errorMessages,
  CHANGE_PASSWORD,
  NEW_PASSWORD_ERROR,
  NEW_PASSWORD_SUCCESS_MESSAGE,
  SHOW_AFTER
} from '../../configs';
import { endAdornment } from '../../utils/eyeToggle';
import changePassword from './changePassword';
import Loader from '../../components/loader';
import checkIfExists from '../../utils/checkIfExists';

const NewPassword = ({ token }) => {
  // VALIDATORS
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmMatches, setConfirmMatches] = useState(false);

  // EYE TOGGLERS
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  // HOOKS
  const { language } = useSelector((state) => ({
    language: state.Language.language
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    checkIfExists(token)
      .catch(() => dispatch(push('/error-page')))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  // LOADING & ERRORS
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // VALUES
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shouldValidate, setShouldValidate] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  // HANDLERS
  const handlePasswordChange = (event) => {
    const input = event.target.value;
    setPassword(input);
    if (input.match(formRegExp.password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handlePasswordConfirm = (e) => {
    const confirmedInput = e.target.value;
    setConfirmPassword(confirmedInput);
    if (confirmedInput === password) {
      setConfirmMatches(true);
    } else {
      setConfirmMatches(false);
    }
  };

  const handleRecovery = async () => {
    setShouldValidate(true);
    if (passwordValid && confirmMatches) {
      setLoading(true);
      try {
        await changePassword(password, token);
        setHasChanged(true);
        setTimeout(() => {
          dispatch(push('/login'));
        }, SHOW_AFTER);
      } catch (e) {
        setError(e.message.replace('GraphQL error: ', ''));
      } finally {
        setLoading(false);
      }
    }
  };

  // STYLES
  const styles = useStyles();

  const successWindow = (
    <div>
      <h2 className={styles.heading}>
        {NEW_PASSWORD_SUCCESS_MESSAGE[language].h2}
      </h2>
      <p className={styles.recoveryText}>
        {NEW_PASSWORD_SUCCESS_MESSAGE[language].p}
      </p>
    </div>
  );

  return (
    <div className={styles.newPassBackground}>
      <div className={styles.newPassForm}>
        {hasChanged ? (
          successWindow
        ) : loading ? (
          <Loader />
        ) : (
          <div className='newPasswordForm'>
            <h2 className={styles.heading}>{CHANGE_PASSWORD[language].h2}</h2>
            <TextField
              label={CHANGE_PASSWORD[language].pass_label}
              className={styles.passwordInput}
              fullWidth
              variant='outlined'
              type='password'
              value={password}
              error={!passwordValid && shouldValidate && !!password}
              helperText={
                !passwordValid && shouldValidate && password
                  ? `${errorMessages[language].value.password}`
                  : ''
              }
              InputProps={endAdornment(showPassword, setShowPassword)}
              required
              onChange={handlePasswordChange}
            />
            <TextField
              label={CHANGE_PASSWORD[language].confirm_label}
              className={styles.passwordInput}
              fullWidth
              variant='outlined'
              type='password'
              value={confirmPassword}
              error={!confirmMatches && shouldValidate && !!confirmPassword}
              helperText={
                !confirmMatches && shouldValidate && confirmPassword
                  ? `${errorMessages[language].value.confirmPassword}`
                  : ''
              }
              InputProps={endAdornment(
                showConfirmPassword,
                setShowConfirmPassword
              )}
              required
              onChange={handlePasswordConfirm}
            />
            <Button
              className={styles.changeBtn}
              fullWidth
              onClick={handleRecovery}
            >
              {CHANGE_PASSWORD[language].button}
            </Button>
            {error ? (
              <p className={styles.serverError}>
                {NEW_PASSWORD_ERROR[error]
                  ? NEW_PASSWORD_ERROR[error][language].value
                  : NEW_PASSWORD_ERROR.DEFAULT_ERROR[language].value}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPassword;
