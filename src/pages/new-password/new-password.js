import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './new-password.styles';
import { formRegExp , errorMessages, CHANGE_PASSWORD } from '../../configs';
import { endAdornment } from '../../utils/eyeToggle';

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

  // VALUES
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shouldValidate, setShouldValidate] = useState(false);

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

  const handleRecovery = () => {
    setShouldValidate(true);
  };

  // STYLES
  const styles = useStyles();

  return (
    <div className={styles.newPassBackground}>
      <div className={styles.newPassForm} style={{ width: '400px' }}>
        <div className='newPasswordForm'>
          <h2 className={styles.heading}>{CHANGE_PASSWORD[language].h2}</h2>
          <TextField
            label={CHANGE_PASSWORD[language].pass_label}
            className={styles.passwordInput}
            fullWidth
            variant='outlined'
            type='password'
            value={password}
            error={!passwordValid && shouldValidate && password}
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
            error={!confirmMatches && shouldValidate && confirmPassword}
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
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
