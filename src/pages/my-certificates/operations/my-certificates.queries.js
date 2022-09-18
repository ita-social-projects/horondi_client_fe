import { gql } from '@apollo/client';

export const getAllUserCertificates = gql`
  query ($skip: Int, $limit: Int) {
    getAllUserCertificates(skip: $skip, limit: $limit) {
      __typename
      ... on PaginatedCertificate {
        items {
          _id
          name
          value
          isUsed
          isActivated
          inProgress
          isExpired
          dateStart
          dateEnd
        }
        count
      }
    }
  }
`;
