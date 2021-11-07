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
        translations_key
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
