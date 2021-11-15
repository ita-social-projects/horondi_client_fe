import { gql } from '@apollo/client';

export const getConstructorById = gql`
  query ($id: ID!) {
    getConstructorById(id: $id) {
      ... on Constructor {
        __typename
        _id
        name {
          lang
          value
        }
        basics {
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
          available
          additionalPrice {
            currency
            value
          }
        }
        bottoms {
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
            currency
            value
          }
          available
        }
        patterns {
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
            currency
            value
          }
          available
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
