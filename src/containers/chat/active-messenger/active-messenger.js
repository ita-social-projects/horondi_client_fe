import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import { get } from 'lodash';

import { formRegExp, CHAT_USER_DATA } from '../../../configs';
import { useStyles } from '../chat.style';
import { sendEmail } from '../../../redux/chat/chat.actions';
import { handleHelperText } from '../../../utils/handle-active-massenger';

export const ActiveMessenger = ({ themeMode, visible, mailFormVisible }) => {
  const dispatch = useDispatch();
  const style = useStyles({ visible, mailFormVisible, themeMode });
  const { t } = useTranslation();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));
  const defaultFirstName = get(userData, 'firstName', '');
  const defaultEmail = get(userData, 'email', '');

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
    dispatch(
      sendEmail({
        email,
        senderName: firstName,
        text: message,
        language
      })
    );
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
    // VALID FIELDS
    if (firstNameValidated && emailValidated && messageValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated, messageValidated]);

  return (
    <form className={style.formField}>
      <span className={style.mailTitle}>{t('chat.sendMail')}.</span>
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
          helperText={handleHelperText(firstNameValidated, shouldValidate, language, 'firstName')}
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
          helperText={handleHelperText(emailValidated, shouldValidate, language, 'email')}
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
          size='small'
          multiline
          rowsMax={4}
          inputProps={{ maxLength: 500 }}
          error={!messageValidated && shouldValidate}
          helperText={handleHelperText(messageValidated, shouldValidate, language, 'message')}
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
