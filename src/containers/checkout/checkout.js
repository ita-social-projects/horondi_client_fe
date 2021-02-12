import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './checkout.styles';
import { CHECKOUT_TITLES } from '../../translations/checkout.translations';
import CheckoutForm from './checkout-form';

const Checkout = () => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));
  const styles = useStyles({
    isLightTheme
  });

  return (
    <div className={styles.root}>
      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutHeader}>
          <div className={styles.checkoutTitleInfo}>
            <div className={styles.checkoutTitleInfoData}>
              <Link to='/cart' className={styles.backBtn}>
                <KeyboardBackspaceIcon
                  color={isLightTheme ? 'primary' : 'action'}
                  className={styles.backBtnLine}
                />
              </Link>
              <h2 className={styles.checkoutTitle}>
                {CHECKOUT_TITLES[language].checkoutTitle}
              </h2>
            </div>
            <div className={styles.checkoutTitleLine} />
          </div>
          <div className={styles.checkoutYourOrderTitleData}>
            <h2 className={styles.checkoutTitle}>
              {CHECKOUT_TITLES[language].yourOrderTitle}
            </h2>
            <div className={styles.checkoutTitleLine} />
          </div>
        </div>
        <div className={styles.checkoutMain}>
          <CheckoutForm language={language} isLightTheme={isLightTheme} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
