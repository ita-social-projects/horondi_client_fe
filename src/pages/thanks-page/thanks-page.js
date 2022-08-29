import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useStyles } from './thanks-page.styles';
import ThanksCard from './thanks-card';
import routes from '../../configs/routes';
import { ORDER_NUMBER_LENGTH } from '../../configs';

const { pathToMain } = routes;

const ThanksPage = () => {
  const { orderNumber } = useParams();
  const styles = useStyles();
  const orderNumberIsValid = new RegExp(`^\\d{${ORDER_NUMBER_LENGTH}}$`).test(orderNumber);

  return (
    <div className={styles.thanksBackground}>
      {!orderNumberIsValid && <Redirect to={pathToMain} />}
      <div className={styles.thanksInfo}>
        <ThanksCard orderNumber={orderNumber} />
      </div>
    </div>
  );
};

export default ThanksPage;
