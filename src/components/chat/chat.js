import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import { Button, TextField } from '@material-ui/core';
import { useStyles } from './chat.style';
import kyivstar from '../../images/kyivstar.png';
import vodafone from '../../images/vodafone.png';

export const Chat = () => {
  const style = useStyles();
  const [visible, setBlock] = useState(false);
  const [mailVisible, setMailVisible] = useState(false);
  const [facebookVisible, setFacebookVisible] = useState(false);
  // const language =

  const activeMessenger = () => {
    if (!facebookVisible && !mailVisible) {
      return (
        <div className={style.formField}>
          <span>Виберіть зручний спосіб для контакту</span>
        </div>
      );
    }
    if (facebookVisible) {
      return (
        <div className={style.formField}>
          <Button className={style.btnSend}>
            <a href='https://www.facebook.com/Horondi'>
              <span>Facebook</span>
            </a>
          </Button>
        </div>
      );
    }
    return (
      <div className={style.formField}>
        <span className={style.mailTitle}>Напишіть нам листа</span>
        <TextField
          className={style.dataInput}
          id='outlined-basic'
          label='Імя'
          variant='outlined'
        />
        <TextField
          className={style.dataInput}
          id='outlined-basic'
          label='Електронна пошта'
          variant='outlined'
        />
        <TextField
          className={style.dataInput}
          id='outlined-basic'
          label='Текст повідемлення'
          variant='outlined'
        />
        <Button className={style.btnSend}>Відправити</Button>
      </div>
    );
  };

  return (
    <div>
      <div className={visible ? style.chatForm : style.disable}>
        <div className={style.contacts}>
          <span className={style.contactsTitle}>Наші контакти:</span>
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
            facebook
          </div>

          <div
            className={mailVisible ? style.gmailActive : style.gmailDisactive}
            onClick={() => {
              setMailVisible(true);
              setFacebookVisible(false);
            }}
          >
            mail
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
