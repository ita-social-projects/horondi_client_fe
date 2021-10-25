import { gql } from '@apollo/client';

export const getAllPatternsQuery = gql`
  query ($skip: Int, $limit: Int) {
    getAllPatternsQuery(skip: $skip, limit: $limit) {
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
