import React, { useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useSelector } from 'react-redux';
import { config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { useStyles } from './chat.style';
import MailForm from './mail-form';
import { CHAT_FACEBOOK_DATA } from '../../configs/index';

export const Chat = () => {
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const { language, themeMode, contacts } = useSelector((state) => ({
    language: state.Language.language,
    themeMode: state.Theme.lightMode,
    contacts: state.Contacts.contacts
  }));

  const style = useStyles({ themeMode, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  return (
    <>
      <MessengerCustomerChat
        pageId={CHAT_FACEBOOK_DATA.pageId}
        appId={CHAT_FACEBOOK_DATA.appId}
      />
      <div className={style.iconsMessengers}>
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
    </>
  );
};
