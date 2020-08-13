import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import { useStyles } from './chat.style';
import kyivstar from '../../images/kyivstar.png';
import lifecell from '../../images/lifecell.png';
import vodafone from '../../images/vodafone.png';

export const Chat = () => {
  const style = useStyles();
  const [visible, setBlock] = useState(false);
  const [mailVisible, setMailVisible] = useState(false);
  const [facebookVisible, setFacebookVisible] = useState(false);

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
        </div>
        \
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
        <div className={style}>
          <span>Виберіть зручний спосіб для контакту</span>
        </div>
      </div>

      <div onClick={() => setBlock(!visible)} className={style.chatIcon}>
        <ForumIcon color='warning' style={{ fontSize: 80 }} />
      </div>
    </div>
  );
};
