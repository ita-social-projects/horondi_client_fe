import React, { useState, useEffect } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import { MessengerChat, showMessenger, hideMessenger } from 'react-messenger-chat-plugin';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { useQuery } from '@apollo/client';
import { getContactsForChat } from './operations/chat-contacts.query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useStyles } from './chat.style';
import MailForm from './mail-form';
import { CHAT_FACEBOOK_DATA } from './constants';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const [сhutButtonDisabled, setChutButtonDisabled] = useState(true);
  const style = useStyles({ iconsVisible, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  useEffect(() => {
    const interval = setInterval(() => {
      // const root = document.getElementById('fb-root');
      if (window.FB?.CustomerChat) {
        window.FB.CustomerChat.hide();
      }
      // if (FB.CustomerChat) {
      //   console.log('1 setTimeout');
      //   document.getElementById('fb-root').style.visibility = 'hidden';
      // }
    }, 1000);

    setTimeout(() => {
      setChutButtonDisabled(false);
      // document.getElementById('fb-root').style.visibility = 'visible';
      // console.log(document.getElementById('fb-root')?.style?.visibility);
      // console.log('2 setTimeout');
      clearInterval(interval);
    }, 10000);
  }, []);

  const { loading, error, data } = useQuery(getContactsForChat);
  if (loading || error) return errorOrLoadingHandler(error, loading);
  const contacts = data.getContacts.items;

  const chatButtonHendler = () => {
    setMailFormVisible(false);
    setIconsVisible(!iconsVisible);
    if (window.FB) {
      iconsVisible ? window.FB.CustomerChat.hide() : window.FB.CustomerChat.show(false);
    }
    // iconsVisible ? hideMessenger() : showMessenger(false);
  };

  return (
    <>
      <div className={style.fbChatWrapper}>
        {/* <MessengerChat
            pageId={CHAT_FACEBOOK_DATA.pageId}
            // appId={CHAT_FACEBOOK_DATA.appId}
            onClick={() => setMailFormVisible(false)}
            height={190}
            onMessengerLoad={() => {
              setChutButtonDisabled(false);
              hideMessenger();
            }}
          /> */}
        <MessengerCustomerChat
          pageId={CHAT_FACEBOOK_DATA.pageId}
          appId={CHAT_FACEBOOK_DATA.appId}
          onClick={() => setMailFormVisible(false)}
        />
      </div>
      {iconsVisible && (
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
                    cancelIconHandler={cancelIconHandler}
                    iconsVisible={iconsVisible}
                    mailFormVisible={mailFormVisible}
                  />
                </div>
              ))
            }
          </Transition>
        </div>
      )}
      <button onClick={chatButtonHendler} className={style.chatIcon} disabled={сhutButtonDisabled}>
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </button>
    </>
  );
};
