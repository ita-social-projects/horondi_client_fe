import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import facebookIcon from '../../images/footer-icons/fb.svg';
import finstagramIcon from '../../images/footer-icons/insta.svg';

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
            <img alt='Facebook' src={facebookIcon} />
          </a>
          <a
            className={styles.iconWrap}
            href={HORONDI_INST_LINK}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='Instagram' src={finstagramIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
