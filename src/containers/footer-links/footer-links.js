import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FOOTER_SOCIAL_NETWORK_LINKS } from '../../configs';

import { useStyles } from './footer-links.styles';

const FooterLinks = ({ language = 0 }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardBody}>
      <div className={classes.iconsBox}>
        <div className={classes.cardTitle}>
          <Typography variant='h5'>
            {FOOTER_SOCIAL_NETWORK_LINKS[language].title}
          </Typography>
        </div>
        <div>
          <a
            className={classes.iconWrap}
            href={FOOTER_SOCIAL_NETWORK_LINKS.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
          </a>
          <a
            className={classes.iconWrap}
            href={FOOTER_SOCIAL_NETWORK_LINKS.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ language: { language } }) => ({
  language
});

export default connect(mapStateToProps)(FooterLinks);
