import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useSelector } from 'react-redux';
import { config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { useQuery } from '@apollo/client';
import { getContactsForChat } from './operations/chat-contacts.query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useStyles } from './chat.style';
import MailForm from './mail-form';
import { CHAT_FACEBOOK_DATA } from '../../configs/index';
import ThemeContext from '../../context/theme-context';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const { language } = useSelector((state) => ({
    language: state.Language.language
  }));

  const themeMode = useContext(ThemeContext);

  const style = useStyles({ themeMode, iconsVisible, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  const [contacts, setContacts] = useState([]);
  const { loading, error } = useQuery(getContactsForChat, {
    onCompleted: (data) => setContacts(data.getContacts.items)
  });
  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <>
      {iconsVisible && (
        <div className={style.iconsMessengers}>
          <MessengerCustomerChat
            pageId={CHAT_FACEBOOK_DATA.pageId}
            appId={CHAT_FACEBOOK_DATA.appId}
            onClick={() => setMailFormVisible(false)}
          />
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
    </>
  );
};
