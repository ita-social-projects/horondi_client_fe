import { gql } from '@apollo/client';

export const getCertificateByParams = gql`
  query ($params: CertificateInput!) {
    getCertificateByParams(params: $params) {
      __typename
      ... on Certificate {
        _id
        name
        isExpired
        isUsed
        value
        email
        ownedBy {
          _id
        }
      }
    }
  }
`;
