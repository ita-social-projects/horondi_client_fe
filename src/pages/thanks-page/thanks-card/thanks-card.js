import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './thanks-card.styles';
import routes from '../../../configs/routes';

const ThanksCard = ({ orderNumber }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { pathToCategory, pathToMain } = routes;

  return (
    <div className={styles.thanksCardContainer} data-testid='thanks-card'>
      <div className={styles.imageWrapper} />
      <div className={styles.infoCard}>
        <div className={styles.thanksForBuy}>{t('thanksPage.thanksCard.thanksForBuy')}</div>
        <div className={styles.orderNumber}>
          {`${t('thanksPage.thanksCard.orderNumber')} ${orderNumber}`}
        </div>
        <div className={styles.controllBlock}>
          <Link to={pathToCategory} style={{ textDecoration: 'none' }}>
            <Button variant='outlined' className={styles.continueShopping}>
              {t('thanksPage.thanksCard.continueShopping')}
            </Button>
          </Link>
          <Link to={pathToMain} style={{ textDecoration: 'none' }}>
            <Button variant='outlined' className={styles.goToHomePage}>
              {t('thanksPage.thanksCard.goToHomePage')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThanksCard;
