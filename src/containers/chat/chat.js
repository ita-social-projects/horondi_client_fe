import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Transition, config } from 'react-spring';
import { useQuery } from '@apollo/client';
import { getContactsForChat } from './operations/chat-contacts.query';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useStyles } from './chat.style';
import MailForm from './mail-form';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const style = useStyles({ iconsVisible, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  const { loading, error, data } = useQuery(getContactsForChat);
  if (loading || error) return errorOrLoadingHandler(error, loading);
  const contacts = data.getContacts.items;
  const showIcon = () => {
    const fbChatIcon = document.getElementById('fb-root')?.style.visibility;
    if (fbChatIcon === 'visible') {
      document.getElementById('fb-root').style.visibility = 'hidden';
    } else if (fbChatIcon === '' || fbChatIcon === 'hidden') {
      document.getElementById('fb-root').style.visibility = 'visible';
    }
  };
  const chatButtonHandler = () => {
    setMailFormVisible(false);
    setIconsVisible(!iconsVisible);
    showIcon();
  };

  return (
    <>
      {iconsVisible && (
        <div className={style.iconsMessengers}>
          <div
            className={mailFormVisible ? style.msgIconActive : style.msgIcon}
            onClick={() => setMailFormVisible(!mailFormVisible)}
            data-testid='messengerBtn'
          >
            <MailOutlineIcon data-testid='mailIconBtn' className={style.icon} />
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
      <button data-testid='chatBtn' onClick={chatButtonHandler} className={style.chatIcon}>
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </button>
    </>
  );
};
