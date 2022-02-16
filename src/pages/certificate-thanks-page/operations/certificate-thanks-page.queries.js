import { gql } from '@apollo/client';

export const getCertificatesByPaymentToken = gql`
  query ($paymentToken: String!) {
    getCertificatesByPaymentToken(paymentToken: $paymentToken) {
      __typename
      ... on Certificates {
        certificates {
          name
          email
          value
          dateStart
          dateEnd
          paymentStatus
        }
        paymentStatus
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;

export const checkCertificatesPaymentStatus = gql`
  query ($certificateName: String!, $paymentToken: String!) {
    checkCertificatesPaymentStatus(certificateName: $certificateName, paymentToken: $paymentToken) {
      __typename
      ... on Certificates {
        certificates {
          _id
          name
        }
        paymentStatus
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
