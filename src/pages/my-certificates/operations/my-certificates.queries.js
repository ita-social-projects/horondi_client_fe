import { gql } from '@apollo/client';

export const getAllCertificates = gql`
  query ($skip: Int, $limit: Int) {
    getAllCertificates(skip: $skip, limit: $limit) {
      items {
        _id
        value
        isActive
        isUsed
        name
        dateStart
        dateEnd
        code
      }
      count
    }
  }
`;
