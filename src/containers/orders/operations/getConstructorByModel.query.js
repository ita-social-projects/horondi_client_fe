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
          features {
            material {
              _id
            }
            color {
              _id
            }
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
        }
        bottoms {
          _id
          name {
            lang
            value
          }
          features {
            material {
              _id
              translationsKey
            }
          }
          additionalPrice {
            value
            currency
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
          constructorImg
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
