import React, { useEffect } from 'react';
import parse from 'html-react-parser';

import { useSelector, useDispatch } from 'react-redux';

import { Backdrop } from '@material-ui/core';

import { useStyles } from './contacts.styles';
import LoadingBar from '../../components/loading-bar';
import { CONTACTS_PAGE_TITLES } from '../../translations/contacts.translations';
import { getContacts } from '../../redux/contacts/contacts.actions';
import mapImg from '../../images/map-medium.png';

const Contacts = () => {
  const { contacts, loading, language } = useSelector(
    ({ Language, Contacts }) => ({
      contacts: Contacts.contacts,
      loading: Contacts.loading,
      language: Language.language
    })
  );
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }

  return contacts.map((contact) => (
    <div key={contact._id} className={styles.wrapper}>
      <h2 className={styles.contactsTitle}>
        {CONTACTS_PAGE_TITLES[language].title}
      </h2>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <a target='_blank' rel='noopener noreferrer' href={contact.link}>
            <img
              className={styles.mapImage}
              src={contact.images.medium || mapImg}
              alt={CONTACTS_PAGE_TITLES[language].location}
            />
          </a>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>
              {CONTACTS_PAGE_TITLES[language].phone}
            </span>
            <span>+{contact.phoneNumber}</span>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>
              {CONTACTS_PAGE_TITLES[language].schedule}
            </span>
            <div className={styles.schedule}>
              {contact.openHours[language].value.split('|').map((el, i) => (
                <span key={i}>{el}</span>
              ))}
            </div>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>
              {CONTACTS_PAGE_TITLES[language].address}
            </span>
            <div className={styles.contactAddress}>
              {parse(contact.address[language].value)}
            </div>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>Email:</span>
            <span>{contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Contacts;
