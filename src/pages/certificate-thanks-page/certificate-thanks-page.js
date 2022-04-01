import React, { useState } from 'react';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useStyles } from './certificate-thanks-page.styles';
import CertificateThanksCard from './certificate-thanks-card';
import { Loader } from '../../components/loader/loader';
import {
  sendCertificatesCodesToEmail,
  certificatesPaidSubscription
} from './operations/certificate-thanks-page.queries';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { orderDataToLS } from '../../utils/order';

const CertificateThanksPage = () => {
  const styles = useStyles();
  const { i18n } = useTranslation();

  const language = i18n.language === 'ua' ? 0 : 1;

  const [paidOrderLoading, setLoading] = useState(true);
  const [certificatesArr, setCertificates] = useState(null);

  const certificatesOrderId = getFromLocalStorage(orderDataToLS.certificatesOrderId);

  const [sendCertificateCodesToEmail] = useLazyQuery(sendCertificatesCodesToEmail);

  useSubscription(certificatesPaidSubscription, {
    variables: { certificatesOrderId },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      const {
        certificatesPaid: { certificates }
      } = data;

      sendCertificateCodesToEmail({
        variables: {
          language,
          certificates
        }
      });
      setCertificates(certificates);
      setLoading(false);
    }
  });

  if (paidOrderLoading) {
    return <Loader data-testid='loader' />;
  }

  return (
    <div className={styles.thanksBackground}>
      <div className={styles.thanksContainer}>
        {!paidOrderLoading && (
          <div className={styles.thanksInfo}>
            <CertificateThanksCard
              count={certificatesArr.length}
              name={certificatesArr[0]?.name}
              email={certificatesArr[0]?.email}
              value={certificatesArr[0]?.value}
              paymentStatus={certificatesArr[0]?.paymentStatus}
              dateStart={certificatesArr[0]?.dateStart}
              dateEnd={certificatesArr[0]?.dateEnd}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateThanksPage;
