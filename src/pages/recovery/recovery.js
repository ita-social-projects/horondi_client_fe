import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
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
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Recovery = () => {
  const styles = useStyles();
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

  const handleRecovery = async ({ email }) => {
    email && dispatch(recoverUser({ email, language, redirect: true }));
  };

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

  const validationSchema = Yup.object({
    email: Yup.string().email(errorMessages[language].value.email)
  });

  return (
    <Formik
      onSubmit={handleRecovery}
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
    >
      {({ errors, handleChange }) => (
        <div className={styles.recoveryBackground}>
          <div className={styles.recoveryForm}>
            {userRecovered ? (
              successWindow
            ) : recoveryLoading ? (
              <Loader />
            ) : (
              <Form>
                <h2 className={styles.heading}>
                  {RECOVERY_MESSAGES[language].h2}
                </h2>
                <Field
                  name='email'
                  as={TextField}
                  type='text'
                  label={RECOVERY_MESSAGES[language].label}
                  className={`${styles.emailInput} ${
                    errors.email ? styles.helperEmail : null
                  }`}
                  variant='outlined'
                  fullWidth
                  error={!!errors.email || !!error}
                  onChange={(e) =>
                    handleChange(e) || (error && dispatch(resetState()))
                  }
                  helperText={
                    errors.email
                      ? errors.email
                      : error
                      ? RECOVERY_ERROR_MESSAGE[error]
                        ? RECOVERY_ERROR_MESSAGE[error][language].value
                        : RECOVERY_ERROR_MESSAGE.EMAIL_ERROR[language].value
                      : null
                  }
                />
                <p className={styles.recoveryText}>
                  {RECOVERY_MESSAGES[language].p}
                </p>
                <Button
                  className={styles.recoverBtn}
                  fullWidth
                  type='submit'
                  onClick={() => setShouldValidate(true)}
                >
                  {RECOVERY_MESSAGES[language].button}
                </Button>
              </Form>
            )}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Recovery;
