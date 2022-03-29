import { gql } from '@apollo/client';

export const certificatesPaidSubscription = gql`
  subscription CertificatesPaid($certificatesOrderId: String!) {
    certificatesPaid(certificatesOrderId: $certificatesOrderId) {
      __typename
      ... on Certificates {
        certificates {
          name
          email
          value
          paymentStatus
          dateStart
          dateEnd
        }
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;

export const sendCertificatesCodesToEmail = gql`
  query ($language: Int!, $certificates: [CertificateInput]!) {
    sendCertificatesCodesToEmail(language: $language, certificates: $certificates) {
      __typename
      ... on Certificates {
        certificates {
          name
        }
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
