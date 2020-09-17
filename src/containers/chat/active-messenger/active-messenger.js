import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { formRegExp, CHAT_USER_DATA } from '../../../configs';
import { CHAT, errorMessages } from '../../../translations/chat.translation';
import { useStyles } from '../chat.style';
import { sendEmail } from '../../../redux/chat/chat.actions';

export const ActiveMessenger = ({ themeMode, visible, mailFormVisible }) => {
  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [messageValidated, setMessageValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [isSend, setIsSend] = useState(false);

  // USER VALUES
  const [user, setUser] = useState(CHAT_USER_DATA);
  const { firstName, email, message } = user;
  const dispatch = useDispatch();

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

  const sendHandler = () => {
    dispatch(
      sendEmail({
        email,
        senderName: firstName,
        text: message
      })
    );
    setIsSend(true);
  };

  // HOOKS
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  useEffect(() => {
    // VALID FIELDS
    if (firstNameValidated && emailValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated]);

  // STYLES
  const style = useStyles({ visible, mailFormVisible, themeMode });

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages[language].value.firstName,
      value: firstName,
      label: CHAT[language].name,
      onChange: handleChange,
      rows: 1,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    email: {
      inputName: 'email',
      errorMessage: errorMessages[language].value.email,
      value: email,
      label: CHAT[language].email,
      onChange: handleChange,
      rows: 1,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: 'text',
      regExp: formRegExp.email
    },
    messageField: {
      inputName: 'message',
      errorMessage: errorMessages[language].value.message,
      value: message,
      label: CHAT[language].msgText,
      onChange: handleChange,
      rows: 3,
      validation: {
        value: messageValidated,
        setValid: setMessageValidated
      },
      type: 'text',
      regExp: formRegExp.text
    }
  };

  return (
    <div className={style.activeMsgWrapper}>
      {
        !isSend ? (
          <div className={style.formField}>
            <div className={style.thankForMsgWrapper}>
              <div className={style.thankForMsg}>
                <span>{CHAT[language].thanksMsg}</span>
              </div>
              <Button className={style.btnSend}>
                {CHAT[language].continue}
              </Button>
            </div>
          </div>
        ) : (
          <div>ololo!</div>
        )
        // (<form className={style.formField}>
        //   <span className={style.mailTitle}>{CHAT[language].sendMail}.</span>
        //   {Object.values(userFields).map(
        //     ({
        //       label,
        //       size = 'small',
        //       multiline = true,
        //       rows,
        //       inputName,
        //       errorMessage,
        //       value,
        //       onChange,
        //       validation,
        //       type,
        //       regExp = null
        //     }) => (
        //       <TextField
        //         required
        //         fullWidth
        //         key={label}
        //         label={label}
        //         variant='outlined'
        //         name={inputName}
        //         size={size}
        //         multiline={multiline}
        //         rows={rows}
        //         error={!validation.value && shouldValidate}
        //         helperText={
        //           !validation.value && shouldValidate ? `${errorMessage}` : ''
        //         }
        //         className={style.dataInput}
        //         onChange={(e) => onChange(e, validation.setValid, regExp)}
        //         value={value}
        //         type={type}
        //       />
        //     )
        //   )
        //   }
        //   <Button className={style.btnSend} onClick={handleValidForms()}>
        //     {CHAT[language].sendBtn}
        //   </Button>
        // </form>)
      }
    </div>
  );
};
