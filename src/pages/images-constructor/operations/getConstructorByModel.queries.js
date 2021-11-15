import { gql } from '@apollo/client';

export const getConstructorByModel = gql`
  query ($id: ID!) {
    getConstructorByModel(id: $id) {
      ... on Constructor {
        __typename
        _id
        name {
          lang
          value
        }
        model {
          _id
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
