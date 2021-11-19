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
          additionalPrice {
            value
            currency
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
            value
            currency
          }
        }
        patterns {
          _id
          translationsKey
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
            value
            currency
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
            additionalPrice {
              value
              currency
            }
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
