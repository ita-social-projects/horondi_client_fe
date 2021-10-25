import { gql } from '@apollo/client';

export const getAllPatterns = gql`
  query ($skip: Int, $limit: Int) {
    getAllPatterns(skip: $skip, limit: $limit) {
      items {
        _id
        name {
          lang
          value
        }
        available
        images {
          medium
          small
        }
      }
      count
    }
  }
`;
