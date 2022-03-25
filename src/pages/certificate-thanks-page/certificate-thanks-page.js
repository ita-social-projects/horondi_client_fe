import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useStyles } from './certificate-thanks-page.styles';
import CertificateThanksCard from './certificate-thanks-card';
import { Loader } from '../../components/loader/loader';
import { ORDER_PAYMENT_STATUS } from '../../utils/thank-you';
import {
  getCertificatesByPaymentToken,
  checkCertificatesPaymentStatus,
  sendCertificatesCodesToEmail
} from './operations/certificate-thanks-page.queries';
import { PAYMENT_TOKEN_LENGTH } from '../../configs';

const CertificateThanksPage = () => {
  const styles = useStyles();
  const router = useLocation();
  const { i18n } = useTranslation();

  const language = i18n.language === 'ua' ? 0 : 1;

  const [paidOrderLoading, setLoading] = useState(true);
  const [certificatesArr, setCertificates] = useState(null);

  const [checkCertificatePaymentStatus] = useLazyQuery(checkCertificatesPaymentStatus);
  const [sendCertificateCodesToEmail] = useLazyQuery(sendCertificatesCodesToEmail);

  const [getCertificateByPaymentToken, { refetch }] = useLazyQuery(getCertificatesByPaymentToken, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      const { certificates, paymentStatus } = data.getCertificatesByPaymentToken;

      if (paymentStatus !== ORDER_PAYMENT_STATUS.PAID) {
        checkCertificatePaymentStatus({
          variables: {
            certificateName: certificatesOrderId,
            paymentToken
          }
        });
        refetch({
          variables: {
            paymentToken
          }
        });
      } else {
        sendCertificateCodesToEmail({
          variables: {
            language,
            certificates
          }
        });
        setCertificates(certificates);
        setLoading(false);
      }
    }
  });

  const { certificatesOrderId } = router.state;
  const paymentToken = router.pathname.slice(router.pathname.length - PAYMENT_TOKEN_LENGTH);

  useEffect(() => {
    if (paymentToken) {
      getCertificateByPaymentToken({
        variables: {
          paymentToken
        }
      });
    }
  }, [paymentToken, getCertificateByPaymentToken]);

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
