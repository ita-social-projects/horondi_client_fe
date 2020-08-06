import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formRegExp, errorMessages } from '../../configs';
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

  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    setEmail(input);
    if (input.match(regExp)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleRecovery = async () => {
    setShouldValidate(true);
    if (email) {
      setLoading(true);
      try {
        await recoverUser(email);
        setHasRecovered(true);
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
      <h2 className={styles.heading}>Success!</h2>
      <p className={styles.recoveryText}>
        Please, follow the instructions in the message, we have just sent you.
      </p>
    </div>
  );

  const errorText = (
    <div>
      <h2 className={styles.heading}>Oops, something went wrong!</h2>
      <p className={styles.recoveryText}>
        Please, reload your page and try again.
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
        ) : recoveryError ? (
          errorText
        ) : (
          <div>
            <h2 className={styles.heading}>Відновлення паролю</h2>
            <TextField
              color='secondary'
              label='Електронна адреса'
              className={styles.emailInput}
              fullWidth
              variant='outlined'
              type='text'
              helperText={
                shouldValidate && !emailValidated && email
                  ? `${errorMessages[language].value.email}`
                  : ''
              }
              value={email}
              error={shouldValidate && !emailValidated && !!email}
              required
              onChange={(e) =>
                handleChange(e, setEmailValidated, formRegExp.email)
              }
            />
            <p className={styles.recoveryText}>
              Вкажіть свою електронну пошту для скидання паролю і ми надішлемо
              інструкції для відновлення.
            </p>
            <Button
              className={styles.recoverBtn}
              fullWidth
              onClick={handleRecovery}
            >
              Відправити
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recovery;
