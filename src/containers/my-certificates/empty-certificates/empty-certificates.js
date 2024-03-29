import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-certificates.styles';
import routes from '../../../configs/routes';
import EmptyCertificateLight from '../../../images/certificates/emptyCertificateLight';
import EmptyCertificateDark from '../../../images/certificates/emptyCertificateDark';
import PathBack from '../../orders/cart/path-back/path-back';

const { pathToGiftСertificate } = routes;

const EmptyCertificates = () => {
  const styles = useStyles();
  const { palette } = useTheme();
  const { t } = useTranslation();

  const EmptyOrderImg = palette.type === 'light' ? EmptyCertificateLight : EmptyCertificateDark;

  return (
    <>
      <PathBack
        categoryLink={pathToGiftСertificate}
        categoryText='certificate.certificates'
        currentPageText='certificate.title'
      />
      <div className={styles.root} data-cy='empty-certificates-item'>
        <Typography className={styles.emptyTitle} variant='h2'>
          {t('certificate.emptyTitle')}
        </Typography>
        <div className={styles.defaultCertificateIcon}>
          <EmptyOrderImg alt='empty certificate icon' />
        </div>
        <Link to={pathToGiftСertificate}>
          <Button className={styles.button} variant='contained'>
            {t('certificate.buy')}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCertificates;
