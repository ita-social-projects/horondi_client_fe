import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import { CHAT } from '../../../translations/chat.translation';
import ActiveMessenger from '../active-messenger';
import { useStyles } from '../chat.style';

export const MailForm = ({ themeMode, language, contacts }) => {
  const style = useStyles({ themeMode });

  return (
    <div className={style.mailForm}>
      <div className={style.cancelIcon}>
        <CancelIcon />
      </div>
      <div className={style.contacts}>
        <span className={style.contactsTitle}>
          {CHAT[language].ourContacts}
        </span>
        {contacts.map((contact) => (
          <span className={style.phoneNumbers} key={contact.phoneNumber}>
            +{contact.phoneNumber}
          </span>
        ))}
      </div>
      <ActiveMessenger
        visible
        mailFormVisible
        themeMode={themeMode}
        language={language}
      />
    </div>
  );
};
