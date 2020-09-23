import { useSelector } from 'react-redux';
import React from 'react';

import { CONTACTS_PAGE_TITLES } from '../../../../translations/contacts.translations';
import { useStyles } from '../../checkout.styles';

export const CheckoutContacts = ({ departmentSelfPickUp }) => {
  const style = useStyles();
  const { language, contacts } = useSelector(({ Language, Contacts }) => ({
    language: Language.language,
    contacts: Contacts.contacts
  }));

  const contactsDisplay = contacts.map(
    (contact) =>
      contact.address[language].value === departmentSelfPickUp && (
        <div key={contact._id} className={style.checkoutContactsWrapper}>
          <div>
            <div className={style.checkoutContactsItem}>
              <span className={style.checkoutContactsName}>
                {CONTACTS_PAGE_TITLES[language].phone}
              </span>
              <span>+{contact.phoneNumber}</span>
            </div>
            <div className={style.checkoutContactsItem}>
              <span className={style.checkoutContactsName}>
                {CONTACTS_PAGE_TITLES[language].address}
              </span>
              <div className={style.checkoutContactsAddress}>
                {contact.address[language].value}
              </div>
            </div>
            <div className={style.checkoutContactsItem}>
              <span className={style.checkoutContactsName}>Email:</span>
              <span>{contact.email}</span>
            </div>
          </div>
          <div className={style.checkoutContacts}>
            <div className={style.checkoutContactsItem}>
              <span className={style.checkoutContactsName}>
                {CONTACTS_PAGE_TITLES[language].schedule}
              </span>
              <div className={style.checkoutContactsSchedule}>
                {contact.openHours[language].value.split('|').map((el) => (
                  <div key={el}>
                    <span className={style.day}>{el}</span>
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
