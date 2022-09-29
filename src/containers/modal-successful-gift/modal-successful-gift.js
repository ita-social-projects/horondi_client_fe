import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@material-ui/core';

import { useStyles } from '../modal-gift-certificate/modal-gift-certificate.styles';

const ModalSuccessfulGift = ({ email, setIsComplete }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div className={styles.formWrapper}>
      <Typography variant='h4' className={styles.successfulTitle}>
        {t('modal.giftCertificate.successfulTitle')}
      </Typography>
      <Typography variant='h5'>{email}</Typography>
      <Button
        className={styles.dismissButton}
        variant='contained'
        onClick={() => setIsComplete(false)}
      >
        {t('modal.giftCertificate.dismissButton')}
      </Button>
    </div>
  );
};

export default ModalSuccessfulGift;
