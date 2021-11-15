import { gql } from '@apollo/client';

export const getBasicById = gql`
  query ($id: ID!) {
    getBasicById(id: $id) {
      ... on Basics {
        __typename
        _id
        images {
          large
          medium
          small
          thumbnail
        }
        additionalPrice {
          value
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
