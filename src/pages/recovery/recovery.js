import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { formRegExp } from '../../configs';
import {
  errorMessages,
  RECOVERY_SUCCESS_MESSAGE,
  RECOVERY_MESSAGES,
  RECOVERY_ERROR_MESSAGE
} from '../../translations/user.translations';
import { useStyles } from './recovery.styles';
import { Loader } from '../../components/loader/loader';
import {
  recoverUser,
  resetState,
  userHasRecovered
} from '../../redux/user/user.actions';

const Recovery = () => {
  const [email, setEmail] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  const { language, error, userRecovered, recoveryLoading } = useSelector(
    ({ Language, User }) => ({
      language: Language.language,
      recoveryLoading: User.recoveryLoading,
      error: User.error,
      userRecovered: User.userRecovered
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userHasRecovered(false));
    dispatch(resetState());
  }, [dispatch]);

  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    dispatch(resetState());
    setEmail(input);
    if (input.match(regExp)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleRecovery = async () => {
    setShouldValidate(true);
    if (emailValidated) {
      dispatch(recoverUser({ email, language, redirect: true }));
    }
  };

  const styles = useStyles();

  const successWindow = (
    <div>
      <h2 className={styles.heading}>
        {RECOVERY_SUCCESS_MESSAGE[language].h2}
      </h2>
      <p className={styles.recoveryText}>
        {RECOVERY_SUCCESS_MESSAGE[language].p}
      </p>
    </div>
  );

  return (
    <div className={styles.recoveryBackground}>
      <div className={styles.recoveryForm}>
        {userRecovered ? (
          successWindow
        ) : recoveryLoading ? (
          <Loader />
        ) : (
          <div>
            <h2 className={styles.heading}>{RECOVERY_MESSAGES[language].h2}</h2>
            <TextField
              color='secondary'
              label={RECOVERY_MESSAGES[language].label}
              className={`${styles.emailInput} ${
                !error ? styles.helperEmail : null
              }`}
              fullWidth
              variant='outlined'
              type='text'
              helperText={
                shouldValidate && !emailValidated && email
                  ? errorMessages[language].value.email
                  : RECOVERY_ERROR_MESSAGE[error]
                  ? RECOVERY_ERROR_MESSAGE[error][language].value
                  : error
                  ? RECOVERY_ERROR_MESSAGE.EMAIL_ERROR[language].value
                  : null
              }
              value={email}
              error={(shouldValidate && !emailValidated && !!email) || !!error}
              required
              onChange={e =>
                handleChange(e, setEmailValidated, formRegExp.email)
              }
            />
            <p className={styles.recoveryText}>
              {RECOVERY_MESSAGES[language].p}
            </p>
            <Button
              className={styles.recoverBtn}
              fullWidth
              onClick={handleRecovery}
            >
              {RECOVERY_MESSAGES[language].button}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recovery;
