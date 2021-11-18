import { gql } from '@apollo/client';

export const getPocketById = gql`
  query ($id: ID!) {
    getPocketById(id: $id) {
      ... on Pocket {
        __typename
        _id
        name {
          lang
          value
        }
        images {
          large
          medium
          small
          thumbnail
        }
        additionalPrice {
          value
          currency
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
