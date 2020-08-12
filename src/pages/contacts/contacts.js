import React from 'react';

import MapContainer from './map-container/map-container';
import { useStyles } from './contacts.styles';

const Contacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2>Контакти</h2>
      <div className={classes.content}>
        <MapContainer />
        <div className={classes.contacts}>
          <div className={classes.contactsItem}>
            <span>Телефон:</span>
            <span className={classes.contactsDetails} />
          </div>
          <div className={classes.contactsItem}>
            <span>Графік роботи:</span>
            <span className={classes.contactsDetails} />
          </div>
          <div className={classes.contactsItem}>
            <span>Адреса:</span>
            <span className={classes.contactsDetails} />
          </div>
          <div className={classes.contactsItem}>
            <span>Email:</span>
            <span className={classes.contactsDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
