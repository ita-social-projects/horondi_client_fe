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

const { pathToGiftСertificate } = routes;

const EmptyCertificates = () => {
  const styles = useStyles();
  const { palette } = useTheme();
  const { t } = useTranslation();

  const EmptyOrderImg = palette.type === 'light' ? EmptyCertificateLight : EmptyCertificateDark;

  return (
    <>
      <div className={styles.root} data-cy='empty-certificates-item'>
        <Typography className={styles.title} variant='h2'>
          {t('certificate.emptyTitle')}
        </Typography>
        <EmptyOrderImg alt='empty certificate icon' />
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
