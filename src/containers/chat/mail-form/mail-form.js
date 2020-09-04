import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import { CHAT } from '../../../translations/chat.translation';
import ActiveMessenger from '../active-messenger';
import { useStyles } from '../chat.style';

export const MailForm = ({
  themeMode,
  iconsVisible,
  setIconsVisible,
  setMailFormVisible,
  language,
  contacts
}) => {
  const style = useStyles({ themeMode });

  return (
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
        <span className={style.phoneNumbers}>+{contacts[0].phoneNumber}</span>
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
