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

export const gitftCertificateToEmail = gql`
  mutation ($id: ID!, $email: String!, $oldEmail: String!, $language: Int!) {
    gitftCertificateToEmail(id: $id, email: $email, oldEmail: $oldEmail, language: $language) {
      __typename
      ... on Certificate {
        email
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
