import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import facebookIcon from '../../images/footer-icons/facebook.svg';
import instagramIcon from '../../images/footer-icons/instagram.svg';

import { HORONDI, HORONDI_FB_LINK, HORONDI_INST_LINK } from '../../configs';
import { useStyles } from './footer-links.styles';

const FooterLinks = ({ showTitle, position }) => {
  const { t } = useTranslation();
  const styles = useStyles({ position });

  return (
    <div className={styles.cardBody}>
      <Typography variant='h5'>
        <Link to='/' className={styles.logo}>
          {HORONDI.toUpperCase()}
        </Link>
      </Typography>
      <div className={styles.iconsBox}>
        {showTitle && (
          <div className={styles.cardTitle}>
            <Typography variant='h5'>{t('footer.socialNetworkLinks')}</Typography>
          </div>
        )}
        <div className={styles.iconsContainer}>
          <a
            className={styles.iconWrap}
            href={HORONDI_FB_LINK}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='Facebook' src={facebookIcon} />
          </a>
          <a
            className={styles.iconWrap}
            href={HORONDI_INST_LINK}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='Instagram' src={instagramIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
