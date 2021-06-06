import React, { useState, useEffect } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';

import { formRegExp, CHAT_USER_DATA } from '../../../configs';
import { CHAT } from '../../../translations/chat.translation';
import { useStyles } from '../chat.style';
import { sendEmail } from '../../../redux/chat/chat.actions';
import { handleHelperText } from '../../../utils/handle-active-massenger';

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
  let { firstName, email, message } = user;

  const { userData } = useSelector((state) => state.User);
  if (userData) {
    firstName = userData.firstName;
    email = userData.email;
  }

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

  const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

  useEffect(() => {
    // VALID FIELDS
    if (firstNameValidated && emailValidated && messageValidated) {
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
          key={CHAT[language].email}
          label={CHAT[language].email}
          variant='outlined'
          name='email'
          size='small'
          multiline
          error={!emailValidated && shouldValidate}
          helperText={handleHelperText(emailValidated, shouldValidate, language, 'email')}
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
          error={!messageValidated && shouldValidate}
          helperText={handleHelperText(messageValidated, shouldValidate, language, 'message')}
          className={style.dataInput}
          onChange={(e) => handleChange(e, setMessageValidated, formRegExp.text)}
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
