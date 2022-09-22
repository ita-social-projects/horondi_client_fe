import React from 'react';
import { useLocation } from 'react-router';
import { useStyles } from './certificate-thanks-page.styles';
import CertificateThanksCard from './certificate-thanks-card';

const CertificateThanksPage = () => {
  const { search } = useLocation();
  const styles = useStyles();

  const data = decodeURI(search).replace('?', '').split(' ');
  const [encodedEmail, totalPrice, name] = data;
  const value = parseInt(totalPrice) / 100;
  const email = decodeURIComponent(encodedEmail);

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksContainer}>
        <div className={styles.thanksInfo}>
          {data.length > 2 && <CertificateThanksCard name={name} email={email} value={value} />}
        </div>
      </div>
    </div>
  );
};

export default CertificateThanksPage;
