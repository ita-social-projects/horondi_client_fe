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
          available
          additionalPrice {
            value
            currency
          }
        }
        pocketsWithRestrictions {
          currentPocketWithPosition {
            pocket {
              _id
              images {
                large
                medium
                small
                thumbnail
              }
            }
          }
        }
        bottoms {
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
            available
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
