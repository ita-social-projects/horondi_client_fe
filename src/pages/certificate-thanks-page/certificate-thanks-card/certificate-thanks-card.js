import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { useStyles } from './certificate-thanks-card.styles';
import routes from '../../../configs/routes';

const CertificateThanksCard = ({ name, email, value }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { pathToCategory, pathToMain } = routes;

  return (
    <div className={styles.thanksCardContainer} data-testid='thanks-card'>
      <div className={styles.imageWrapper} />
      <div className={styles.infoCard}>
        <div className={styles.thanksText}>
          <div className={styles.thanksForBuy}>{t('thanksPage.thanksCard.thanksForBuy')}</div>
          <div className={styles.certificateText}>
            <Trans
              i18nKey='thanksPage.thanksCard.certificateThanks'
              values={{ name, email, value }}
            />
          </div>
        </div>
        <div className={styles.controllBlock}>
          <Link to={pathToCategory}>
            <Button variant='outlined' className={styles.continueShopping}>
              {t('thanksPage.thanksCard.continueShopping')}
            </Button>
          </Link>
          <Link to={pathToMain}>
            <Button variant='outlined' className={styles.goToHomePage}>
              {t('thanksPage.thanksCard.goToHomePage')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateThanksCard;
