import React from 'react';

import { useStyles } from './app-footer.styles';

import FooterLists from '../../containers/footer-lists';
import FooterLinks from '../../containers/footer-links';

const AppFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <div className={classes.cardDeck}>
          <FooterLists />
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
