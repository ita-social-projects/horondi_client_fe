import React, { useState, useEffect } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';

import { formRegExp, CHAT_USER_DATA } from '../../../configs';
import { CHAT, errorMessages } from '../../../translations/chat.translation';
import { useStyles } from '../chat.style';
import { sendEmail } from '../../../redux/chat/chat.actions';

export const ActiveMessenger = ({ themeMode, visible, mailFormVisible }) => {
  const dispatch = useDispatch();
  const style = useStyles({ visible, mailFormVisible, themeMode });
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [messageValidated, setMessageValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [open, setOpen] = useState(false);

  // USER VALUES
  const [user, setUser] = useState(CHAT_USER_DATA);
  const { firstName, email, message } = user;

  // HANDLERS
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

  const Alert = (props) => (
    <MuiAlert elevation={6} variant='filled' {...props} />
  );

  useEffect(() => {
    // VALID FIELDS
    if (firstNameValidated && emailValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated]);

  return (
    <form className={style.formField}>
      <span className={style.mailTitle}>{CHAT[language].sendMail}.</span>
      <>
        <TextField
          required
          fullWidth
          key={CHAT[language].name}
          label={CHAT[language].name}
          variant='outlined'
          name='firstName'
          size='small'
          multiline
          rows={1}
          error={!firstNameValidated && shouldValidate}
          helperText={
            !firstNameValidated && shouldValidate
              ? `${errorMessages[language].value.firstName}`
              : ''
          }
          className={style.dataInput}
          onChange={(e) =>
            handleChange(e, setFirstNameValidated, formRegExp.text)
          }
          value={firstName}
          type='text'
        />
        <TextField
          required
          fullWidth
          key={CHAT[language].email}
          label={CHAT[language].email}
          variant='outlined'
          name='email'
          size='small'
          multiline
          rows={1}
          error={!emailValidated && shouldValidate}
          helperText={
            !emailValidated && shouldValidate
              ? `${errorMessages[language].value.email}`
              : ''
          }
          className={style.dataInput}
          onChange={(e) => handleChange(e, setEmailValidated, formRegExp.email)}
          value={email}
          type='text'
        />
        <TextField
          required
          fullWidth
          key={CHAT[language].msgText}
          label={CHAT[language].msgText}
          variant='outlined'
          name='message'
          size='small'
          multiline
          rows={3}
          error={!messageValidated && shouldValidate}
          helperText={
            !messageValidated && shouldValidate
              ? `${errorMessages[language].value.message}`
              : ''
          }
          className={style.dataInput}
          onChange={(e) =>
            handleChange(e, setMessageValidated, formRegExp.text)
          }
          value={message}
          type='text'
        />
      </>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          {CHAT[language].thanksMsg}
        </Alert>
      </Snackbar>
      <Button className={style.btnSend} onClick={handleValidForms}>
        {CHAT[language].sendBtn}
      </Button>
    </form>
  );
};
