import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Tooltip } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useStyles } from './contacts.styles';
import { GOOGLE_MAP_URL } from '../../configs/index';
import { getContacts } from './operations/contacts.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import email from '../../images/footer-icons/email.svg';
import phone from '../../images/footer-icons/phone.svg';
import location from '../../images/footer-icons/location.svg';
import clock from '../../images/contacts-icons/clock.svg';

const Contacts = ({ fromCheckout }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [imageStatus, setImageStatus] = useState(true);
  const [imageVisibility, setImageVisibility] = useState(false);

  const { loading, error, data } = useQuery(getContacts, {});

  if (loading || error) return errorOrLoadingHandler(error, loading);

  const contacts = data.getContacts.items;

  const onLoadImageError = () => {
    setImageStatus(false);
  };

  const onImageLoad = () => {
    setImageVisibility(true);
  };

  const cardVisibilityStyles = imageStatus && imageVisibility;
  const contactsDisplay = contacts.map((contact) => (
    <div key={contact._id} className={styles.content}>
      <Tooltip title={t('contacts.pageTitles.showOnGoogleMaps')}>
        <Card className={!cardVisibilityStyles && styles.mapImageInactive}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`${GOOGLE_MAP_URL}${contact.link.lat},${contact.link.lon}`}
            className={styles.link}
          >
            <img
              className={styles.mapImage}
              onError={onLoadImageError}
              onLoad={onImageLoad}
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.d250de696729be2d1744cbfc919a178d&center=${contact.link.lat},${contact.link.lon}&size=500x400&zoom=16&markers=icon:small-black-cutout|${contact.link.lat},${contact.link.lon}`}
              alt={t('contacts.pageTitles.location')}
            />
          </a>
        </Card>
      </Tooltip>
      <div className={styles.contacts}>
        <div className={styles.contactsItem}>
          <img className={styles.icon} src={phone} alt='phone' />
          <span>{contact.phoneNumber}</span>
        </div>
        <div className={styles.contactsItem}>
          <img className={styles.icon} src={email} alt='email' />
          <span>{contact.email}</span>
        </div>
        <div className={styles.contactsItem}>
          <img className={styles.icon} src={location} alt='location' />
          <div>{t(`${contact.translationsKey}.address`)}</div>
        </div>
        <div className={styles.contactsItem}>
          <img className={styles.icon} src={clock} alt='clock' />
          <div className={styles.schedule}>
            {t(`${contact.translationsKey}.openHours`)
              .split('|')
              .map((el) => (
                <div key={el}>
                  <span className={styles.day}>{el}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      {!fromCheckout && <h2 className={styles.contactsTitle}>{t('contacts.pageTitles.title')}</h2>}
      {contactsDisplay}
    </div>
  );
};

export default Contacts;
