import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { formRegExp, SHOW_AFTER } from '../../configs';
import {
  errorMessages,
  RECOVERY_SUCCESS_MESSAGE,
  RECOVERY_MESSAGES,
  RECOVERY_ERROR_MESSAGE
} from '../../translations/user.translations';
import { useStyles } from './recovery.styles';
import recoverUser from './recoverUser';
import { Loader } from '../../components/loader/loader';

const Recovery = () => {
  const [email, setEmail] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recoveryError, setRecoveryError] = useState('');
  const [hasRecovered, setHasRecovered] = useState(false);

  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const dispatch = useDispatch();

  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    setRecoveryError('');
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
      setLoading(true);
      try {
        await recoverUser(email, language);
        setHasRecovered(true);
        setTimeout(() => {
          dispatch(push('/login'));
        }, SHOW_AFTER);
      } catch (e) {
        setRecoveryError(e.message.replace('GraphQL error: ', ''));
      } finally {
        setLoading(false);
      }
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
        {hasRecovered ? (
          successWindow
        ) : loading ? (
          <Loader />
        ) : (
          <div>
            <h2 className={styles.heading}>{RECOVERY_MESSAGES[language].h2}</h2>
            <TextField
              color='secondary'
              label={RECOVERY_MESSAGES[language].label}
              className={`${styles.emailInput} ${
                !recoveryError ? styles.helperEmail : null
              }`}
              fullWidth
              variant='outlined'
              type='text'
              helperText={
                shouldValidate && !emailValidated && email
                  ? errorMessages[language].value.email
                  : RECOVERY_ERROR_MESSAGE[recoveryError]
                    ? RECOVERY_ERROR_MESSAGE[recoveryError][language].value
                    : null
              }
              value={email}
              error={
                (shouldValidate && !emailValidated && !!email) ||
                !!recoveryError
              }
              required
              onChange={(e) =>
                handleChange(e, setEmailValidated, formRegExp.email)
              }
            />
            <p className={styles.recoveryText}>
              {RECOVERY_MESSAGES[language].p_1}
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
