import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './welcome.styles';
import {
  WELCOME_PAGE_TITLES,
  WELCOME_PAGE_BUTTON
} from '../../translations/welcomePage.translations';

const Welcome = () => {
  const styles = useStyles();
  const language = useSelector((state) => state.Language.language);

  const languageChoice = () =>
    language === 0 ? (
      <div className={styles.welcomeWrapper}>
        <div className={styles.titleStyle}>
          {WELCOME_PAGE_TITLES['0'].welcome}
        </div>
        <div className={styles.subTitleStyle}>
          {WELCOME_PAGE_TITLES['0'].registerSuccessful}
        </div>
        <button className={styles.buttonStyle} type='button'>
          {WELCOME_PAGE_BUTTON['0'].goToShop}
        </button>
      </div>
    ) : (
      <div className={styles.welcomeWrapper}>
        <div className={styles.titleStyle}>
          {WELCOME_PAGE_TITLES['1'].welcome}
        </div>
        <div className={styles.subTitleStyle}>
          {WELCOME_PAGE_TITLES['1'].registerSuccessful}
        </div>
        <button className={styles.buttonStyle} type='button'>
          {WELCOME_PAGE_BUTTON['1'].goToShop}
        </button>
      </div>
    );

  return <div className={styles.welcome}>{languageChoice()}</div>;
};

export default Welcome;
