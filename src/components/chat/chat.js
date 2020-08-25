import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import CancelIcon from '@material-ui/icons/Cancel';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useSelector } from 'react-redux';
import { ActiveMessenger } from './activeMessenger';
import { useStyles } from './chat.style';
import { CHAT } from '../../translations/chat.translation';
import kyivstar from '../../images/kyivstar.png';
import vodafone from '../../images/vodafone.png';

export const Chat = () => {
  const [visible, setBlock] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const { language, themeMode } = useSelector((state) => ({
    language: state.Language.language,
    themeMode: state.Theme.lightMode
  }));
  const style = useStyles({ themeMode, visible, mailFormVisible });

  return (
    <div>
      {visible && (
        <div className={style.iconsMessengers}>
          <div>
            <MessengerCustomerChat
              pageId={process.env.FACEBOOK_PAGE_ID}
              appId={process.env.FACEBOOK_APP_ID}
            />
          </div>

          <div
            className={mailFormVisible ? style.msgIconActive : style.msgIcon}
          >
            <MailOutlineIcon
              className={style.icon}
              onClick={() => setMailFormVisible(!mailFormVisible)}
            />
          </div>
          {mailFormVisible && (
            <div className={style.mailForm}>
              <div
                className={style.cancelIcon}
                onClick={() => {
                  setBlock(!visible);
                  setMailFormVisible(false);
                }}
              >
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
              <ActiveMessenger
                visible
                mailFormVisible
                themeMode={themeMode}
                language={language}
              />
            </div>
          )}
        </div>
      )}
      <div onClick={() => setBlock(!visible)} className={style.chatIcon}>
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};
