import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FOOTER_SOCIAL_NETWORK_LINKS } from '../../translations/footer.translations';
import { LANGUAGE } from '../../configs';

import { useStyles } from './footer-links.styles';

const FooterLinks = ({ language = LANGUAGE }) => {
  const styles = useStyles();

  return (
    <div className={styles.cardBody}>
      <div className={styles.iconsBox}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {FOOTER_SOCIAL_NETWORK_LINKS[language].title}
          </Typography>
        </div>
        <div>
          <a
            className={styles.iconWrap}
            href={FOOTER_SOCIAL_NETWORK_LINKS.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </a>
          <a
            className={styles.iconWrap}
            href={FOOTER_SOCIAL_NETWORK_LINKS.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
