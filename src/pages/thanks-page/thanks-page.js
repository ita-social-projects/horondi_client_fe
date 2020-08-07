import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useStyles } from './thanks-page.styles';
import {
  THANKS_PAGE_TITLE,
  THANKS_PAGE_BUTTON
} from '../../translations/thanks-page.translations';

const ThanksPage = () => {
  const styles = useStyles();
  const language = useSelector((state) => state.Language.language);

  return (
    <div className={styles.thanks}>
      <div className={styles.thanksWrapper}>
        <div className={styles.titleStyle}>
          {THANKS_PAGE_TITLE[language].thanks}
        </div>
        <Button className={styles.buttonStyle}>
          <Link to='/'>{THANKS_PAGE_BUTTON[language].continueShopping}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ThanksPage;
