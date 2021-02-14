import React from 'react';
import { useStyles } from './self-pickup.styles';
import { CHECKOUT_DELIVERY_TYPES } from '../../../../../translations/checkout.translations';

const SelfPickup = ({ isLightTheme, language }) => {
  const styles = useStyles({ isLightTheme });

  return (
    <div className={styles.selfPickupContainer}>
      <h3 className={styles.selfPickupTitle}>
        {CHECKOUT_DELIVERY_TYPES[language].selfPickUP}
      </h3>
      <div className={styles.selfPickupData} />
    </div>
  );
};

export default SelfPickup;
