import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './new-password.styles';
import { formRegExp } from '../../configs';
import {
  errorMessages,
  CHANGE_PASSWORD,
  NEW_PASSWORD_ERROR,
  NEW_PASSWORD_SUCCESS_MESSAGE
} from '../../translations/user.translations';
import { endAdornment } from '../../utils/eyeToggle';
import Loader from '../../components/loader';
import { resetPassword, checkIfTokenValid, resetState } from '../../redux/user/user.actions';

const NewPassword = ({ token }) => {
  const styles = useStyles();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const dispatch = useDispatch();

  const { language, passwordReset, userError, loading } = useSelector(({ Language, User }) => ({
    language: Language.language,
    passwordReset: User.passwordReset,
    loading: User.userLoading,
    userError: User.error
  }));

  useEffect(() => {
    dispatch(resetState());
    dispatch(checkIfTokenValid({ token }));
  }, [dispatch, token]);

  const handleRecovery = async ({ password }) => {
    dispatch(resetPassword({ password, token }));
  };

  const successWindow = (
    <div>
      <h2 className={styles.heading}>{NEW_PASSWORD_SUCCESS_MESSAGE[language].h2}</h2>
      <p className={styles.recoveryText}>{NEW_PASSWORD_SUCCESS_MESSAGE[language].p}</p>
    </div>
  );

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(formRegExp.password, errorMessages[language].value.pass)
      .required(errorMessages[language].value.pass),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], errorMessages[language].value.confirmPassword)
      .when('password', {
        is: (val) => {
          if (val) return val;
        },
        then: Yup.string().required(errorMessages[language].value.confirmPassword)
      })
  });

  return (
    <Formik
      onSubmit={handleRecovery}
      initialValues={{ password: '', confirmPassword: '' }}
      validateOnBlur={shouldValidate}
      validateOnChange={shouldValidate}
      validationSchema={validationSchema}
    >
      {({ errors }) => (
        <div className={styles.newPassBackground}>
          <div className={styles.newPassForm}>
            {passwordReset ? (
              successWindow
            ) : loading ? (
              <Loader />
            ) : (
              <Form className='newPasswordForm'>
                <h2 className={styles.heading}>{CHANGE_PASSWORD[language].h2}</h2>
                <Field
                  name='password'
                  as={TextField}
                  type='text'
                  label={CHANGE_PASSWORD[language].pass_label}
                  className={styles.passwordInput}
                  variant='outlined'
                  fullWidth
                  InputProps={endAdornment(showPassword, setShowPassword)}
                  error={!!errors.password}
                  helperText={errors.password || ''}
                />
                <Field
                  name='confirmPassword'
                  as={TextField}
                  type='text'
                  label={CHANGE_PASSWORD[language].confirm_label}
                  className={styles.passwordInput}
                  variant='outlined'
                  fullWidth
                  InputProps={endAdornment(showConfirmPassword, setShowConfirmPassword)}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword || ''}
                />
                <Button
                  className={styles.changeBtn}
                  fullWidth
                  type='submit'
                  onClick={() => {
                    setShouldValidate(true);
                  }}
                >
                  {CHANGE_PASSWORD[language].button}
                </Button>
                {userError ? (
                  <p className={styles.serverError}>
                    {NEW_PASSWORD_ERROR[userError]
                      ? NEW_PASSWORD_ERROR[userError][language].value
                      : NEW_PASSWORD_ERROR.DEFAULT_ERROR[language].value}
                  </p>
                ) : null}
              </Form>
            )}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default NewPassword;
