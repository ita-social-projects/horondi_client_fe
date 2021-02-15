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
        <div className={styles.schedule}>
          <h5 className={styles.scheduleTitle}>
            {CHECKOUT_TITLES[language].schedule}
          </h5>
          <p className={styles.scheduleData}>
            {Object.values(SCHEDULE[language]).map(value =>
              value === SCHEDULE[language].saturday ||
              value === SCHEDULE[language].sunday ?
                <div className={styles.scheduleItem}> {value} {CHECKOUT_TITLES[language].restDay} </div> :
                <span className={styles.scheduleItem}> {value} {CHECKOUT_TITLES[language].workDay} </span>
            )}
          </p>
        </div>
        <div className={styles.addressInfo}>
          <span className={styles.addressTitle}>
            {CHECKOUT_TITLES[language].address}
          </span>
          <span className={styles.scheduleItem}>
            {CHECKOUT_TITLES[language].addressHorondi}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelfPickup;
