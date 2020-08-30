import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import CancelIcon from '@material-ui/icons/Cancel';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useSelector } from 'react-redux';
import { FOOTER_CONTACTS } from '../../translations/footer.translations';
import ActiveMessenger from './active-messenger';
import { useStyles } from './chat.style';
import { CHAT } from '../../translations/chat.translation';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const { language, themeMode } = useSelector((state) => ({
    language: state.Language.language,
    themeMode: state.Theme.lightMode
  }));
  const { item: PHONE_NUMBER } = FOOTER_CONTACTS[language].items[0];
  const style = useStyles({ themeMode, iconsVisible, mailFormVisible });

  return (
    <div>
      {iconsVisible && (
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
                  setIconsVisible(!iconsVisible);
                  setMailFormVisible(false);
                }}
              >
                <CancelIcon />
              </div>
              <div className={style.contacts}>
                <span className={style.contactsTitle}>
                  {CHAT[language].ourContacts}
                </span>
                <span className={style.phoneNumbers}>{PHONE_NUMBER}</span>
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
      <div
        onClick={() => setIconsVisible(!iconsVisible)}
        className={style.chatIcon}
      >
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};
