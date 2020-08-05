import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useStyles } from './thanks-page.styles';
import {
  THANKS_PAGE_TITLE,
  THANKS_PAGE_BUTTON
} from '../../translations/thanks-page.translations';

const Thanks = () => {
  const styles = useStyles();
  const language = useSelector((state) => state.Language.language);

  return (
    <div className={styles.thanks}>
      <div className={styles.thanksWrapper}>
        <div className={styles.titleStyle}>
          {language === 0
            ? THANKS_PAGE_TITLE['0'].thanks
            : THANKS_PAGE_TITLE['1'].thanks}
        </div>
        <Link className={styles.linkStyle} to='/'>
          {language === 0
            ? THANKS_PAGE_BUTTON['0'].continueShopping
            : THANKS_PAGE_BUTTON['1'].continueShopping}
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
