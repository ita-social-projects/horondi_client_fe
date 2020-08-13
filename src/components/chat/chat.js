import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import { Button } from '@material-ui/core';
import { useStyles } from './chat.style';
import kyivstar from '../../images/kyivstar.png';
import lifecell from '../../images/lifecell.png';
import vodafone from '../../images/vodafone.png';
import gmail from '../../images/gmail.png';

export const Chat = () => {
  const style = useStyles();
  const [visible, setBlock] = useState(false);

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
            <img className={style.logo} src={lifecell} alt='lifecell' />{' '}
            +38-093-888-66-44
          </span>
          <span>
            <img className={style.logo} src={vodafone} alt='vodafone' />{' '}
            +38-050-999-77-66
          </span>
          <span>
            <img className={style.logo} src={gmail} alt='gmail' />{' '}
            horondi@gmail.com
          </span>
        </div>
        <div className={style.messengers}>
          <Button className={style.facebook}>
            <a href='https://www.facebook.com/Horondi'>Facebook</a>
          </Button>
          <Button>
            <a href='https://www.instagram.com/horondi/?hl=uk'>Instagram</a>
          </Button>
        </div>
      </div>
      <div onClick={() => setBlock(!visible)} className={style.chatIcon}>
        <ForumIcon color='warning' style={{ fontSize: 80 }} />
      </div>
    </div>
  );
};
