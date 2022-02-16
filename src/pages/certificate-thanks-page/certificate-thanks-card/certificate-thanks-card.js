import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './certificate-thanks-card.styles';
import routes from '../../../configs/routes';

const CertificateThanksCard = ({
  name,
  value,
  email,
  paymentStatus,
  dateStart,
  dateEnd,
  count
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { pathToCategory, pathToMain } = routes;

  return (
    <div className={styles.thanksCardContainer} data-testid='thanks-card'>
      <div className={styles.imageWrapper} />
      <div className={styles.infoCard}>
        <div className={styles.thanksForBuy}>{t('thanksPage.thanksCard.thanksForBuy')}</div>
        {count === 1 ? (
          <div className={styles.certificateName}>
            {`${t('thanksPage.thanksCard.certificateName')} ${name}`}
          </div>
        ) : (
          <div className={styles.certificateName}>
            {`Certificate codes have been sent to your email `}{' '}
            <p className={styles.chunkValue}>{email}</p>
          </div>
        )}
        <div className={styles.certificateInfo}>
          {count > 1 && (
            <div className={styles.infoChunk}>
              <p className={styles.chunkName}>Certificates count: </p>
              <p className={styles.chunkValue}>{count}</p>
            </div>
          )}
          {count === 1 && (
            <div className={styles.infoChunk}>
              <p className={styles.chunkName}>{t('thanksPage.thanksCard.certificatePrice')}</p>
              <p className={styles.chunkValue}>{`${value} ${t('checkout.checkoutTitles.UAH')}`}</p>
            </div>
          )}
          <div className={styles.infoChunk}>
            <p className={styles.chunkName}>{t('thanksPage.thanksCard.email')}</p>
            <p className={styles.chunkValue}>{email}</p>
          </div>
          <div className={styles.infoChunk}>
            <p className={styles.chunkName}>
              {t('thanksPage.thanksCard.certificatePaymentStatus')}
            </p>
            <p className={styles.chunkValue}>{paymentStatus}</p>
          </div>
          <div className={styles.infoChunk}>
            <p className={styles.chunkName}>{t('thanksPage.thanksCard.dateStart')}</p>
            <p className={styles.chunkValue}>{dateStart}</p>
          </div>
          <div className={styles.infoChunk}>
            <p className={styles.chunkName}>{t('thanksPage.thanksCard.dateEnd')}</p>
            <p className={styles.chunkValue}>{dateEnd}</p>
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
