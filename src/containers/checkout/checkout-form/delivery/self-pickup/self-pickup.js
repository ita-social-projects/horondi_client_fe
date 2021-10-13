import React from 'react';

import { useTranslation } from 'react-i18next';
import { useStyles } from './self-pickup.styles';

const SelfPickup = ({ isLightTheme }) => {
  const styles = useStyles({ isLightTheme });
  const { t } = useTranslation();
  const getSchedule = t('checkout.schedule', { returnObjects: true });
  const schedule = Object.values(getSchedule).map((value) =>
    value === t('checkout.schedule.saturday') || value === t('checkout.schedule.sunday') ? (
      <div className={styles.scheduleItem}>
        {value} {t('checkout.checkoutTitles.restDay')}{' '}
      </div>
    ) : (
      <div className={styles.scheduleItem}>
        {value} {t('checkout.checkoutTitles.workDay')}{' '}
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
