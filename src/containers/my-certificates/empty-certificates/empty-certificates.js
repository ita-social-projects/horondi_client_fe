import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-certificates.styles';
import routes from '../../../configs/routes';
import EmptyCertificateImg from '../../../images/certificates/emptyCertificatesImg';

const { pathToGiftСertificate } = routes;

const EmptyCertificates = () => {
  const styles = useStyles();
  const { palette } = useTheme();
  const { t } = useTranslation();

  const isLightTheme = palette.type === 'light';

  const emptyOrderImgLink = isLightTheme
    ? EmptyCertificateImg.emptyCertificateLight
    : EmptyCertificateImg.emptyCertificateDark;

  return (
    <>
      <div className={styles.root} data-cy='empty-certificates-item'>
        <Typography className={styles.title} variant='h2'>
          {t('certificate.emptyTitle')}
        </Typography>
        <img src={emptyOrderImgLink} alt='empty certificate icon' />
        <Link to={pathToGiftСertificate}>
          <Button className={styles.button} variant='contained' onClick={() => {}}>
            {t('certificate.buy')}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCertificates;
