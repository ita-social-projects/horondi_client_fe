import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { HORONDI_FB_LINK, HORONDI_INST_LINK, LOGO } from '../../configs';
import { useStyles } from './footer-links.styles';

const FooterLinks = ({ showTitle, socialIconsStyles, position }) => {
  const { t } = useTranslation();
  const styles = useStyles({ position });

  return (
    <div className={styles.cardBody}>
      <Typography variant='h5'>
        <Link to='/' className={styles.logo}>
          {LOGO}
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
            <FontAwesomeIcon className={socialIconsStyles} icon={faFacebook} />
          </a>
          <a
            className={styles.iconWrap}
            href={HORONDI_INST_LINK}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={socialIconsStyles} icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
