import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import FacebookIcon from '@material-ui/icons/Facebook';
import CancelIcon from '@material-ui/icons/Cancel';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { useStyles } from './chat.style';
import { CHAT } from '../../translations/chat.translation';
import kyivstar from '../../images/kyivstar.png';
import vodafone from '../../images/vodafone.png';

export const Chat = () => {
  const [visible, setBlock] = useState(false);
  const [mailVisible, setMailVisible] = useState(true);
  const [facebookVisible, setFacebookVisible] = useState(true);
  const { language, themeMode } = useSelector((state) => ({
    language: state.Language.language,
    themeMode: state.Theme.lightMode
  }));
  const style = useStyles({ themeMode, visible });

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
      </div>
    );
  };

  return (
    <div>
      <div className={visible ? style.chatForm : style.disable}>
        <div className={style.cancelIcon} onClick={() => setBlock(!visible)}>
          <CancelIcon />
        </div>
        <div className={style.contacts}>
          <span className={style.contactsTitle}>
            {CHAT[language].ourContacts}
          </span>
          <span className={style.phoneNumbers}>
            <img className={style.logo} src={kyivstar} alt='kyivstar' />{' '}
            +38-(067)-777-55-33
          </span>
          <span className={style.phoneNumbers}>
            <img className={style.logo} src={vodafone} alt='vodafone' />
            {'  '}
            +38-(050)-999-77-66
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
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};
