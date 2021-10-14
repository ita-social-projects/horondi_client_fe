import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

import { useStyles } from './footer-links.styles';

const FooterLinks = ({ showTitle, socialIconsStyles, position, setIsMenuOpen }) => {
  const styles = useStyles({ position });
  const { t } = useTranslation();

  return (
    <div className={styles.cardBody} onClick={setIsMenuOpen}>
      <div className={styles.iconsBox}>
        {showTitle && (
          <div className={styles.cardTitle}>
            <Typography variant='h5'>{t('footer.socialNetworkLinks.title')}</Typography>
          </div>
        )}
        <div className={styles.iconsContainer}>
          <a
            className={styles.iconWrap}
            href={t('footer.socialNetworkLinks.facebook')}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={socialIconsStyles} icon={faFacebook} />
          </a>
          <a
            className={styles.iconWrap}
            href={t('footer.socialNetworkLinks.instagram')}
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
