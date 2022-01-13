import React from 'react';

import { useTranslation } from 'react-i18next';
import { useStyles } from './self-pickup.styles';
import { days } from './const';

const SelfPickup = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const schedule = Object.values(days).map((value) => (
    <div className={styles.scheduleItem} key={value.id}>
      <div className={styles.scheduleItemName}>{t(`checkout.schedule.${value.label}`)}</div>
      <div className={styles.scheduleItemHours}>
        {value.label === days.saturday.label || value.label === days.sunday.label
          ? t('checkout.checkoutTitles.restDay')
          : t('checkout.checkoutTitles.workDay')}
      </div>
    </div>
  ));

  return (
    <div className={styles.selfPickupContainer}>
      <div className={styles.selfPickupData}>
        <div className={styles.selfPickupTitlesWrapper}>
          <h5 className={styles.scheduleTitle}>{t('checkout.checkoutTitles.schedule')}</h5>
          <h5 className={styles.addressTitle}>{t('checkout.checkoutTitles.address')}</h5>
        </div>
        <div className={styles.scheduleWrapper}>
          <div className={styles.schedule}>{schedule}</div>
          <div className={styles.address}>{t('checkout.checkoutTitles.addressHorondi')}</div>
        </div>
      </div>
    </div>
  );
};

export default SelfPickup;
