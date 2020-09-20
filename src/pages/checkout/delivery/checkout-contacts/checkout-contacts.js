import { useSelector } from 'react-redux';
import React from 'react';

import { useStyles } from '../../checkout.styles';
import { CONTACTS_PAGE_TITLES } from '../../../../translations/contacts.translations';

export const CheckoutContacts = ({ departmentSelfPickUp }) => {
  const style = useStyles();
  const { language, contacts } = useSelector(({ Language, Contacts }) => ({
    language: Language.language,
    contacts: Contacts.contacts
  }));

  const contactsDisplay = contacts.map(
    (contact) =>
      contact.address[language].value === departmentSelfPickUp && (
        <div key={contact._id} className={style.content}>
          <div>
            <div className={style.contactsItem}>
              <span className={style.contactName}>
                {CONTACTS_PAGE_TITLES[language].phone}
              </span>
              <span>+{contact.phoneNumber}</span>
            </div>
            <div className={style.contactsItem}>
              <span className={style.contactName}>
                {CONTACTS_PAGE_TITLES[language].address}
              </span>
              <div className={style.contactAddress}>
                {contact.address[language].value}
              </div>
            </div>
            <div className={style.contactsItem}>
              <span className={style.contactName}>Email:</span>
              <span>{contact.email}</span>
            </div>
          </div>
          <div className={style.contacts}>
            <div className={style.contactsItem}>
              <span className={style.contactName}>
                {CONTACTS_PAGE_TITLES[language].schedule}
              </span>
              <div className={style.schedule}>
                {contact.openHours[language].value.split('|').map((el) => (
                  <div key={el}>
                    <span className={style.day}>{el.substr(0, 4)}</span>
                    <span>{el.substring(4)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
  );

  return <div>{contactsDisplay}</div>;
};
