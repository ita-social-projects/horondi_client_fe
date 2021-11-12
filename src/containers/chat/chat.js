import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { config } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { useQuery } from '@apollo/client';
import { getContactsForChat } from './operations/chat-contacts.query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useStyles } from './chat.style';
import MailForm from './mail-form';
import { CHAT_FACEBOOK_DATA } from '../../configs/index';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);

  const style = useStyles({ iconsVisible, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  const { loading, error, data } = useQuery(getContactsForChat);
  if (loading || error) return errorOrLoadingHandler(error, loading);
  const contacts = data.getContacts.items;

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
