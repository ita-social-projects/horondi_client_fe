import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const YourOrder = ({
  checkoutFormBtnValue,
  consentLink,
  t,
  currencySign,
  totalPriceToPay,
  values,
  language,
  isLightTheme,
  styles
}) => (
  <>
    <div className={styles.checkoutYourOrderTitleData}>
      <h2 className={styles.title}>{t('checkout.checkoutTitles.yourOrderTitle')}</h2>
      <div className={styles.checkoutTitleLine} />
    </div>
    <div className={styles.submitInfo}>
      <div className={styles.totalSum}>
        <h4 className={styles.totalSumTitle}>{t('common.toPay')}</h4>
        <p className={`${styles.totalSumTitle} ${styles.totalSumValue}`}>
          {Math.round(totalPriceToPay)}
          {'\u00A0'}
          <FontAwesomeIcon icon={currencySign} />
        </p>
      </div>
      <button type='submit' className={styles.submitBtn}>
        {checkoutFormBtnValue(values, language)}
      </button>
      {consentLink}
    </div>
  </>
);

export default YourOrder;
