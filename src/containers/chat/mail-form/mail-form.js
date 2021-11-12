import React from 'react';
import { useTranslation } from 'react-i18next';
import CancelIcon from '@material-ui/icons/Cancel';
import ActiveMessenger from '../active-messenger';
import { useStyles } from '../chat.style';

export const MailForm = ({ contacts, cancelIconHandler, iconsVisible, mailFormVisible }) => {
  const style = useStyles({ iconsVisible, mailFormVisible });
  const { t } = useTranslation();

  return (
    <div className={style.mailForm}>
      <div className={style.cancelIcon} onClick={cancelIconHandler}>
        <CancelIcon />
      </div>
      <div className={style.contacts}>
        <span className={style.contactsTitle}>{t('chat.ourContacts')}</span>
        {contacts.map((contact) => (
          <span className={style.phoneNumbers} key={contact.phoneNumber}>
            {contact.phoneNumber}
          </span>
        ))}
      </div>
      <ActiveMessenger iconsVisible={iconsVisible} mailFormVisible={mailFormVisible} />
    </div>
  );
};
