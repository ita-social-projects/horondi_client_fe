import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useSelector } from 'react-redux';
import { config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { useStyles } from './chat.style';
import MailForm from './mail-form';
import { CHAT_FACEBOOK_DATA } from '../../configs/index';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const { language, themeMode, contacts } = useSelector((state) => ({
    language: state.Language.language,
    themeMode: state.Theme.lightMode,
    contacts: state.Contacts.contacts
  }));

  const style = useStyles({ themeMode, iconsVisible, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  return (
    <div>
      {iconsVisible && (
        <div className={style.iconsMessengers}>
          <div>
            <MessengerCustomerChat
              pageId={CHAT_FACEBOOK_DATA.pageId}
              appId={CHAT_FACEBOOK_DATA.appId}
              onClick={() => setMailFormVisible(false)}
            />
          </div>

          <div
            className={mailFormVisible ? style.msgIconActive : style.msgIcon}
            onClick={() => setMailFormVisible(!mailFormVisible)}
          >
            <MailOutlineIcon className={style.icon} />
          </div>
          <Transition
            initial={null}
            items={mailFormVisible}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 0 }}
            leave={{ opacity: 0, height: 0 }}
            config={config.gentle}
          >
            {(item) =>
              item &&
              ((styles) => (
                <div style={styles}>
                  <MailForm
                    contacts={contacts}
                    themeMode={themeMode}
                    language={language}
                    cancelIconHandler={cancelIconHandler}
                  />
                </div>
              ))
            }
          </Transition>
        </div>
      )}
      <div
        onClick={() => {
          setMailFormVisible(false);
          setIconsVisible(!iconsVisible);
        }}
        className={style.chatIcon}
      >
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};
