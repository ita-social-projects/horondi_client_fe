import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './self-pickup.styles';
import { SCHEDULE } from '../../../../../translations/checkout.translations';

const SelfPickup = ({ isLightTheme, language }) => {
  const styles = useStyles({ isLightTheme });
  const { t } = useTranslation();

  return (
    <div className={styles.selfPickupContainer}>
      <h3 className={styles.selfPickupTitle}>{t('delivery.selfPickup')}</h3>
      <div className={styles.selfPickupData}>
        <div className={styles.selfPickupTitlesWrapper}>
          <h5 className={styles.scheduleTitle}>{t('delivery.schedule')}</h5>
          <h5 className={styles.scheduleTitle}>{t('delivery.address')}</h5>
        </div>
        <div className={styles.schedule}>
          <p className={styles.scheduleData}>
            {Object.values(SCHEDULE[language]).map((value) =>
              value === SCHEDULE[language].saturday || value === SCHEDULE[language].sunday ? (
                <div className={styles.scheduleItem}>
                  {value} {t('delivery.restDay')}{' '}
                </div>
              ) : (
                <div className={styles.scheduleItem}>
                  {value} {t('delivery.workDay')}{' '}
                </div>
              )
            )}
          </p>
          <p className={`${styles.scheduleItem} ${styles.addressTitle}`}>
            {t('delivery.addressHorondi')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfPickup;
