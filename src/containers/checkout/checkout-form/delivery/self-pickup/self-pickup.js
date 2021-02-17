import React from "react";
import { useStyles } from "./self-pickup.styles";
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_TITLES,
  SCHEDULE
} from "../../../../../translations/checkout.translations";

const SelfPickup = ({ isLightTheme, language }) => {
  const styles = useStyles({ isLightTheme });

  return (
    <div className={styles.selfPickupContainer}>
      <h3 className={styles.selfPickupTitle}>
        {CHECKOUT_DELIVERY_TYPES[language].selfPickUP}
      </h3>
      <div className={styles.selfPickupData}>
        <div className={styles.selfPickupTitlesWrapper}>
          <h5 className={styles.scheduleTitle}>
            {CHECKOUT_TITLES[language].schedule}
          </h5>
          <h5 className={styles.scheduleTitle}>
            {CHECKOUT_TITLES[language].address}
          </h5>
        </div>
        <div className={styles.schedule}>
          <p className={styles.scheduleData}>
            {Object.values(SCHEDULE[language]).map(value =>
              value === SCHEDULE[language].saturday ||
              value === SCHEDULE[language].sunday ?
                <div className={styles.scheduleItem}> {value} {CHECKOUT_TITLES[language].restDay} </div> :
                <div className={styles.scheduleItem}> {value} {CHECKOUT_TITLES[language].workDay} </div>
            )}
          </p>
          <p className={`${styles.scheduleItem} ${styles.addressTitle}`}>
            {CHECKOUT_TITLES[language].addressHorondi}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfPickup;
