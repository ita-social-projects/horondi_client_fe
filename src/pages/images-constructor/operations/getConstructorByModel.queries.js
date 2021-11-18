import { gql } from '@apollo/client';

export const getConstructorByModel = gql`
  query ($id: ID!) {
    getConstructorByModel(id: $id) {
      ... on Constructor {
        __typename
        _id
        model {
          _id
        }
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
          constructorImg
          additionalPrice {
            currency
            value
          }
        }
        model {
          _id
          name {
            lang
            value
          }
          sizes {
            _id
            name
          }
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
