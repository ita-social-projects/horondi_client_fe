import React from 'react';
import { useTranslation } from 'react-i18next';
import CancelIcon from '@material-ui/icons/Cancel';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import ActiveMessenger from '../active-messenger';
import { useStyles } from '../chat.style';
import { formatPhoneNumber } from '../../../utils/format-phone-number';

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
              <PhoneIphoneOutlinedIcon className={style.iconContact} />
              <span>{formatPhoneNumber(contact.phoneNumber)}</span>
            </div>
            <div className={style.phoneNumbers}>
              <EmailOutlined className={style.iconContact} />
              <span>{contact.email}</span>
            </div>
          </div>
        ))}
      </div>
      <ActiveMessenger iconsVisible={iconsVisible} mailFormVisible={mailFormVisible} />
    </div>
  );
};
