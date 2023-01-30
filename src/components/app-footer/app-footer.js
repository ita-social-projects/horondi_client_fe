import React from 'react';
import { useStyles } from './app-footer.styles';
import { useAppStyles } from '../app/app.styles';

import FooterLists from '../../containers/footer-lists';
import SocialLinks from '../../containers/social-links';

const AppFooter = () => {
  const styles = useStyles();
  const appStyles = useAppStyles();

  return (
    <div className={styles.root}>
      <div className={`${styles.footer} mui-fixed`}>
        <div className={`${appStyles.containerWideApp} ${styles.cardDeck}`}>
          <SocialLinks
            showTitle
            color='white'
            socialIconsStyles={styles.socialIconsStyles}
            position='flex-start'
          />
          <FooterLists />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
