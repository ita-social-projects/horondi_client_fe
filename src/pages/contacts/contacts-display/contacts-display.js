import { Card, Tooltip } from '@material-ui/core';
import parse from 'html-react-parser';
import React from 'react';
import { CONTACTS_PAGE_TITLES } from '../../../translations/contacts.translations';
import mapImg from '../../../images/map-medium.png';

const contactsDisplay = contacts.map((contact) => (
  <div key={contact._id} className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.mapContainer}>
        <Tooltip title={CONTACTS_PAGE_TITLES[language].showOnGoogleMaps}>
          <Card>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={contact.link}
              className={styles.link}
            >
              <img
                className={styles.mapImage}
                src={contact.images[language].value.medium || mapImg}
                alt={CONTACTS_PAGE_TITLES[language].location}
              />
            </a>
          </Card>
        </Tooltip>
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
            {contact.openHours[language].value.split('|').map((el) => (
              <div key={el}>
                <span className={styles.day}>{el.substr(0, 4)}</span>
                <span>{el.substring(4)}</span>
              </div>
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
