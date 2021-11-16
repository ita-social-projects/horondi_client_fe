import React from 'react';

import { useTranslation } from 'react-i18next';
import { useStyles } from './self-pickup.styles';
import { days } from './const';

const SelfPickup = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const schedule = Object.values(days).map((value) =>
    value.label === days.saturday.label || value.label === days.sunday.label ? (
      <div className={styles.scheduleItem}>
        {t(`checkout.schedule.${value.label}`)}
        {t('checkout.checkoutTitles.restDay')}{' '}
      </div>
    ) : (
      <div className={styles.scheduleItem}>
        {t(`checkout.schedule.${value.label}`)}
        {t('checkout.checkoutTitles.workDay')}{' '}
      </div>
    )
  );

  return (
    <div className={styles.selfPickupContainer}>
      <div className={styles.selfPickupData}>
        <div className={styles.selfPickupTitlesWrapper}>
          <h5 className={styles.scheduleTitle}>{t('checkout.checkoutTitles.schedule')}</h5>
          <h5 className={styles.scheduleTitle}>{t('checkout.checkoutTitles.address')}</h5>
        </div>
        <div className={styles.schedule}>
          <p className={styles.scheduleData}>{schedule}</p>
          <p className={`${styles.scheduleItem} ${styles.addressTitle}`}>
            {t('checkout.checkoutTitles.addressHorondi')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfPickup;
