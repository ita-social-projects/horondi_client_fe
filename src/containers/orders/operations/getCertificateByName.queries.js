import { gql } from '@apollo/client';

export const getCertificateByName = gql`
  query ($name: String!) {
    getCertificateByName(name: $name) {
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
