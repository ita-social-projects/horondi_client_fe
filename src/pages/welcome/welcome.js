import React from 'react';
import { useStyles } from './welcome.styles';
import {
  WELCOME_PAGE_TITLES,
  WELCOME_PAGE_BUTTON
} from '../../translations/welcomePage.translations';

const Welcome = () => {
  const styles = useStyles();
  const ololo = () => (
    <div className={styles.welcomeWrapper}>
      <div className={styles.titleStyle}>{WELCOME_PAGE_TITLES['0']}</div>
      <div className={styles.subTitleStyle} />
      <button className={styles.buttonStyle} type='button' />
    </div>
  );

  return <div className={styles.welcome}>{ololo()}</div>;
};

export default Welcome;
