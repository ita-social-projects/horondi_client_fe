import React from 'react';

import { useStyles } from './app-footer.styles';

import FooterLists from '../../containers/footer-lists';
import FooterLinks from '../../containers/footer-links';


const AppFooter = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.cardDeck}>
          <FooterLists />
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
