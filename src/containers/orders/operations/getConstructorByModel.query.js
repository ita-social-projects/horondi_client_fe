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
        images {
          small
        }
        model {
          _id
          translationsKey
          name {
            lang
            value
          }
          images {
            small
            thumbnail
          }
          sizes {
            _id
            name
            available
          }
        }
        basics {
          _id
          name {
            lang
            value
          }
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
          features {
            material {
              translationsKey
            }
          }
          additionalPrice {
            value
            currency
          }
        }
        patterns {
          _id
          name {
            lang
            value
          }
          additionalPrice {
            value
            currency
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
