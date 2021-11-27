import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from '../../components/icons';
import { HORONDI } from '../../configs';
import { HORONDI_FB_LINK, HORONDI_INST_LINK } from './constants';
import { useStyles } from './social-links.styles';

const SocialLinks = ({ showTitle, position, color }) => {
  const { t } = useTranslation();
  const styles = useStyles({ position, color });

  return (
    <div className={styles.cardBody}>
      <Typography variant='h5'>
        <Link to='/' className={styles.logo}>
          {HORONDI.toUpperCase()}
        </Link>
      </Typography>
      <div className={styles.iconsBox}>
        {showTitle && (
          <div className={styles.cardTitle} data-testid='title'>
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
            <FacebookIcon color={color} />
          </a>
          <a
            className={styles.iconWrap}
            href={HORONDI_INST_LINK}
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon color={color} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
