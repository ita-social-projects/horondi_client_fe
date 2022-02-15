import { gql } from '@apollo/client';

export const getPaymentCheckoutForCertificates = gql`
  query ($data: PaymentInputForCertificate!) {
    getPaymentCheckoutForCertificates(data: $data) {
      __typename
      ... on Certificates {
        paymentUrl
        paymentToken
        certificatesOrderId
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
