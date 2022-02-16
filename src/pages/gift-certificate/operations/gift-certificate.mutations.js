import { gql } from '@apollo/client';

export const generateCertificate = gql`
  mutation ($newCertificates: [GenerateCertificateInput]!, $email: String!) {
    generateCertificate(newCertificates: $newCertificates, email: $email) {
      __typename
      ... on Certificates {
        certificates {
          _id
          name
        }
        certificatesPrice
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
