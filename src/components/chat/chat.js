import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { useStyles } from './chat.style';
import { CHAT } from '../../translations/chat.translation';
import kyivstar from '../../images/kyivstar.png';
import vodafone from '../../images/vodafone.png';

export const Chat = () => {
  const style = useStyles();
  const [visible, setBlock] = useState(true);
  const [mailVisible, setMailVisible] = useState(true);
  const [facebookVisible, setFacebookVisible] = useState(true);
  const language = useSelector((state) => state.Language.language);

  const activeMessenger = () => {
    if (facebookVisible && mailVisible) {
      return (
        <div className={style.formField}>
          <span>{CHAT[language].simpleChoice}.</span>
        </div>
      );
    }
    if (facebookVisible) {
      return (
        <div className={style.formFieldActive}>
          <Button className={style.btnSend}>
            <a
              href='https://www.facebook.com/Horondi'
              rel='noopener noreferrer'
              target='_blank'
            >
              Facebook
            </a>
          </Button>
        </div>
      );
    }
    return (
      <div className={style.formFieldActive}>
        <span className={style.mailTitle}>{CHAT[language].sendMail}.</span>
        <TextField
          className={style.dataInput}
          id='outlined-basic'
          label={CHAT[language].name}
          variant='outlined'
        />
        <TextField
          className={style.dataInput}
          id='outlined-basic'
          label={CHAT[language].email}
          variant='outlined'
        />
        <TextField
          className={style.dataInput}
          id='outlined-basic'
          label={CHAT[language].msgText}
          variant='outlined'
        />
        <Button className={style.btnSend}>{CHAT[language].sendBtn}</Button>
      </div>
    );
  };

  return (
    <div>
      <div className={visible ? style.chatForm : style.disable}>
        <div className={style.contacts}>
          <span className={style.contactsTitle}>
            {CHAT[language].ourContacts}
          </span>
          <span>
            <img className={style.logo} src={kyivstar} alt='kyivstar' />{' '}
            +38-067-777-55-33
          </span>
          <span>
            <img className={style.logo} src={vodafone} alt='vodafone' />{' '}
            +38-050-999-77-66
          </span>
        </div>

        <div className={style.tabs}>
          <div
            className={
              facebookVisible ? style.facebookActive : style.facebookDisactive
            }
            onClick={() => {
              setFacebookVisible(true);
              setMailVisible(false);
            }}
          >
            <FacebookIcon style={{ fontSize: 40 }} />
          </div>

          <div
            className={mailVisible ? style.gmailActive : style.gmailDisactive}
            onClick={() => {
              setMailVisible(true);
              setFacebookVisible(false);
            }}
          >
            <MailOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        {activeMessenger()}
      </div>

      <div onClick={() => setBlock(!visible)} className={style.chatIcon}>
        <ForumIcon color='warning' style={{ fontSize: 80 }} />
      </div>
    </div>
  );
};
