import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import { useStyles } from './notification-certificate-ends.styles';

const NotificationCertificateEnds = ({ expireDate }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const formatedDate = new Date(expireDate).toLocaleString('uk-UA', { timeZone: 'UTC' });
  const [date, time] = formatedDate.split(', ');

  return (
    <div className={styles.root}>
      <div>
        <Trans i18nKey='certificate.certificateNotification' values={{ date, time }} />
      </div>
      <Button variant='outlined' component={Link} to='/my-certificates' className={styles.button}>
        {t('certificate.certificateNotificationButton')}
      </Button>
    </div>
  );
};

export default NotificationCertificateEnds;
