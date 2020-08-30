import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { CHAT } from '../../../translations/chat.translation';
import { useStyles } from '../chat.style';

export const ActiveMessenger = ({
  themeMode,
  visible,
  mailFormVisible,
  language
}) => {
  const style = useStyles({ themeMode, visible, mailFormVisible });

  return (
    <form className={style.formFieldActive}>
      <span className={style.mailTitle}>{CHAT[language].sendMail}.</span>
      <TextField
        className={style.dataInput}
        id='outlined-basic'
        label={CHAT[language].name}
        variant='outlined'
        size='small'
        multiline
        rows={1}
      />
      <TextField
        className={style.dataInput}
        id='outlined-basic'
        label={CHAT[language].email}
        variant='outlined'
        size='small'
        multiline
        rows={1}
      />
      <TextField
        className={style.dataInput}
        id='outlined-basic'
        label={CHAT[language].msgText}
        variant='outlined'
        size='small'
        multiline
        rows={4}
      />
      <Button className={style.btnSend}>{CHAT[language].sendBtn}</Button>
    </form>
  );
};
