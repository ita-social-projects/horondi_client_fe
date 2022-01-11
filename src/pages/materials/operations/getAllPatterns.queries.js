import { gql } from '@apollo/client';

export const getAllPatterns = gql`
  query {
    getAllPatterns {
      items {
        _id
        name {
          lang
          value
        }
        translationsKey
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
