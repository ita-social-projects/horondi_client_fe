import React from 'react';
import { useTranslation } from 'react-i18next';
import CancelIcon from '@material-ui/icons/Cancel';
import ActiveMessenger from '../active-messenger';
import { useStyles } from '../chat.style';
import email from '../../../images/footer-icons/phone.svg';
import phone from '../../../images/footer-icons/email.svg';

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
          <div key={contact._id}>
            <div className={style.phoneNumbers}>
              <img className={style.icon} src={phone} alt='phone' />
              <span>{contact.phoneNumber}</span>
            </div>
            <div className={style.phoneNumbers}>
              <img className={style.icon} src={email} alt='email' />
              <span>{contact.email}</span>
            </div>
          </div>
        ))}
      </div>
      <ActiveMessenger iconsVisible={iconsVisible} mailFormVisible={mailFormVisible} />
    </div>
  );
};
