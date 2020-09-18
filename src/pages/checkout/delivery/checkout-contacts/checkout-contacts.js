import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'html-react-parser';
import ContactsPage from '../../../contacts';
import { useStyles } from '../../checkout.styles';
import { CONTACTS_PAGE_TITLES } from '../../../../translations/contacts.translations';
import mapImg from '../../../../images/map-medium.png';

export const CheckoutContacts = ({ departmentSelfPickUp }) => {
  const style = useStyles();
  const { language, contacts, loading } = useSelector(
    ({ Language, Checkout, Contacts }) => ({
      language: Language.language,
      contacts: Contacts.contacts,
      loading: Contacts.loading
    })
  );

  const [depart, setDepart] = useState('');

  const contactsDisplay = contacts.map(
    (contact) =>
      contact.phoneNumber === departmentSelfPickUp && (
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
                {parse(contact.address[language].value)}
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
