import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import { get } from 'lodash';
import { CHAT_USER_DATA } from '../../../configs/index';
import { formRegExp } from '../../../configs/regexp';
import { useStyles } from '../chat.style';
import { handleHelperText } from '../../../utils/handle-active-massenger';
import { sendEmailMutation } from '../operations/chat.mutations';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

export const ActiveMessenger = ({ iconsVisible, mailFormVisible }) => {
  const style = useStyles({ iconsVisible, mailFormVisible });
  const { t, i18n } = useTranslation();

  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));
  const defaultFirstName = get(userData, 'firstName', '');
  const defaultEmail = get(userData, 'email', '');
  const language = i18n.language === 'ua' ? 0 : 1;

  const [user, setUser] = useState({
    ...CHAT_USER_DATA,
    firstName: defaultFirstName,
    email: defaultEmail
  });
  const { firstName, email, message } = user;

  const [firstNameValidated, setFirstNameValidated] = useState(!!defaultFirstName);
  const [emailValidated, setEmailValidated] = useState(!!defaultEmail);
  const [messageValidated, setMessageValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [open, setOpen] = useState(false);
  const [sendEmail, { loading, error }] = useMutation(sendEmailMutation);

  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    const inputName = event.target.name;
    setUser({ ...user, [inputName]: input });
    input.match(regExp) ? setValid(true) : setValid(false);
  };

  const handleValidForms = () => {
    setShouldValidate(true);
    allFieldsValidated && sendHandler();
  };

  const handleClick = () => {
    setOpen(true);
    setUser(CHAT_USER_DATA);
  };

  const sendHandler = () => {
    setAllFieldsValidated(false);
    sendEmail({
      variables: {
        email,
        senderName: firstName,
        text: message,
        language
      }
    });
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

  useEffect(() => {
    if (firstNameValidated && emailValidated && messageValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated, messageValidated]);

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <form className={style.contactForm}>
      <span className={style.mailTitle}>{t('chat.sendMail')}</span>
      <>
        <TextField
          required
          fullWidth
          key={t('common.name')}
          label={t('common.name')}
          variant='outlined'
          name='firstName'
          size='small'
          rows={1}
          error={!firstNameValidated && shouldValidate}
          helperText={handleHelperText(firstNameValidated, shouldValidate, 'firstName')}
          className={style.dataInput}
          onChange={(e) => handleChange(e, setFirstNameValidated, formRegExp.text)}
          value={firstName}
          type='text'
        />
        <TextField
          required
          fullWidth
          key={t('common.email')}
          label={t('common.email')}
          variant='outlined'
          name='email'
          size='small'
          rows={1}
          error={!emailValidated && shouldValidate}
          helperText={handleHelperText(emailValidated, shouldValidate, 'email')}
          className={style.dataInput}
          onChange={(e) => handleChange(e, setEmailValidated, formRegExp.email)}
          value={email}
          type='text'
        />
        <TextField
          fullWidth
          key={t('chat.msgText')}
          label={t('chat.msgText')}
          variant='outlined'
          name='message'
          multiline
          rows={10}
          inputProps={{ maxLength: 500 }}
          error={!messageValidated && shouldValidate}
          helperText={handleHelperText(messageValidated, shouldValidate, 'message')}
          className={style.dataInput}
          onChange={(e) => handleChange(e, setMessageValidated, formRegExp.text)}
          value={message}
          type='text'
          required
        />
      </>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          {t('chat.thanksMsg')}
        </Alert>
      </Snackbar>
      <Button className={style.btnSend} onClick={handleValidForms}>
        {t('buttons.sendBtn')}
      </Button>
    </form>
  );
};
