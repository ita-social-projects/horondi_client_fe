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

export const getMaterialsBlocksByType = gql`
  query ($type: String!, $skip: Int!, $limit: Int!) {
    getMaterialsBlocksByType(type: $type, skip: $skip, limit: $limit) {
      items {
        _id
        title
        type
        image {
          medium
        }
        text {
          lang
          value
        }
        translationsKey
      }
      count
    }
  }
`;
