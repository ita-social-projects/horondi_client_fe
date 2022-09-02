import React from 'react';
import { useParams } from 'react-router';
import { useStyles } from './thanks-page.styles';
import ThanksCard from './thanks-card';

const ThanksPage = () => {
  const { orderNumber } = useParams();
  const styles = useStyles();

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksInfo}>
        <ThanksCard orderNumber={orderNumber} />
      </div>
    </div>
  );
};

export default ThanksPage;
